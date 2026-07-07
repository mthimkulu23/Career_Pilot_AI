from db.connection import get_db
from bson.objectid import ObjectId
import hashlib
import os
import secrets
from datetime import datetime, timezone, timedelta

def get_users_collection():
    """Returns the PyMongo collection for users."""
    return get_db()["users"]

def get_tokens_collection():
    """Returns the PyMongo collection for password reset tokens."""
    return get_db()["reset_tokens"]

def _hash_password(password):
    """Simple SHA-256 hash with a salt."""
    salt = os.urandom(16).hex()
    hashed = hashlib.sha256((salt + password).encode()).hexdigest()
    return f"{salt}:{hashed}"

def _verify_password(password, stored):
    """Verifies a plaintext password against a stored salt:hash."""
    try:
        salt, hashed = stored.split(":")
        return hashlib.sha256((salt + password).encode()).hexdigest() == hashed
    except Exception:
        return False

def get_user_by_email(email):
    """Finds a user by email address."""
    return get_users_collection().find_one({"email": email.lower().strip()})

def get_user_by_id(user_id):
    """Finds a user by their MongoDB ObjectId."""
    user = get_users_collection().find_one({"_id": ObjectId(user_id)})
    if user:
        user["_id"] = str(user["_id"])
        user.pop("password", None)  # Never return password
    return user

def create_user(name, surname, email, password, role="candidate"):
    """
    Creates a new user. Role must be 'candidate', 'employer', or 'admin'.
    Returns the created user dict (without password) or raises on duplicate email.
    """
    # Check for existing email
    if get_user_by_email(email):
        raise ValueError("Email already registered")

    valid_roles = {"candidate", "employer", "admin"}
    if role not in valid_roles:
        role = "candidate"

    user = {
        "name": name.strip(),
        "surname": surname.strip(),
        "email": email.lower().strip(),
        "password": _hash_password(password),
        "role": role,
    }
    
    if role == "employer":
        user["subscriptionActive"] = False

    result = get_users_collection().insert_one(user)
    user["_id"] = str(result.inserted_id)
    user.pop("password")
    return user

def authenticate_user(email, password):
    """
    Authenticates a user by email and password.
    Returns the user dict (without password) if valid, else None.
    """
    user = get_user_by_email(email)
    if not user:
        return None
    if not _verify_password(password, user.get("password", "")):
        return None
    user["_id"] = str(user["_id"])
    user.pop("password")
    return user

def activate_subscription(user_id):
    """
    Activates an employer's subscription.
    """
    get_users_collection().update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"subscriptionActive": True}}
    )
    return True

# ─── PASSWORD RESET LOGIC ───────────────────────────────────────────────────

def create_reset_token(user_id):
    """Generates a secure token, saves it with an expiration, and returns it."""
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(hours=1)
    
    get_tokens_collection().insert_one({
        "user_id": ObjectId(user_id),
        "token": token,
        "expires_at": expires_at
    })
    
    return token

def reset_password_with_token(token, new_password):
    """Verifies a token and updates the user's password if valid."""
    tokens_col = get_tokens_collection()
    
    # Find token
    token_doc = tokens_col.find_one({"token": token})
    if not token_doc:
        raise ValueError("Invalid or expired reset token.")
    
    # Check expiration
    expires_at = token_doc["expires_at"]
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
        
    if datetime.now(timezone.utc) > expires_at:
        tokens_col.delete_one({"_id": token_doc["_id"]})
        raise ValueError("This reset token has expired.")
    
    # Update user's password
    user_id = token_doc["user_id"]
    hashed_password = _hash_password(new_password)
    
    get_users_collection().update_one(
        {"_id": user_id},
        {"$set": {"password": hashed_password}}
    )
    
    # Delete token so it can't be reused
    tokens_col.delete_one({"_id": token_doc["_id"]})
    
    return True
