"""Employer API routes.
Provides dashboard metrics, candidate search, and employer actions (save, shortlist, interview, offer, reject, archive).
All endpoints require the user to have role `EMPLOYER` or `ADMIN` (checked via `dependencies.get_current_user`).
"""

from typing import List, Optional, Dict, Any

from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, Field

from db.connection import (
    jobs_col,
    candidates_col,
    employer_actions_col,
)
from db.employer_actions import new_employer_action
from dependencies import get_current_user

router = APIRouter(prefix="/api/employer", tags=["Employer"])

# -----------------------
# Helper utilities
# -----------------------

def _assert_employer(user: dict) -> None:
    """Raise 403 if the calling user is not an employer or admin."""
    if user.get("role") not in ["EMPLOYER", "ADMIN"]:
        raise HTTPException(status_code=403, detail="Employer access required")

# -----------------------
# Schemas
# -----------------------
class ActionPayload(BaseModel):
    candidate_id: str = Field(..., description="ObjectId string of the candidate")
    action: str = Field(
        ...,
        description="One of: SAVED, SHORTLISTED, INTERVIEWED, OFFERED, REJECTED, ARCHIVED, HIRED",
    )
    job_id: Optional[str] = Field(None, description="Optional job ObjectId string the action is linked to")
    message: Optional[str] = Field(None, description="Optional note or message for the action")

class CandidateFilterParams(BaseModel):
    skills: Optional[List[str]] = None
    industry: Optional[str] = None
    experience_min: Optional[int] = None
    experience_max: Optional[int] = None
    location: Optional[str] = None
    availability: Optional[str] = None
    expected_salary_min: Optional[int] = None
    expected_salary_max: Optional[int] = None
    employment_type: Optional[str] = None
    certifications: Optional[List[str]] = None

# -----------------------
# Dashboard endpoint
# -----------------------
@router.get("/dashboard")
def get_dashboard(current_user: dict = Depends(get_current_user)):
    _assert_employer(current_user)

    # Active job posts
    active_jobs = jobs_col().count_documents({"status": {"$ne": "FILLED"}})

    # Number of applicants (unique candidate ids that have any action)
    applicants = employer_actions_col().distinct("candidate_id")
    applicants_count = len(applicants)

    # AI recommended candidates – just a placeholder of top 5 matches across all jobs
    # For now we simply return the most recent 5 candidates
    recent_candidates = list(candidates_col().find().sort("created_at", -1).limit(5))
    recommended = [
        {
            "id": str(c["_id"]),
            "name": c.get("name"),
            "match_score": 0,  # real score computed by matching service in future
        }
        for c in recent_candidates
    ]

    # Interviews scheduled – actions with type INTERVIEWED
    interviews = employer_actions_col().count_documents({"action": "INTERVIEWED"})

    # Hiring analytics – simple aggregates
    hires = employer_actions_col().count_documents({"action": "HIRED"})
    offers = employer_actions_col().count_documents({"action": "OFFERED"})
    avg_time_to_hire = None  # placeholder – requires timestamps and job posting dates

    return {
        "active_job_posts": active_jobs,
        "applicants": applicants_count,
        "ai_recommended_candidates": recommended,
        "interviews_scheduled": interviews,
        "hiring_analytics": {
            "offers": offers,
            "hires": hires,
            "average_time_to_hire_days": avg_time_to_hire,
        },
    }

# -----------------------
# Candidate search endpoint
# -----------------------
@router.get("/candidates")
def search_candidates(
    skills: Optional[List[str]] = Query(None),
    industry: Optional[str] = Query(None),
    experience_min: Optional[int] = Query(None),
    experience_max: Optional[int] = Query(None),
    location: Optional[str] = Query(None),
    availability: Optional[str] = Query(None),
    expected_salary_min: Optional[int] = Query(None),
    expected_salary_max: Optional[int] = Query(None),
    employment_type: Optional[str] = Query(None),
    certifications: Optional[List[str]] = Query(None),
    current_user: dict = Depends(get_current_user),
):
    _assert_employer(current_user)

    query: Dict[str, Any] = {}
    if skills:
        query["skills"] = {"$all": skills}
    if industry:
        query["industry"] = industry
    if experience_min is not None or experience_max is not None:
        query["experience_years"] = {}
        if experience_min is not None:
            query["experience_years"]["$gte"] = experience_min
        if experience_max is not None:
            query["experience_years"]["$lte"] = experience_max
    if location:
        query["location"] = location
    if availability:
        query["availability"] = availability
    if expected_salary_min is not None or expected_salary_max is not None:
        query["expected_salary"] = {}
        if expected_salary_min is not None:
            query["expected_salary"]["$gte"] = expected_salary_min
        if expected_salary_max is not None:
            query["expected_salary"]["$lte"] = expected_salary_max
    if employment_type:
        query["employment_type"] = employment_type
    if certifications:
        query["certifications"] = {"$all": certifications}

    cursor = candidates_col().find(query).limit(50)
    results = []
    for doc in cursor:
        doc["id"] = str(doc.pop("_id"))
        results.append(doc)
    return {"total": len(results), "candidates": results}

# -----------------------
# Candidate profile view (employer facing)
# -----------------------
@router.get("/candidates/{candidate_id}")
def get_candidate_profile(candidate_id: str, current_user: dict = Depends(get_current_user)):
    _assert_employer(current_user)
    from bson import ObjectId

    doc = candidates_col().find_one({"_id": ObjectId(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found")
    # Restrict fields to those allowed for employer view
    allowed_fields = {
        "name",
        "professional_summary",
        "skills",
        "work_history",
        "education",
        "certifications",
        "portfolio_url",
        "match_percentage",
        "career_interests",
        "availability",
    }
    profile = {k: v for k, v in doc.items() if k in allowed_fields}
    profile["id"] = str(doc["_id"])
    return profile

# -----------------------
# Record employer actions (save, shortlist, interview, etc.)
# -----------------------
@router.post("/actions")
def record_action(payload: ActionPayload, current_user: dict = Depends(get_current_user)):
    _assert_employer(current_user)
    # Validate action value
    action = payload.action.upper()
    if action not in {
        "SAVED",
        "SHORTLISTED",
        "INTERVIEWED",
        "OFFERED",
        "REJECTED",
        "ARCHIVED",
        "HIRED",
    }:
        raise HTTPException(status_code=400, detail="Invalid action type")

    doc = new_employer_action(
        employer_id=current_user.get("id"),
        employer_email=current_user.get("email"),
        candidate_id=payload.candidate_id,
        action=action,
        job_id=payload.job_id,
        message=payload.message,
    )
    result = employer_actions_col().insert_one(doc)
    return {"inserted_id": str(result.inserted_id), "action": action}

# -----------------------
# Hiring analytics (extended)
# -----------------------
@router.get("/analytics")
def get_hiring_analytics(current_user: dict = Depends(get_current_user)):
    _assert_employer(current_user)
    total_vacancies = jobs_col().count_documents({})
    filled_vacancies = jobs_col().count_documents({"status": "FILLED"})
    offer_count = employer_actions_col().count_documents({"action": "OFFERED"})
    hire_count = employer_actions_col().count_documents({"action": "HIRED"})
    interview_count = employer_actions_col().count_documents({"action": "INTERVIEWED"})

    return {
        "total_vacancies": total_vacancies,
        "filled_vacancies": filled_vacancies,
        "offers_made": offer_count,
        "hires": hire_count,
        "interviews": interview_count,
    }
