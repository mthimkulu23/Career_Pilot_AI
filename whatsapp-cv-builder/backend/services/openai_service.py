import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()


def generate_cv_summary(name, experience, skills):
    """Uses OpenAI GPT-4o-mini to generate a professional 2-3 sentence CV profile summary.
    Falls back to a template summary if the API key is missing or an error occurs.
    """
    api_key = os.getenv("OPENAI_API_KEY")
    skills_list = ", ".join(skills)

    if not api_key:
        return (
            f"{name} is a highly motivated professional with experience in {experience} "
            f"and skilled in {skills_list}. They are eager to contribute to a dynamic team "
            f"and continue growing in their career."
        )

    client = OpenAI(api_key=api_key)

    prompt = f"""Create a professional, concise, and compelling 2-3 sentence CV profile summary for a job seeker in South Africa.

Candidate Details:
- Name: {name}
- Work Experience: {experience}
- Key Skills: {skills_list}

Instructions:
- Write in third-person, professional tone
- Highlight their strengths and value to a potential employer
- Keep it under 80 words
- Make it suitable for the South African job market
- Do NOT include the candidate's name in the summary
"""

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert CV writing assistant specializing in the South African "
                        "job market. You write concise, impactful professional summaries."
                    ),
                },
                {"role": "user", "content": prompt},
            ],
            max_tokens=200,
            temperature=0.7,
        )
        return completion.choices[0].message.content.strip()

    except Exception as e:
        print(f"[OpenAI Error] {e}")
        return (
            f"A highly motivated professional with experience in {experience} "
            f"and expertise in {skills_list}. Committed to delivering quality results "
        )


def generate_summary(candidate: dict) -> str:
    """
    Generates a professional CV summary from the 5 WhatsApp bot answers.
    Called by conversation.py after the candidate completes all 5 questions.

    candidate keys: full_name, qualification, main_skill, years_experience, phone_number
    """
    name           = candidate.get("full_name", "Candidate")
    qualification  = candidate.get("qualification", "Not specified")
    main_skill     = candidate.get("main_skill", "Not specified")
    years          = candidate.get("years_experience", "Not specified")

    fallback = (
        f"{name} is a skilled {main_skill} professional with {years} year(s) of experience "
        f"and holds a {qualification} qualification. They are eager to secure a new opportunity "
        f"in the South African job market."
    )

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return fallback

    client = OpenAI(api_key=api_key)
    prompt = (
        f"Write a concise, professional 2-3 sentence CV summary for a South African job seeker.\n\n"
        f"Name: {name}\n"
        f"Highest qualification: {qualification}\n"
        f"Main skill: {main_skill}\n"
        f"Years of experience: {years}\n\n"
        f"Write in third person. Keep it under 80 words. Do NOT include the candidate's name."
    )
    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an expert CV writing assistant for the South African job market."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=200,
            temperature=0.7,
        )
        return completion.choices[0].message.content.strip()
    except Exception as e:
        print(f"[OpenAI generate_summary error] {e}")
        return fallback


import json

def get_openai_client():
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return None
    return OpenAI(api_key=api_key)

def extract_cv_info(cv_text):
    """
    Extracts explicitly normalized information from raw CV text using OpenAI.
    """
    client = get_openai_client()
    if not client:
        return {"normalized_skills": [], "experience_years": 0, "education_level": "None", "experience_summary": ""}

    prompt = f"""
    You are an expert ATS parser. 
    Extract the following explicitly normalized schema from the provided CV text.
    Return ONLY a valid JSON object with the following keys:
    - "normalized_skills": A list of extracted core skills (e.g. ["Python", "React", "Customer Support"]).
    - "experience_years": An integer representing total years of relevant work experience. Estimate if necessary.
    - "education_level": A string indicating the highest education level (e.g., "High School", "Bachelor", "Master", "PhD", "Diploma").
    - "experience_summary": A brief 1-2 sentence summary of their work experience.

    CV Text:
    ---
    {cv_text}
    ---
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.1
        )
        content = response.choices[0].message.content
        return json.loads(content)
    except Exception as e:
        print(f"Error parsing CV with OpenAI: {e}")
        return {"normalized_skills": [], "experience_years": 0, "education_level": "None", "experience_summary": ""}


def normalize_job_description(title, description, required_skills):
    """
    Extracts a normalized profile from a job posting to match the CV schema.
    """
    client = get_openai_client()
    if not client:
        return {"normalized_skills": required_skills, "experience_years": 0, "education_level": "None"}

    prompt = f"""
    You are an expert ATS normalizer.
    Convert this job posting into a normalized schema for direct AI matching against candidate profiles.
    Return ONLY a valid JSON object with the following keys:
    - "normalized_skills": A comprehensive list of required and preferred skills.
    - "experience_years": An integer representing the minimum years of experience required. Return 0 if entry-level.
    - "education_level": The minimum education level required (e.g., "High School", "Bachelor", "Master", "Diploma", "None").

    Job Title: {title}
    Job Description:
    {description}
    Listed Required Skills: {required_skills}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.1
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print(f"Error normalizing job with OpenAI: {e}")
        return {"normalized_skills": required_skills, "experience_years": 0, "education_level": "None"}


def match_candidate_to_job(normalized_candidate, normalized_job):
    """
    Explicitly compares the normalized candidate info to the normalized job info.
    Returns (is_match: bool, match_score: int).
    """
    client = get_openai_client()
    if not client:
        return False, 0

    candidate_json = json.dumps(normalized_candidate, indent=2)
    job_json = json.dumps(normalized_job, indent=2)

    prompt = f"""
    You are an objective AI matching engine. 
    Explicitly compare the Normalized Candidate Profile against the Normalized Job Profile.
    Calculate a Match Score (0 to 100) based strictly on overlapping skills, experience years, and education.
    Return ONLY a valid JSON object with:
    - "is_match": boolean (true if score >= 75)
    - "match_score": integer (0-100)
    - "reason": A brief reason for the score, citing specific overlapping or missing skills.

    Normalized Job Profile:
    {job_json}

    Normalized Candidate Profile:
    {candidate_json}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.1
        )
        content = response.choices[0].message.content
        result = json.loads(content)
        return result.get("is_match", False), result.get("match_score", 0)
    except Exception as e:
        print(f"Error matching candidate with OpenAI: {e}")
        return False, 0


def generate_coach_response(user_message, candidate_profile):
    """
    Acts as an AI career and interview coach, generating a response based on the candidate's profile.
    """
    client = get_openai_client()
    if not client:
        return "I'm sorry, my AI systems are currently unavailable. Please check your OpenAI configuration."

    profile_json = json.dumps(candidate_profile, default=str, indent=2)

    prompt = f"""
    You are an expert, highly encouraging AI Career and Interview Coach.
    Your goal is to help this candidate prepare for interviews, negotiate salary, and improve their career prospects.
    Keep your answers concise, practical, and highly actionable (1-3 paragraphs max).
    Use bullet points if appropriate.

    Candidate Profile:
    {profile_json}

    Candidate Question/Message:
    {user_message}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error generating coach response with OpenAI: {e}")
        return "I'm having trouble connecting to my knowledge base right now. Please try again later."


