"""
MongoDB document schema for the 'employer_actions' collection.

This collection tracks all employer interactions with candidate profiles:
shortlisting, interview invitations, direct messages, status updates, and job offers.

Document structure:
  {
    _id: ObjectId,
    employer_id: str,         # ObjectId string of the employer user
    employer_email: str,
    candidate_id: str,         # ObjectId string of the candidate
    action: str,               # "SAVED" | "SHORTLISTED" | "INTERVIEWED" |
                               # "OFFERED" | "REJECTED" | "ARCHIVED" | "HIRED"
    job_id: Optional[str],     # The vacancy this action is linked to
    message: Optional[str],    # Content of direct message / invitation note
    created_at: datetime
  }
"""
import datetime
from typing import Optional

VALID_ACTIONS = {
    "SAVED",
    "SHORTLISTED",
    "INTERVIEWED",
    "OFFERED",
    "REJECTED",
    "ARCHIVED",
    "HIRED",
}


def new_employer_action(
    employer_id: str,
    employer_email: str,
    candidate_id: str,
    action: str,
    job_id: Optional[str] = None,
    message: Optional[str] = None,
) -> dict:
    """Build a new employer action document."""
    action = action.upper()
    if action not in VALID_ACTIONS:
        raise ValueError(f"Invalid action '{action}'. Must be one of {sorted(VALID_ACTIONS)}")

    return {
        "employer_id": employer_id,
        "employer_email": employer_email,
        "candidate_id": candidate_id,
        "action": action,
        "job_id": job_id,
        "message": message,
        "created_at": datetime.datetime.now(datetime.timezone.utc),
    }
