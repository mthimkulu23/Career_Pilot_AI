from db.connection import get_db
from bson.objectid import ObjectId

def get_jobs_collection():
    """Returns the PyMongo collection for jobs."""
    return get_db()["jobs"]

def get_all_jobs():
    """Retrieves all jobs and serializes MongoDB ObjectId to string."""
    jobs = list(get_jobs_collection().find())
    for job in jobs:
        job["_id"] = str(job["_id"])
    return jobs

def get_job_by_id(job_id):
    """Retrieves a job by its MongoDB ObjectId and serializes _id to string."""
    job = get_jobs_collection().find_one({"_id": ObjectId(job_id)})
    if job:
        job["_id"] = str(job["_id"])
    return job

def create_job(title, description, required_skills):
    """Creates a draft job post."""
    job = {
        "title": title,
        "description": description,
        "required_skills": [skill.strip() for skill in required_skills if skill.strip()],
        "status": "draft"
    }
    result = get_jobs_collection().insert_one(job)
    job["_id"] = str(result.inserted_id)
    return job

def update_job_status(job_id, status):
    """Updates the status of a job post (e.g. to 'published')."""
    get_jobs_collection().update_one(
        {"_id": ObjectId(job_id)},
        {"$set": {"status": status}}
    )
