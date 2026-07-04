from db.connection import get_db
from bson.objectid import ObjectId
from datetime import datetime, timezone

def get_applications_collection():
    """Returns the PyMongo collection for applications."""
    return get_db()["applications"]

def create_application(job_id, candidate_id):
    """Creates a new job application."""
    applications_col = get_applications_collection()
    
    # Check if already applied
    existing = applications_col.find_one({
        "job_id": ObjectId(job_id),
        "candidate_id": ObjectId(candidate_id)
    })
    
    if existing:
        raise ValueError("You have already applied for this job.")
        
    application = {
        "job_id": ObjectId(job_id),
        "candidate_id": ObjectId(candidate_id),
        "status": "new",
        "applied_at": datetime.now(timezone.utc)
    }
    
    result = applications_col.insert_one(application)
    application["_id"] = str(result.inserted_id)
    application["job_id"] = str(application["job_id"])
    application["candidate_id"] = str(application["candidate_id"])
    return application

def get_applications_by_job(job_id):
    """Retrieves all applications for a specific job."""
    apps = list(get_applications_collection().find({"job_id": ObjectId(job_id)}))
    for app in apps:
        app["_id"] = str(app["_id"])
        app["job_id"] = str(app["job_id"])
        app["candidate_id"] = str(app["candidate_id"])
    return apps

def get_applications_for_employer(employer_jobs_ids):
    """Retrieves all applications across a list of job IDs."""
    job_object_ids = [ObjectId(jid) for jid in employer_jobs_ids]
    apps = list(get_applications_collection().find({"job_id": {"$in": job_object_ids}}).sort("applied_at", -1))
    for app in apps:
        app["_id"] = str(app["_id"])
        app["job_id"] = str(app["job_id"])
        app["candidate_id"] = str(app["candidate_id"])
    return apps

def get_applications_by_candidate(candidate_id):
    """Retrieves all applications for a specific candidate."""
    apps = list(get_applications_collection().find({"candidate_id": ObjectId(candidate_id)}))
    for app in apps:
        app["_id"] = str(app["_id"])
        app["job_id"] = str(app["job_id"])
        app["candidate_id"] = str(app["candidate_id"])
    return apps
