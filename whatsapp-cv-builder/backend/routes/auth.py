from flask import Blueprint, request, jsonify, session
from db.users import create_user, authenticate_user, get_user_by_id, activate_subscription

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
