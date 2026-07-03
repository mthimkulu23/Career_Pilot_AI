import json

def match_candidate_to_jobs(candidate_profile: dict, jobs: list) -> list:
    """
    Step 5: Job Matching Engine (Multi-industry).
    Compares candidate's skills and categories against a list of jobs.
    Returns matched jobs sorted by score desc.
    """
    candidate_skills = [s.lower() for s in candidate_profile.get("skills", [])]
    candidate_class = candidate_profile.get("skill_classification", {})
    candidate_pref = candidate_profile.get("employment_preference", "Formal")
    
    matches = []
    
    for job in jobs:
        # Resolve job fields — works for both SQLAlchemy ORM objects and plain dicts
        if isinstance(job, dict):
            job_id       = job.get("id")
            job_title    = job.get("title", "")
            job_company  = job.get("company", "")
            job_desc     = job.get("description", "") or ""
            job_category = job.get("category", "Service")
            job_emp_type = job.get("employment_type", "Formal")
            job_salary   = job.get("salary_range", "N/A")
            job_loc      = job.get("location", "N/A")
            job_skills_raw = job.get("skills", "[]")
        else:
            job_id       = job.id
            job_title    = job.title    or ""
            job_company  = job.company  or ""
            job_desc     = job.description or ""
            job_category = job.category or "Service"
            job_emp_type = getattr(job, "employment_type", "Formal")
            job_salary   = job.salary_range or "N/A"
            job_loc      = job.location or "N/A"
            job_skills_raw = job.skills or "[]"

        if isinstance(job_skills_raw, str):
            try:
                job_skills = json.loads(job_skills_raw)
            except:
                job_skills = [s.strip() for s in job_skills_raw.split(",") if s.strip()]
        else:
            job_skills = job_skills_raw or []
            
        job_skills_lower = [s.lower() for s in job_skills]
        
        # Calculate Skill Match (50% weight)
        matched_skills = []
        missing_skills = []
        for js in job_skills:
            if js.lower() in candidate_skills:
                matched_skills.append(js)
            else:
                missing_skills.append(js)
                
        skill_score = 0.0
        if job_skills_lower:
            skill_score = len(matched_skills) / len(job_skills_lower)
        else:
            skill_score = 1.0  # If job requires no specific skills
            
        # Calculate Category Alignment (20% weight)
        # Check if candidate has skills in the job's specific category
        category_skills = candidate_class.get(job_category, [])
        category_score = 0.0
        if category_skills:
            category_score = 1.0
        elif any(s.lower() in job_title.lower() for s in candidate_skills):
            category_score = 0.5
            
        # Description check / Keyword match (15% weight)
        desc_matches = 0
        desc_score = 0.0
        if job_desc and candidate_skills:
            desc_lower = job_desc.lower()
            for cs in candidate_skills:
                if cs in desc_lower:
                    desc_matches += 1
            desc_score = min(1.0, desc_matches / 3.0)  # Max out at 3 matching keywords
            
        # Employment Type Alignment (15% weight)
        emp_type_score = 1.0 if candidate_pref.lower() == job_emp_type.lower() else 0.0

        # Final weighted score
        final_score = int((skill_score * 0.5 + category_score * 0.2 + desc_score * 0.15 + emp_type_score * 0.15) * 100)
        
        # Generate advice
        advice = ""
        if final_score >= 85:
            advice = "Excellent match! You satisfy most core requirements. We recommend applying immediately."
        elif final_score >= 60:
            if missing_skills:
                advice = f"Good match. Gaining familiarity with {', '.join(missing_skills[:2])} would make you a top candidate."
            else:
                advice = "Good match. Emphasize your related experience in your application."
        else:
            if missing_skills:
                advice = f"Strong skill gap. Consider acquiring {', '.join(missing_skills[:2])} before applying."
            else:
                advice = f"Category mismatch. This role focuses on {job_category} skills. Consider tailoring your resume."

        if candidate_pref.lower() != job_emp_type.lower():
            advice += f" Note: You prefer {candidate_pref} work, but this is a {job_emp_type} role."

        matches.append({
            "job_id": job_id,
            "title": job_title,
            "company": job_company,
            "category": job_category,
            "employment_type": job_emp_type,
            "salary_range": job_salary,
            "location": job_loc,
            "match_score": final_score,
            "matched_skills": matched_skills,
            "missing_skills": missing_skills,
            "advice": advice
        })
        
    # Sort matches by match score descending
    matches.sort(key=lambda x: x["match_score"], reverse=True)
    return matches
