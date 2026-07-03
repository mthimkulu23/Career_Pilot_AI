from fastapi import APIRouter, HTTPException
from db.connection import jobs_col
from db.jobs import new_job, MOCK_JOBS
from pydantic import BaseModel
from typing import List, Optional
from bson import ObjectId
import datetime

router = APIRouter(prefix="/api/jobs", tags=["Jobs"])

VALID_CATEGORIES = {"Tech", "Trade", "Service", "Manual"}
VALID_EMPLOYMENT_TYPES = {"Formal", "Informal", "Gig"}

# ── Pydantic schemas ──────────────────────────────────────────────────────────

class JobCreate(BaseModel):
    title: str
    company: str
    description: Optional[str] = None
    skills: List[str]
    category: str
    employment_type: str
    salary_range: Optional[str] = None
    location: Optional[str] = None

# ── Helpers ───────────────────────────────────────────────────────────────────

def _fmt(doc: dict) -> dict:
    if doc and "_id" in doc:
        doc["id"] = str(doc.pop("_id"))
    return doc

# ── Endpoints ─────────────────────────────────────────────────────────────────

@router.get("/")
def get_jobs():
    """Return all jobs stored in MongoDB Atlas."""
    return [_fmt(j) for j in jobs_col().find()]


@router.post("/")
def create_job(job_in: JobCreate):
    """Create a new job posting in MongoDB Atlas."""
    if job_in.category not in VALID_CATEGORIES:
        raise HTTPException(status_code=400, detail=f"Category must be one of {sorted(VALID_CATEGORIES)}")
    if job_in.employment_type not in VALID_EMPLOYMENT_TYPES:
        raise HTTPException(status_code=400, detail=f"Employment type must be one of {sorted(VALID_EMPLOYMENT_TYPES)}")

    doc = new_job(
        title=job_in.title,
        company=job_in.company,
        description=job_in.description,
        skills=job_in.skills,
        category=job_in.category,
        employment_type=job_in.employment_type,
        salary_range=job_in.salary_range,
        location=job_in.location,
    )
    result = jobs_col().insert_one(doc)
    doc["id"] = str(result.inserted_id)
    doc.pop("_id", None)
    return doc


@router.post("/seed")
def seed_jobs():
    """
    Delete all jobs and re-insert the 8 built-in mock jobs (Tech/Trade/Service/Manual).
    Useful for resetting Atlas to a clean demo state.
    """
    col = jobs_col()
    col.delete_many({})
    docs = [
        new_job(
            title=mj["title"],
            company=mj["company"],
            description=mj["description"],
            skills=mj["skills"],
            category=mj["category"],
            employment_type=mj["employment_type"],
            salary_range=mj["salary_range"],
            location=mj["location"],
        )
        for mj in MOCK_JOBS
    ]
    col.insert_many(docs)
    return {"message": f"Seeded {len(docs)} mock jobs across 4 categories."}
