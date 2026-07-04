from flask import Blueprint, jsonify, session
from db.jobs import get_jobs_by_employer
from db.applications import get_applications_for_employer
from db.users import get_user_by_id

employer_bp = Blueprint("employer", __name__)

@employer_bp.route("/employer/dashboard", methods=["GET"])
def get_employer_dashboard_stats():
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401
        
    user_id = session["user_id"]
    
    # 1. Get all jobs by this employer
    employer_jobs = get_jobs_by_employer(user_id)
    job_ids = [job["_id"] for job in employer_jobs]
    active_jobs_count = sum(1 for job in employer_jobs if job.get("status") == "published")
    
    # 2. Get all applications for these jobs
    applications = get_applications_for_employer(job_ids)
    
    # Calculate stats
    total_applicants_count = len(applications)
    new_applications_count = sum(1 for app in applications if app.get("status") == "new")
    
    # Optional response rate logic (simplified placeholder for now)
    response_rate = "0%" if total_applicants_count == 0 else f"{int(((total_applicants_count - new_applications_count) / total_applicants_count) * 100)}%"
    
    # 3. Format Recent Applications
    recent_apps = []
    # Take the top 5 most recent
    for app in applications[:5]:
        candidate_id = app["candidate_id"]
        job_id = app["job_id"]
        
        # Get candidate name
        candidate = get_user_by_id(candidate_id)
        candidate_name = f"{candidate.get('name', 'Unknown')} {candidate.get('surname', '')}".strip() if candidate else "Unknown Candidate"
        
        # Get job title
        job_title = next((job["title"] for job in employer_jobs if job["_id"] == job_id), "Unknown Job")
        
        recent_apps.append({
            "id": app["_id"],
            "candidate_name": candidate_name,
            "job_title": job_title,
            "status": app.get("status", "new"),
            "applied_at": app.get("applied_at")
        })
        
    return jsonify({
        "stats": {
            "activeJobs": active_jobs_count,
            "totalApplicants": total_applicants_count,
            "newApplications": new_applications_count,
            "responseRate": response_rate
        },
        "recentApplications": recent_apps
    }), 200
