from db.candidates import get_all_candidates
from db.jobs import get_all_jobs, get_job_by_id
from db.applications import create_application
from services.whatsapp_service import send_whatsapp_message
from services.openai_service import match_candidate_to_job
from db.connection import get_db

from bson.objectid import ObjectId

def _save_match_score(candidate_id, job_id, score, is_match, reason):
    try:
        db = get_db()
        db["job_matches"].update_one(
            {
                "candidate_id": ObjectId(candidate_id),
                "job_id": ObjectId(job_id)
            },
            {
                "$set": {
                    "score": score,
                    "is_match": is_match,
                    "reason": reason
                }
            },
            upsert=True
        )
    except Exception as e:
        print(f"Failed to save match score for {candidate_id} and {job_id}: {e}")

def match_and_alert_candidates(job):
    """
    Checks all candidates against the new job using OpenAI.
    Saves match scores and sends WhatsApp alerts for strong matches.
    """
    db = get_db()
    # Query candidate_profiles which contains the actual normalized_data
    candidates = list(db["candidate_profiles"].find())
    matched_candidates = []
    
    normalized_job = job.get("normalized_data", {})
    if not normalized_job:
        return []
        
    for candidate in candidates:
        normalized_candidate = candidate.get("normalized_data", {})
        if not normalized_candidate:
            continue
            
        is_match, score = match_candidate_to_job(normalized_candidate, normalized_job)
        _save_match_score(candidate.get("_id"), job.get("_id"), score, is_match, "Matched")
        
        if is_match and score >= 75:
            matched_candidates.append(candidate)
            alert_text = f"📢 **New Matching Job Alert!**\n\nWe found a job matching your skills with a {score}% match score:\n\n**Job Title**: {job.get('title')}\n\nLog in to apply now! Or, reply 'tips' for career coaching tips or 'questions' to practice for interviews!"
            
            # Send alert using the actual WhatsApp number if they registered via WA, else fallback to web profile number
            number_to_alert = candidate.get("whatsapp_number") or candidate.get("phone_number")
            if number_to_alert:
                send_whatsapp_message(number_to_alert, alert_text)
            
    return [c.get("whatsapp_number") or c.get("phone_number") for c in matched_candidates]

def match_candidate_against_all_jobs(user_id, normalized_candidate):
    """
    Checks all published jobs against a candidate's newly uploaded CV.
    Saves match scores to the database.
    """
    jobs = get_all_jobs()
    for job in jobs:
        if job.get("status") != "published":
            continue
            
        normalized_job = job.get("normalized_data", {})
        if not normalized_job:
            continue
            
        is_match, score = match_candidate_to_job(normalized_candidate, normalized_job)
        _save_match_score(user_id, job.get("_id"), score, is_match, "Matched")
