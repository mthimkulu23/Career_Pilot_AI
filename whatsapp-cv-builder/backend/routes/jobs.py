from flask import Blueprint, request, jsonify
from db.jobs import create_job, get_all_jobs, update_job_status, get_job_by_id
from services.matching import match_and_alert_candidates

jobs_bp = Blueprint("jobs", __name__)

@jobs_bp.route("/jobs", methods=["POST"])
def api_create_job():
    """Creates a new job post in draft mode."""
    data = request.json
    title = data.get("title")
    description = data.get("description")
    required_skills = data.get("required_skills", [])
    
    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400
        
    new_job = create_job(title, description, required_skills)
    return jsonify(new_job), 201

@jobs_bp.route("/jobs", methods=["GET"])
def api_get_jobs():
    """Retrieves all jobs."""
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
