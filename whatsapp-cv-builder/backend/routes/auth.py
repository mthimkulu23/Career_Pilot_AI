from flask import Blueprint, request, jsonify, session
import os
import mailtrap as mt
from db.users import (
    create_user, authenticate_user, get_user_by_id, activate_subscription,
    get_user_by_email, create_reset_token, reset_password_with_token
)

auth_bp = Blueprint("auth", __name__)

# ─── REGISTER ────────────────────────────────────────────────────────────────
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    name     = data.get("name", "").strip()
    surname  = data.get("surname", "").strip()
    email    = data.get("email", "").strip()
    password = data.get("password", "")
    role     = data.get("role", "candidate")

    # Basic validation
    if not all([name, surname, email, password]):
        return jsonify({"error": "All fields are required"}), 400
    if len(password) < 6:
        return jsonify({"error": "Password must be at least 6 characters"}), 400

    try:
        user = create_user(name, surname, email, password, role)
    except ValueError as e:
        return jsonify({"error": str(e)}), 409  # 409 Conflict

    # Store user id in session
    session["user_id"] = user["_id"]
    session["role"]    = user["role"]

    return jsonify({
        "message": "Account created successfully",
        "user": user
    }), 201


# ─── LOGIN ────────────────────────────────────────────────────────────────────
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    email    = data.get("email", "").strip()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    user = authenticate_user(email, password)
    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    # Store user id in session
    session["user_id"] = user["_id"]
    session["role"]    = user["role"]

    return jsonify({
        "message": "Login successful",
        "user": user
    }), 200


# ─── LOGOUT ───────────────────────────────────────────────────────────────────
@auth_bp.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return jsonify({"message": "Logged out"}), 200


# ─── CURRENT USER ─────────────────────────────────────────────────────────────
@auth_bp.route("/me", methods=["GET"])
def me():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401
    user = get_user_by_id(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"user": user}), 200

# ─── SUBSCRIBE (MOCK PAYWALL) ─────────────────────────────────────────────────
@auth_bp.route("/subscribe", methods=["POST"])
def subscribe():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401
    
    activate_subscription(user_id)
    return jsonify({"message": "Subscription activated successfully"}), 200

# ─── FORGOT PASSWORD ──────────────────────────────────────────────────────────
@auth_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    data = request.get_json()
    if not data or not data.get("email"):
        return jsonify({"error": "Email is required"}), 400
        
    email = data.get("email").strip()
    user = get_user_by_email(email)
    
    if not user:
        # To prevent email enumeration, return a success message even if email not found
        return jsonify({"message": "If that email is registered, you will receive a reset link."}), 200
        
    token = create_reset_token(user["_id"])
    
    # Use the base URL the request came from so the link works regardless of port
    base_url = request.host_url.rstrip('/')
    reset_link = f"{base_url}/reset-password?token={token}"
    
    # Send actual email using Mailtrap
    try:
        mail = mt.Mail(
            sender=mt.Address(email="hello@demomailtrap.co", name="CareerPilot AI"),
            to=[mt.Address(email=email)],
            subject="Reset Your Password",
            text=f"Click the link to reset your password: {reset_link}",
            category="Password Reset",
        )
        
        # In a real scenario, use os.environ.get("MAILTRAP_TOKEN")
        client = mt.MailtrapClient(token=os.environ.get("MAILTRAP_TOKEN", "d07cbcc87114a7c53dc09af84dec1456"))
        response = client.send(mail)
        print("Mailtrap response:", response)
    except Exception as e:
        print("Failed to send email via Mailtrap:", str(e))
        # We still return 200 to prevent enumeration
        
    return jsonify({"message": "If that email is registered, you will receive a reset link."}), 200

# ─── RESET PASSWORD ───────────────────────────────────────────────────────────
@auth_bp.route("/reset-password", methods=["POST"])
def reset_password():
    data = request.get_json()
    token = data.get("token")
    new_password = data.get("password")
    
    if not token or not new_password:
        return jsonify({"error": "Token and new password are required"}), 400
        
    if len(new_password) < 6:
        return jsonify({"error": "Password must be at least 6 characters"}), 400
        
    try:
        reset_password_with_token(token, new_password)
        return jsonify({"message": "Password has been successfully reset."}), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
