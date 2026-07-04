import os
from flask import Blueprint, request, jsonify, session, send_from_directory, current_app
from werkzeug.utils import secure_filename
from db.users import get_user_by_id
from db.connection import get_db
from bson.objectid import ObjectId
from datetime import datetime, timezone

import PyPDF2
from services.openai_service import extract_cv_info
from services.matching import match_candidate_against_all_jobs

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

    # Extract text from PDF
    cv_text = ""
    try:
        with open(save_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                cv_text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading PDF: {e}")

    # Use OpenAI to extract explicitly normalized info
    extracted_info = extract_cv_info(cv_text)

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
            "normalized_data": extracted_info
        }},
        upsert=True
    )
    
    # Save the extracted skills to the main user profile
    db["users"].update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {
            "skills": extracted_info.get("normalized_skills", []),
            "experience_summary": extracted_info.get("experience_summary", ""),
            "education": extracted_info.get("education_level", ""),
            "normalized_data": extracted_info
        }}
    )

    # Trigger automatic matching for all active jobs (scores them, no auto apply)
    match_candidate_against_all_jobs(user_id, extracted_info)

    return jsonify({
        "message": "CV uploaded successfully",
        "cv": {
            "fileName": secure_filename(file.filename),
            "uploadedAt": now.isoformat(),
            "url": "/api/candidates/cv/download",
        }
    }), 200

# ── UPLOAD text profile (manual 5-question form or raw text) ─────────────────
@candidates_bp.route("/candidates/upload_text", methods=["POST"])
def upload_text():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    data = request.json
    raw_text = data.get("raw_text")
    structured_answers = data.get("structured_answers", {})

    if not raw_text:
        return jsonify({"error": "No text provided"}), 400

    # Use OpenAI to extract normalized data from the raw text
    extracted_info = extract_cv_info(raw_text)

    # Merge structured answers into normalized_data for better accuracy
    if structured_answers:
        years_raw = structured_answers.get("years_experience", "0")
        try:
            exp_years = int("".join(filter(str.isdigit, str(years_raw)))) if years_raw else 0
        except Exception:
            exp_years = 0

        # Override/enrich what OpenAI extracted with the explicit answers
        extracted_info["normalized_skills"] = list(set(
            extracted_info.get("normalized_skills", []) +
            [structured_answers.get("main_skill", "")]
        ))
        extracted_info["experience_years"] = extracted_info.get("experience_years") or exp_years
        extracted_info["education_level"] = extracted_info.get("education_level") or structured_answers.get("qualification", "")

    db = get_db()
    now = datetime.now(timezone.utc)

    # Update the main user document
    db["users"].update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {
            "skills": extracted_info.get("normalized_skills", []),
            "experience_summary": extracted_info.get("experience_summary", ""),
            "education": extracted_info.get("education_level", ""),
            "normalized_data": extracted_info,
            **({"full_name": structured_answers.get("full_name")} if structured_answers.get("full_name") else {}),
            **({"phone": structured_answers.get("phone_number")} if structured_answers.get("phone_number") else {}),
        }}
    )

    # Upsert the candidate_profiles collection (used by the AI matcher)
    db["candidate_profiles"].update_one(
        {"user_id": user_id},
        {"$set": {
            "user_id": user_id,
            "source": "web_form",
            "structured_answers": structured_answers,
            "normalized_data": extracted_info,
            "updated_at": now,
        }},
        upsert=True
    )

    match_candidate_against_all_jobs(user_id, extracted_info)

    return jsonify({"message": "Profile created successfully"}), 200

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


# ── GET candidate's applications ─────────────────────────────────────────────
@candidates_bp.route("/candidates/applications", methods=["GET"])
def get_candidate_applications():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    from db.applications import get_applications_by_candidate
    from db.jobs import get_job_by_id
    
    apps = get_applications_by_candidate(user_id)
    # Populate job details
    for app in apps:
        job = get_job_by_id(app["job_id"])
        if job:
            app["job_title"] = job.get("title")
            app["company"] = job.get("company")
            app["location"] = job.get("location")
            app["salary"] = job.get("salary")
            app["job_type"] = job.get("type")
            
    return jsonify(apps), 200


# ── GET candidate's match scores ─────────────────────────────────────────────
@candidates_bp.route("/candidates/matches", methods=["GET"])
def get_candidate_matches():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401
        
    db = get_db()
    matches = list(db["job_matches"].find({"candidate_id": ObjectId(user_id)}))
    
    match_dict = {}
    for match in matches:
        match_dict[str(match["job_id"])] = {
            "score": match.get("score", 0),
            "is_match": match.get("is_match", False),
            "reason": match.get("reason", "")
        }
        
    return jsonify(match_dict), 200

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

# ── POST candidate coach message ──────────────────────────────────────────────
@candidates_bp.route("/candidates/coach", methods=["POST"])
def candidate_coach():
    """Handles messages sent to the AI Career Coach"""
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401
        
    data = request.json
    message = data.get("message")
    if not message:
        return jsonify({"error": "Message is required"}), 400
        
    db = get_db()
    # Fetch candidate profile to provide context to the AI coach
    candidate_profile = db["candidate_profiles"].find_one({"user_id": user_id}, {"_id": 0})
    if not candidate_profile:
        # Fallback to user document if profile not fully initialized
        candidate_profile = db["users"].find_one({"_id": ObjectId(user_id)}, {"_id": 0, "password_hash": 0})
        
    from services.openai_service import generate_coach_response
    reply = generate_coach_response(message, candidate_profile or {})
    
    return jsonify({"reply": reply}), 200


# ── CHECK if candidate has completed profile setup ────────────────────────────
@candidates_bp.route("/candidates/profile-status", methods=["GET"])
def profile_status():
    user_id = _current_user_id()
    if not user_id:
        return jsonify({"error": "Not authenticated"}), 401

    db = get_db()
    user = db["users"].find_one({"_id": ObjectId(user_id)})
    has_profile = bool(user and user.get("normalized_data"))
    return jsonify({"has_profile": has_profile}), 200
