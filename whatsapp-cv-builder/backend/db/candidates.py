# ---------------------------------------------------------------
# db/candidates.py
# WHY THIS FILE EXISTS:
#   All MongoDB reads/writes for the WhatsApp candidate collection.
#   The 5-question flow (conversation.py) uses this to track which
#   question a candidate is on and save their answers.
#   After Q5, the full normalized profile is written to candidate_profiles
#   so the AI matching engine can use it.
#
# COLLECTIONS:
#   "wa_candidates"       – WhatsApp bot session (step + answers)
#   "candidate_profiles"  – Normalized data for AI matching
#   "users"               – Web portal users (linked by phone or user_id)
# ---------------------------------------------------------------

from datetime import datetime, timezone
from db.connection import get_db


# ── WhatsApp bot session helpers ─────────────────────────────────────────────

def get_candidate(whatsapp_number: str):
    """Return the WhatsApp candidate record, or None if not found."""
    return get_db()["wa_candidates"].find_one({"whatsapp_number": whatsapp_number})


def create_candidate(whatsapp_number: str):
    """Create a fresh session record for a new WhatsApp contact."""
    doc = {
        "whatsapp_number": whatsapp_number,
        "step": 1,          # which question to ask next (1-5)
        "full_name": "",
        "phone_number": "",
        "qualification": "",
        "main_skill": "",
        "years_experience": "",
        "summary": "",
        "created_at": datetime.now(timezone.utc),
    }
    get_db()["wa_candidates"].insert_one(doc)
    return doc


def save_answer(whatsapp_number: str, field: str, value: str, next_step: int):
    """Save one answer and advance the step counter."""
    get_db()["wa_candidates"].update_one(
        {"whatsapp_number": whatsapp_number},
        {"$set": {field: value, "step": next_step}},
    )


def save_summary(whatsapp_number: str, summary: str):
    """Save the generated summary and mark the session as complete (step 6)."""
    get_db()["wa_candidates"].update_one(
        {"whatsapp_number": whatsapp_number},
        {"$set": {"summary": summary, "step": 6, "completed_at": datetime.now(timezone.utc)}},
    )
    # Write the normalized profile so the AI matching engine can use it
    candidate = get_candidate(whatsapp_number)
    if candidate:
        _upsert_normalized_profile(whatsapp_number, candidate, summary)


def _upsert_normalized_profile(whatsapp_number: str, candidate: dict, summary: str):
    """
    Write (or update) the normalized profile document used by the AI
    matching engine. The schema matches what extract_cv_info() produces
    so both web-portal and WhatsApp paths feed into the same matcher.
    """
    years_raw = candidate.get("years_experience", "0")
    try:
        experience_years = int("".join(filter(str.isdigit, str(years_raw)))) if years_raw else 0
    except Exception:
        experience_years = 0

    normalized = {
        "normalized_skills":   [candidate.get("main_skill", "")],
        "experience_years":    experience_years,
        "education_level":     candidate.get("qualification", ""),
        "experience_summary":  summary,
    }

    get_db()["candidate_profiles"].update_one(
        {"whatsapp_number": whatsapp_number},
        {"$set": {
            "whatsapp_number":  whatsapp_number,
            "full_name":        candidate.get("full_name", ""),
            "phone_number":     candidate.get("phone_number", whatsapp_number),
            "qualification":    candidate.get("qualification", ""),
            "main_skill":       candidate.get("main_skill", ""),
            "years_experience": candidate.get("years_experience", ""),
            "summary":          summary,
            "normalized_data":  normalized,
            "source":           "whatsapp",
            "updated_at":       datetime.now(timezone.utc),
        }},
        upsert=True,
    )


# ── Legacy helpers kept for matching.py / routes ─────────────────────────────

def get_candidate_by_phone(phone_number: str):
    """Legacy lookup used by matching.py – searches wa_candidates."""
    return get_db()["wa_candidates"].find_one({"phone_number": phone_number})


def get_all_candidates():
    """Return all WhatsApp candidates (for bulk job-matching alerts)."""
    return list(get_db()["wa_candidates"].find())


def update_candidate(phone_number: str, update_data: dict):
    """Legacy update used by older parts of the codebase."""
    get_db()["wa_candidates"].update_one(
        {"phone_number": phone_number},
        {"$set": update_data},
    )
