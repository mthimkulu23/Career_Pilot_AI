import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db.connection import ping, jobs_col
from db.jobs import MOCK_JOBS, new_job
from routes import candidates, jobs, webhook, auth, ai, employer
import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def _seed_jobs_if_empty():
    """Insert MOCK_JOBS into Atlas if the jobs collection is empty."""
    col = jobs_col()
    if col.count_documents({}) == 0:
        logger.info("Jobs collection empty — seeding %d mock jobs...", len(MOCK_JOBS))
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
        logger.info("Seeded %d jobs into MongoDB Atlas.", len(docs))
    else:
        count = col.count_documents({})
        logger.info("Jobs collection already has %d documents — skipping seed.", count)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 1. Verify Atlas connectivity
    try:
        ping()
    except Exception as e:
        logger.error("MongoDB Atlas connection FAILED: %s", e)
        raise

    # 2. Seed jobs if needed
    _seed_jobs_if_empty()

    yield
    # Shutdown (connection pool closes automatically)


app = FastAPI(
    title="CareerPilot AI — Universal ML Engine",
    description=(
        "Universal ML backend pipeline — CV upload, skill classification, "
        "job matching, career coaching, and income opportunities. "
        "Database: MongoDB Atlas."
    ),
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(candidates.router)
app.include_router(jobs.router)
app.include_router(ai.router)
app.include_router(employer.router)


@app.get("/api/status", tags=["Health"])
def get_status():
    return {
        "status": "HEALTHY",
        "service": "CareerPilot AI Universal ML Engine",
        "version": "2.0.0",
        "database": "MongoDB Atlas",
        "pipeline_stages": [
            "1. CV Upload (PDF / Text)",
            "2. AI Document Understanding",
            "3. Skill Extraction (Universal Skill Database)",
            "4. Skill Classification  →  Tech / Trade / Service / Manual",
            "5. Job Matching Engine   (Multi-industry, weighted scoring)",
            "6. Career Path Predictor (All sectors)",
            "7. Income Opportunity Engine",
            "8. Learning Recommendation System",
            "9. AI Career Coach (Chat Assistant)",
        ],
    }


if __name__ == "__main__":
    import uvicorn
    from config import HOST, PORT
    uvicorn.run("app:app", host=HOST, port=PORT, reload=True)
