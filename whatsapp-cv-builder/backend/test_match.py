import sys
import os
basedir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, basedir)

from db.jobs import create_job
from services.openai_service import normalize_job_description
from services.matching import match_and_alert_candidates
from bson.objectid import ObjectId

employer_id = str(ObjectId())

title = "Senior Doctor"
description = "Looking for an experienced medical Doctor with at least 5 years of experience to join our busy hospital ward. You must be a qualified Doctor."
required_skills = ["Doctor"]

print("1. Normalizing dummy job...")
normalized_job = normalize_job_description(title, description, required_skills)
print(f"Normalized data: {normalized_job}")

print("2. Creating job in DB...")
new_job = create_job(employer_id, title, description, required_skills, "City Hospital", "Johannesburg", "Full-time", "R80,000", normalized_job)

print("3. Running matching engine and sending alerts...")
alerts_sent = match_and_alert_candidates(new_job)

print(f"Done! Alerts sent to: {alerts_sent}")
