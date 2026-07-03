from db.candidates import get_all_candidates
from services.whatsapp_service import send_whatsapp_message

def match_and_alert_candidates(job):
    """Checks all candidate skills using case-insensitive substring matching against the required skills of the job.
    Sends WhatsApp alerts to matched candidates and returns a list of their phone numbers.
    """
    required_skills = [skill.lower().strip() for skill in job.get("required_skills", [])]
    if not required_skills:
        return []

    candidates = get_all_candidates()
    matched_candidates = []
    
    for candidate in candidates:
        candidate_skills = [s.lower().strip() for s in candidate.get("skills", [])]
        matched = False
        
        # Substring search for matching skills
        for req_skill in required_skills:
            for cand_skill in candidate_skills:
                if req_skill in cand_skill or cand_skill in req_skill:
                    matched = True
                    break
            if matched:
                break
                
        if matched:
            matched_candidates.append(candidate)
            alert_text = f"📢 **New Matching Job Alert!**\n\nWe found a job matching your skills:\n\n**Job Title**: {job.get('title')}\n**Description**: {job.get('description')}\n**Required Skills**: {', '.join(job.get('required_skills'))}"
            send_whatsapp_message(candidate.get("phone_number"), alert_text)
            
    return [c["phone_number"] for c in matched_candidates]
