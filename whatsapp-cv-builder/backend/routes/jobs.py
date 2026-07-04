from flask import Blueprint, request, jsonify, session
from db.jobs import create_job, get_all_jobs, update_job_status, get_job_by_id
from db.applications import create_application
from services.matching import match_and_alert_candidates

jobs_bp = Blueprint("jobs", __name__)

@jobs_bp.route("/jobs", methods=["POST"])
def api_create_job():
    """Creates a new job post associated with the logged-in employer."""
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401

    data = request.json
    title = data.get("title")
    description = data.get("description")
    company = data.get("company", "")
    location = data.get("location", "")
    job_type = data.get("type", "Full-time")
    salary = data.get("salary", "")
    required_skills = data.get("required_skills", [])
    
    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400
        
    employer_id = session["user_id"]
    
    from services.openai_service import normalize_job_description
    normalized_data = normalize_job_description(title, description, required_skills)
    
    new_job = create_job(employer_id, title, description, required_skills, company, location, job_type, salary, normalized_data)
    
    # Trigger matching engine and WhatsApp alerts for new job
    match_and_alert_candidates(new_job)
    
    return jsonify(new_job), 201

@jobs_bp.route("/jobs/<job_id>/apply", methods=["POST"])
def api_apply_job(job_id):
    """Allows a candidate to apply for a job."""
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401
        
    candidate_id = session["user_id"]
    try:
        app = create_application(job_id, candidate_id)
        return jsonify(app), 201
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": "Failed to apply"}), 500

@jobs_bp.route("/jobs", methods=["GET"])
def api_get_jobs():
    """Retrieves all jobs, optionally filtered by employer_id."""
    employer_id = request.args.get("employer_id")
    from db.jobs import get_jobs_by_employer
    
    if employer_id:
        jobs = get_jobs_by_employer(employer_id)
    else:
        jobs = get_all_jobs()
        
    return jsonify(jobs), 200

@jobs_bp.route("/jobs/<job_id>/publish", methods=["POST"])
def api_publish_job(job_id):
    """Publishes a job post and triggers candidate match-alerts."""
    job = get_job_by_id(job_id)
    if not job:
        return jsonify({"error": "Job not found"}), 404
        
    update_job_status(job_id, "published")
    job["status"] = "published"
    
    # Trigger matching and alert notifications to candidates
    notified_phones = match_and_alert_candidates(job)
    
    return jsonify({
        "message": "Job published successfully and alerts dispatched",
        "notified_candidates_count": len(notified_phones),
        "notified_phones": notified_phones
    }), 200
