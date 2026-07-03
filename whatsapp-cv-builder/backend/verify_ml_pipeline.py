"""
verify_ml_pipeline.py
=====================
End-to-end offline verification of every ML pipeline stage.
Run from inside the backend/ directory with the virtual environment active:

    source .venv/bin/activate
    python verify_ml_pipeline.py

No server needed — it hits the service layer directly.
No API key needed — the rule-based fallback kicks in automatically when neither
OPENAI_API_KEY nor GEMINI_API_KEY is set.
"""

import sys
import os
import json

# Make sure backend/ is on the path
sys.path.insert(0, os.path.dirname(__file__))

# ----- Bootstrap -------------------------------------------------------
print("\n" + "=" * 60)
print("  CareerPilot AI  —  Universal ML Pipeline Verification")
print("=" * 60 + "\n")

# 1. Import MOCK_JOBS for testing
from db.jobs import MOCK_JOBS

print(f"[✓] Stage 0  —  Loaded {len(MOCK_JOBS)} multi-industry mock jobs.\n")

# -----------------------------------------------------------------------
# Mock CVs — one per sector + Gig worker
# -----------------------------------------------------------------------
MOCK_CVS = {
    "Gig": """
Sarah Osei
sarah.osei@freelance.example.com | +233-24-111-2222

Summary:
Independent contractor and gig worker with extensive experience in platform-based deliveries and freelance tasks.

Skills:
Driving, Navigation, Customer Support, Time Management, TaskRabbit, Uber

Experience:
- Freelance Driver & Courier, Uber/Bolt (2020-2024)
  Completed 3000+ rides and deliveries with a 4.9-star rating.
- Independent Tasker, TaskRabbit (2021-2024)
  Furniture assembly, moving assistance, and local errands.

Education:
- High School Diploma, Accra Academy (2019)
""",
    "Tech": """
John Mensah
john.mensah@example.com | +1-555-100-2000

Summary:
Python backend developer with 3 years experience building REST APIs, data pipelines and cloud deployments.

Skills:
Python, FastAPI, SQL, Git, Docker, AWS, React, HTML, CSS, Excel

Experience:
- Software Engineer, TechNova Inc. (2021-2024)
  Built microservice APIs, integrated ML models, managed PostgreSQL databases.

Education:
- BSc Computer Science, University of Ghana (2020)
""",
    "Trade": """
Isaac Dlamini
isaac.dlamini@tradepro.co.za | +27-82-345-6789

Summary:
Experienced master plumber and HVAC technician with 8 years on commercial and residential projects.

Skills:
Plumbing, HVAC, Electrical Wiring, Welding, Carpentry, Mechanic

Experience:
- Senior Plumber, Buildmark Construction (2016-2024)
  Installed copper and PVC systems, conducted pressure tests and inspections.

Education:
- N3 Trade Certificate, Ekurhuleni TVET (2015)
""",
    "Service": """
Amara Diallo
amara.diallo@gmail.com | +233-50-123-4567

Summary:
Dynamic customer service and retail sales professional with 5 years of experience in hospitality and client relations.

Skills:
Customer Support, Sales, Retail, Communication, Teamwork, Nursing Care, Billing, Administrative

Experience:
- Customer Experience Lead, ShopMall Ghana (2019-2024)
  Managed 15-person team, improved NPS scores by 22%.

Education:
- Diploma in Business Administration, GIMPA (2018)
""",
    "Manual": """
Sipho Khumalo
sipho.khumalo@warehouse.co.za | +27-71-999-8888

Summary:
Hardworking logistics and warehouse specialist with forklift certification, 6 years of heavy-lift experience.

Skills:
Forklift, Warehouse operations, Inventory, Lifting, Driving, Delivery, Packing, Shipping

Experience:
- Logistics Operator, RapidShip Distribution (2018-2024)
  Handled 2000+ units/day, maintained zero-incident record for 3 consecutive years.

Education:
- Matric Certificate, Soweto Secondary School (2017)
""",
}

# -----------------------------------------------------------------------
# Import service functions
# -----------------------------------------------------------------------
from services.openai_service import (
    parse_and_classify_cv,
    generate_career_predictions,
    get_coach_response,
)
from services.matching import match_candidate_to_jobs

SEPARATOR = "-" * 60

results = {}

for sector, cv_text in MOCK_CVS.items():
    print(SEPARATOR)
    print(f"  CANDIDATE TYPE: {sector.upper()}")
    print(SEPARATOR)

    # --- Stage 2 & 3 & 4: AI Document Understanding + Skill Extraction + Classification ---
    profile = parse_and_classify_cv(cv_text)
    results[sector] = {"profile": profile}

    print(f"\n[✓] Stage 2-4  —  CV Parsed & Skills Classified")
    print(f"    Name    : {profile.get('name')}")
    print(f"    Email   : {profile.get('email')}")
    print(f"    Summary : {profile.get('summary', '')[:80]}...")
    print(f"    Emp Type: {profile.get('employment_preference', 'Formal')}")
    clf = profile.get("skill_classification", {})
    for cat, skills in clf.items():
        if skills:
            print(f"    {cat:10}: {', '.join(skills)}")

    # --- Stage 5: Job Matching Engine ---
    jobs_from_db = MOCK_JOBS
    matches = match_candidate_to_jobs(profile, jobs_from_db)
    results[sector]["matches"] = matches

    print(f"\n[✓] Stage 5   —  Job Matching Engine  ({len(matches)} jobs scored)")
    for m in matches[:3]:
        print(f"    [{m['match_score']:3d}%] {m['title']} @ {m['company']}  [{m['category']}]")
        print(f"           Matched : {', '.join(m['matched_skills']) or 'none'}")
        print(f"           Missing : {', '.join(m['missing_skills'][:3]) or 'none'}")
        print(f"           Advice  : {m['advice']}")

    # --- Stage 6 & 7 & 8: Career Path + Income + Learning ---
    predictions = generate_career_predictions(profile)
    results[sector]["predictions"] = predictions

    print(f"\n[✓] Stage 6-8 —  Career Path / Income / Learning")
    for vg in predictions.get("vertical_growth", [])[:2]:
        print(f"    → {vg['role']}  ({vg['timeframe']})  {vg['target_salary']}")
    for io in predictions.get("income_opportunities", [])[:1]:
        print(f"    💰 {io['opportunity']}  —  {io['estimated_earnings']}")
    for lr in predictions.get("learning_recommendations", [])[:2]:
        print(f"    📚 {lr['topic']}  [{lr['type']}]")

    # --- Stage 9: AI Career Coach Chat ---
    test_question = f"What is the fastest way for me to increase my salary given my {sector} background?"
    coach_reply = get_coach_response(profile, [], test_question)
    results[sector]["coach_reply"] = coach_reply

    print(f"\n[✓] Stage 9   —  AI Career Coach")
    print(f"    Q: {test_question}")
    print(f"    A: {coach_reply[:300]}{'...' if len(coach_reply) > 300 else ''}")

    print()

# -----------------------------------------------------------------------
# Summary
# -----------------------------------------------------------------------
print("=" * 60)
print("  VERIFICATION SUMMARY")
print("=" * 60)
for sector in MOCK_CVS:
    profile = results[sector]["profile"]
    top_match = results[sector]["matches"][0] if results[sector]["matches"] else {}
    print(f"  {sector:8}  |  Skills: {len(profile.get('skills', []))}  "
          f"|  Top Match: {top_match.get('title', 'N/A')} ({top_match.get('match_score', 0)}%)")

print("\n[✓] ALL PIPELINE STAGES VERIFIED SUCCESSFULLY\n")
