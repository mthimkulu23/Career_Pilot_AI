import os
from flask import Blueprint, request, jsonify, session, send_from_directory, current_app
from werkzeug.utils import secure_filename
from db.users import get_user_by_id
from db.connection import get_db
from bson.objectid import ObjectId
from datetime import datetime, timezone

candidates_bp = Blueprint("candidates", __name__)

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), '..', 'uploads', 'cvs')
ALLOWED_EXTENSIONS = {'pdf'}
MAX_SIZE_BYTES = 5 * 1024 * 1024  # 5 MB

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def _allowed(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def _current_user_id():
    return session.get("user_id")


# ── GET current user's uploaded CV metadata ─────────────────────────────────
@candidates_bp.route("/candidates/cv", methods=["GET"])
def get_cv():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    db = get_db()
    record = db["candidate_cvs"].find_one({"user_id": user_id})
    if not record:
        return jsonify({"cv": None}), 200

    return jsonify({
        "cv": {
            "fileName": record.get("fileName"),
            "uploadedAt": record.get("uploadedAt").isoformat() if record.get("uploadedAt") else None,
            "url": f"/api/candidates/cv/download",
        }
    }), 200


# ── UPLOAD a CV (PDF only, max 5MB) ─────────────────────────────────────────
@candidates_bp.route("/candidates/cv/upload", methods=["POST"])
def upload_cv():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    if 'cv' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['cv']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400
    if not _allowed(file.filename):
        return jsonify({"error": "Only PDF files are accepted"}), 400

    # Read into memory to check size before saving
    file_bytes = file.read()
    if len(file_bytes) > MAX_SIZE_BYTES:
        return jsonify({"error": "File must be under 5MB"}), 400

    # Save to disk — one file per user (overwrite old one)
    safe_name = secure_filename(f"{user_id}.pdf")
    save_path = os.path.join(UPLOAD_FOLDER, safe_name)
    with open(save_path, 'wb') as f:
        f.write(file_bytes)

    # Upsert record in MongoDB
    db = get_db()
    now = datetime.now(timezone.utc)
    db["candidate_cvs"].update_one(
        {"user_id": user_id},
        {"$set": {
            "user_id": user_id,
            "fileName": secure_filename(file.filename),
            "uploadedAt": now,
            "filePath": save_path,
        }},
        upsert=True
    )

    return jsonify({
        "message": "CV uploaded successfully",
        "cv": {
            "fileName": secure_filename(file.filename),
            "uploadedAt": now.isoformat(),
            "url": "/api/candidates/cv/download",
        }
    }), 200


# ── DOWNLOAD the CV ──────────────────────────────────────────────────────────
@candidates_bp.route("/candidates/cv/download", methods=["GET"])
def download_cv():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    safe_name = secure_filename(f"{user_id}.pdf")
    return send_from_directory(
        os.path.abspath(UPLOAD_FOLDER),
        safe_name,
        as_attachment=True,
        download_name="my_cv.pdf"
    )


# ── STATS: CV count + applications submitted ─────────────────────────────────
@candidates_bp.route("/candidates/stats", methods=["GET"])
def candidate_stats():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    db = get_db()
    cv_count = db["candidate_cvs"].count_documents({"user_id": user_id})
    apps_submitted = db["applications"].count_documents({"user_id": user_id})

    return jsonify({
        "cv_count": cv_count,
        "applications_submitted": apps_submitted,
    }), 200
