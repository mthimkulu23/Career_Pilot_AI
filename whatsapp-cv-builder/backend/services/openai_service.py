import json
import logging
import os
import re
from typing import Any
import httpx
from config import OPENAI_API_KEY, GEMINI_API_KEY

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def call_llm(system_prompt: str, user_prompt: str, json_mode: bool = False) -> str:
    """
    Unified LLM caller. Tries OpenAI first (if key exists), then Gemini (if key exists), 
    and raises an Exception if neither are available or both fail.
    """
    # 1. Try OpenAI if configured
    if OPENAI_API_KEY:
        try:
            logger.info("Calling OpenAI API...")
            headers = {
                "Authorization": f"Bearer {OPENAI_API_KEY}",
                "Content-Type": "application/json"
            }
            payload: dict[str, Any] = {
                "model": "gpt-4o-mini",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                "temperature": 0.3
            }
            if json_mode:
                payload["response_format"] = {"type": "json_object"}
            
            with httpx.Client(timeout=30.0) as client:
                response = client.post(
                    "https://api.openai.com/v1/chat/completions",
                    headers=headers,
                    json=payload
                )
                response.raise_for_status()
                res_data = response.json()
                return res_data["choices"][0]["message"]["content"]
        except Exception as e:
            logger.error(f"OpenAI call failed: {e}")
            if not GEMINI_API_KEY:
                raise e

    # 2. Try Gemini if configured
    if GEMINI_API_KEY:
        try:
            logger.info("Calling Gemini API...")
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
            headers = {"Content-Type": "application/json"}
            
            # Combine prompts for Gemini
            combined_prompt = f"{system_prompt}\n\nUser Input:\n{user_prompt}"
            
            payload: dict[str, Any] = {
                "contents": [{
                    "parts": [{"text": combined_prompt}]
                }],
                "generationConfig": {
                    "temperature": 0.2,
                }
            }
            if json_mode:
                payload["generationConfig"]["responseMimeType"] = "application/json"
                
            with httpx.Client(timeout=30.0) as client:
                response = client.post(url, headers=headers, json=payload)
                response.raise_for_status()
                res_data = response.json()
                
                # Gemini response structure
                content = res_data["candidates"][0]["content"]["parts"][0]["text"]
                return content
        except Exception as e:
            logger.error(f"Gemini call failed: {e}")
            raise e

    raise ValueError("No LLM API keys configured. Set OPENAI_API_KEY or GEMINI_API_KEY in environment.")


def parse_and_classify_cv(cv_text: str) -> dict:
    """
    Step 2 & 3 & 4: AI Document Understanding, Skill Extraction, and Skill Classification.
    Parses resume text (supporting any language) and translates the profile elements (summary, skills, roles) 
    to English for standardized ML matching, while extracting standard entities.
    """
    system_prompt = (
        "You are an expert HR AI system. Analyze the following CV/resume text.\n"
        "The CV may be in any language (e.g., Spanish, French, Zulu, Xhosa, etc.). Detect the input language.\n"
        "Extract the candidate's name, email, phone number, a brief summary, and their work experience and education list.\n"
        "IMPORTANT: To ensure correct database indexing and matching, translate the 'summary', 'skills', and experience 'role'/'description' values to English in the JSON output.\n"
        "Additionally, extract all professional skills and classify EACH skill into exactly one of these four categories:\n"
        "1. Tech: Programming languages, frameworks, IT support, cloud services, software, data analysis, digital design, tech engineering.\n"
        "2. Trade: Plumbing, welding, carpentry, electrical, auto mechanics, masonry, heavy equipment operations, construction trades.\n"
        "3. Service: Customer relations, retail sales, hospitality, restaurant hosting, nursing/caregiving, school teaching, administrative support, marketing, HR.\n"
        "4. Manual: General labor, warehouse package handling, inventory loading, cleaning, commercial truck/delivery driving, assembly line.\n"
        "Also classify the candidate's employment preference into exactly one of these types based on their experience or stated goals:\n"
        "- Formal: Traditional W2, full-time, corporate jobs.\n"
        "- Informal: Cash-in-hand, casual labor, unregulated.\n"
        "- Gig: Platform-based work (Uber, Upwork), freelance, contracting.\n"
        "If not explicitly stated, infer 'Formal' as default unless their history heavily features contracting or gig platforms.\n\n"
        "Return the output as a valid JSON object matching the schema below. Do not output any markdown formatting or extra text.\n"
        "{\n"
        "  \"name\": \"Full Name\",\n"
        "  \"email\": \"email@example.com\",\n"
        "  \"phone\": \"phone or empty\",\n"
        "  \"summary\": \"Brief profile summary in English\",\n"
        "  \"skills\": [\"Skill1\", \"Skill2\", ...],\n"
        "  \"skill_classification\": {\n"
        "    \"Tech\": [\"Skill1\", ...],\n"
        "    \"Trade\": [\"Skill2\", ...],\n"
        "    \"Service\": [\"Skill3\", ...],\n"
        "    \"Manual\": [\"Skill4\", ...]\n"
        "  },\n"
        "  \"employment_preference\": \"Formal\",\n"
        "  \"experience\": [\n"
        "    {\n"
        "      \"company\": \"Company Name\",\n"
        "      \"role\": \"Job Title in English\",\n"
        "      \"duration\": \"Start - End\",\n"
        "      \"description\": \"Key responsibilities in English\"\n"
        "    }\n"
        "  ],\n"
        "  \"education\": [\n"
        "    {\n"
        "      \"institution\": \"School Name\",\n"
        "      \"degree\": \"Degree Name\",\n"
        "      \"graduation_year\": \"Year\"\n"
        "    }\n"
        "  ]\n"
        "}"
    )

    user_prompt = f"CV Text to analyze:\n{cv_text}"

    try:
        raw_response = call_llm(system_prompt, user_prompt, json_mode=True)
        # Strip code blocks if LLM still outputted them
        cleaned = re.sub(r"^```json\s*", "", raw_response.strip())
        cleaned = re.sub(r"\s*```$", "", cleaned)
        return json.loads(cleaned)
    except Exception as e:
        logger.warning(f"Failed to call LLM for CV parsing, falling back to mock rule-based parsing. Error: {e}")
        return generate_mock_profile(cv_text)


def generate_career_predictions(profile: dict) -> dict:
    """
    Step 6 & 7 & 8: Career Path Predictor, Income Opportunity Engine, and Learning Recommendations.
    Generates milestones, salary potentials, freelance options, and learning topics.
    IMPORTANT: Responses will be in the detected language of the input/candidate context if indicated, 
    otherwise English by default.
    """
    system_prompt = (
        "You are a senior career path analyst and income strategy AI. Based on the candidate's profile (skills and employment_preference), "
        "predict next steps across all sectors, find side opportunities, and outline learning plans. "
        "IMPORTANT: Tailor the 'vertical_growth' and 'income_opportunities' to their preferred employment type (Formal, Informal, or Gig).\n"
        "Return the output as a valid JSON object matching the schema below. Do not output any markdown formatting or extra text.\n"
        "{\n"
        "  \"vertical_growth\": [\n"
        "    {\n"
        "      \"role\": \"Next Target Role\",\n"
        "      \"timeframe\": \"1-2 Years\",\n"
        "      \"target_salary\": \"$X - $Y\",\n"
        "      \"milestones_required\": [\"Milestone 1\", \"Milestone 2\"]\n"
        "    }\n"
        "  ],\n"
        "  \"income_opportunities\": [\n"
        "    {\n"
        "      \"opportunity\": \"Freelance/Consulting/Contract job matching skills\",\n"
        "      \"estimated_earnings\": \"Estimated earnings rate\",\n"
        "      \"action_plan\": \"Quick start plan\"\n"
        "    }\n"
        "  ],\n"
        "  \"learning_recommendations\": [\n"
        "    {\n"
        "      \"topic\": \"Course, Cert or Skill name\",\n"
        "      \"type\": \"Certification / Tool / Practical Skill\",\n"
        "      \"reason\": \"Why this is needed for career advancement\",\n"
        "      \"suggested_platforms\": [\"Coursera\", \"Udemy\", \"Local Training\", \"Google\"]\n"
        "    }\n"
        "  ]\n"
        "}"
    )

    user_prompt = f"Candidate Profile:\n{json.dumps(profile)}"

    try:
        raw_response = call_llm(system_prompt, user_prompt, json_mode=True)
        cleaned = re.sub(r"^```json\s*", "", raw_response.strip())
        cleaned = re.sub(r"\s*```$", "", cleaned)
        return json.loads(cleaned)
    except Exception as e:
        logger.warning(f"Failed to call LLM for Career Predictions, falling back to mock rule-based engine. Error: {e}")
        return generate_mock_predictions(profile)


def get_coach_response(profile: dict, chat_history: list, user_message: str) -> str:
    """
    Step 9: AI Career Coach Chat Assistant.
    Generates helpful, personalized advice based on candidate context.
    IMPORTANT: Detect the language of the user's message and respond in the EXACT same language (e.g. Spanish, French, Zulu, etc.).
    """
    system_prompt = (
        "You are CareerPilot Coach, an encouraging, professional, and practical AI Career Coach.\n"
        "You are chatting with a candidate. Give them actionable, custom guidance. Recommend concrete steps.\n"
        f"Candidate Career Profile: {json.dumps(profile)}\n\n"
        "IMPORTANT: Detect the language of the user's input. You MUST write your entire response in that same language.\n"
        "Keep your response concise (1-2 paragraphs max), friendly, and structured. Focus on helping them grow."
    )

    # Format history for LLM
    history_str = ""
    for msg in chat_history[-6:]:  # Limit history to last 6 messages for token savings
        role_label = "User" if msg["role"] == "user" else "Coach"
        history_str += f"{role_label}: {msg['content']}\n"
    
    user_prompt = f"{history_str}User: {user_message}\nCoach:"

    try:
        return call_llm(system_prompt, user_prompt, json_mode=False)
    except Exception as e:
        logger.warning(f"Failed to call LLM for Career Coach response, falling back. Error: {e}")
        return (
            "Thanks for reaching out! Since my live AI connection is offline, I've analyzed your profile locally. "
            "I highly recommend focusing on your core skills, looking into professional certifications (like the ones listed in your Learning Path), "
            "and applying to jobs that match your skill set. Let me know if you have specific questions about formatting your resume!"
        )


# --- MOCK FALLBACK UTILITIES ---

def generate_mock_profile(cv_text: str) -> dict:
    """
    Rule-based skill extraction and classification fallback when API keys are absent.
    """
    # Simple regex parsing for email/phone
    email_match = re.search(r"[\w\.-]+@[\w\.-]+\.\w+", cv_text)
    phone_match = re.search(r"(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}", cv_text)
    
    email = email_match.group(0) if email_match else "unknown@careerpilot.com"
    phone = phone_match.group(0) if phone_match else ""
    
    # Extract candidate name (assume first line or default)
    lines = [l.strip() for l in cv_text.split("\n") if l.strip()]
    name = lines[0] if lines else "Candidate Name"
    if len(name) > 40:
        name = "Candidate Name"

    # Match skills by keyword lookup
    tech_keywords = ["python", "javascript", "react", "html", "css", "sql", "java", "c++", "git", "aws", "cloud", "docker", "excel", "software"]
    trade_keywords = ["plumbing", "welding", "electrical", "wiring", "hvac", "carpentry", "mechanic", "machining", "automotive", "drywall", "masonry"]
    service_keywords = ["customer", "sales", "retail", "nursing", "medical", "cashier", "hospitality", "teaching", "marketing", "billing", "administrative"]
    manual_keywords = ["warehouse", "forklift", "lifting", "driving", "loader", "delivery", "assembly", "packing", "shipping", "physical"]

    extracted_skills = []
    classified = {"Tech": [], "Trade": [], "Service": [], "Manual": []}

    cv_lower = cv_text.lower()
    
    # Populate classifications
    for s in tech_keywords:
        if s in cv_lower:
            skill_cap = s.capitalize() if s != "aws" and s != "html" and s != "css" else s.upper()
            extracted_skills.append(skill_cap)
            classified["Tech"].append(skill_cap)
            
    for s in trade_keywords:
        if s in cv_lower:
            skill_cap = s.capitalize() if s != "hvac" else "HVAC"
            extracted_skills.append(skill_cap)
            classified["Trade"].append(skill_cap)

    for s in service_keywords:
        if s in cv_lower:
            extracted_skills.append(s.capitalize())
            classified["Service"].append(s.capitalize())

    for s in manual_keywords:
        if s in cv_lower:
            extracted_skills.append(s.capitalize())
            classified["Manual"].append(s.capitalize())

    # If no skills detected, provide default matches based on general text indicators
    if not extracted_skills:
        extracted_skills = ["Teamwork", "Problem Solving", "Communication"]
        classified["Service"] = ["Teamwork", "Communication"]
        classified["Tech"] = ["Problem Solving"]

    # Deduplicate lists
    extracted_skills = list(set(extracted_skills))
    for k in classified:
        classified[k] = list(set(classified[k]))

    # Infer employment preference from text
    employment_preference = "Formal"
    if "freelance" in cv_lower or "contract" in cv_lower or "uber" in cv_lower or "upwork" in cv_lower or "gig" in cv_lower:
        employment_preference = "Gig"
    elif "cash" in cv_lower or "casual" in cv_lower or "day labor" in cv_lower:
        employment_preference = "Informal"

    return {
        "name": name,
        "email": email,
        "phone": phone,
        "summary": "Experienced professional with background detailed below.",
        "skills": extracted_skills,
        "skill_classification": classified,
        "employment_preference": employment_preference,
        "experience": [
            {
                "company": "Previous Employer",
                "role": "General Professional",
                "duration": "2021 - Present",
                "description": "Handled day-to-day operations and task management."
            }
        ],
        "education": [
            {
                "institution": "High School / College",
                "degree": "Graduate Diploma",
                "graduation_year": "2020"
            }
        ]
    }


def generate_mock_predictions(profile: dict) -> dict:
    """
    Generates rule-based mock career forecasts depending on major skill classifications.
    """
    classified = profile.get("skill_classification", {})
    
    # Determine dominant skill category
    counts = {k: len(v) for k, v in classified.items()}
    dominant = max(counts, key=lambda k: counts[k]) if counts else "Service"
    
    if counts.get(dominant) == 0:
        dominant = "Service"

    if dominant == "Tech":
        return {
            "vertical_growth": [
                {
                    "role": "Senior Developer / Technical Lead",
                    "timeframe": "2-3 Years",
                    "target_salary": "$90,000 - $110,000",
                    "milestones_required": ["Lead design of 2 major projects", "Master cloud deployments (AWS/GCP)"]
                },
                {
                    "role": "Software Architect",
                    "timeframe": "5 Years",
                    "target_salary": "$130,000+",
                    "milestones_required": ["System design certification", "Establish microservices infrastructure"]
                }
            ],
            "income_opportunities": [
                {
                    "opportunity": "Freelance Web Application Development",
                    "estimated_earnings": "$50 - $75/hr",
                    "action_plan": "Build a personal portfolio site and apply for contracts on Upwork/Fiverr."
                },
                {
                    "opportunity": "Tech Consulting for Local Small Businesses",
                    "estimated_earnings": "$80/hr",
                    "action_plan": "Audit small business IT systems and help automate their operations."
                }
            ],
            "learning_recommendations": [
                {
                    "topic": "System Design and Architecture",
                    "type": "Practical Skill",
                    "reason": "Crucial for moving into technical leadership roles.",
                    "suggested_platforms": ["Coursera", "Educative.io"]
                },
                {
                    "topic": "AWS Solutions Architect",
                    "type": "Certification",
                    "reason": "Validates cloud scalability and devops knowledge.",
                    "suggested_platforms": ["AWS Training", "A Cloud Guru"]
                }
            ]
        }
    elif dominant == "Trade":
        return {
            "vertical_growth": [
                {
                    "role": "Master Trade Professional / Supervisor",
                    "timeframe": "2 Years",
                    "target_salary": "$75,000 - $90,000",
                    "milestones_required": ["Obtain advanced state trade licensing", "Supervise a team of apprentice technicians"]
                },
                {
                    "role": "Trade Business Owner",
                    "timeframe": "4-5 Years",
                    "target_salary": "$120,000+",
                    "milestones_required": ["Take business administration training", "Incorporate company and hire first crew"]
                }
            ],
            "income_opportunities": [
                {
                    "opportunity": "Emergency Maintenance Contracting",
                    "estimated_earnings": "$60 - $90/hr",
                    "action_plan": "Advertise local emergency home repair services on TaskRabbit and Angi."
                }
            ],
            "learning_recommendations": [
                {
                    "topic": "Trade Licensing Prep",
                    "type": "Certification",
                    "reason": "Required by state regulations to sign off on major contracts.",
                    "suggested_platforms": ["State Trade Board", "Community College"]
                },
                {
                    "topic": "Small Business Management",
                    "type": "Tool",
                    "reason": "Teaches job costing, contracting, and invoicing basics.",
                    "suggested_platforms": ["SBA.gov Free Courses", "Udemy"]
                }
            ]
        }
    elif dominant == "Manual":
        return {
            "vertical_growth": [
                {
                    "role": "Warehouse Shift Supervisor / Fleet Dispatcher",
                    "timeframe": "1-2 Years",
                    "target_salary": "$55,000 - $65,000",
                    "milestones_required": ["Record zero-safety-incident streak", "Complete OSHA logistics safety course"]
                },
                {
                    "role": "Operations Manager",
                    "timeframe": "3-4 Years",
                    "target_salary": "$80,000+",
                    "milestones_required": ["Learn inventory ERP software", "Optimize shift schedules for cost savings"]
                }
            ],
            "income_opportunities": [
                {
                    "opportunity": "Independent Delivery / Moving Contracting",
                    "estimated_earnings": "$30 - $45/hr",
                    "action_plan": "Register vehicle on Lugg or Dolly platforms for peer-to-peer hauling."
                }
            ],
            "learning_recommendations": [
                {
                    "topic": "OSHA-30 Safety Training",
                    "type": "Certification",
                    "reason": "Mandatory or highly preferred for senior warehouse/factory supervisors.",
                    "suggested_platforms": ["OSHA.gov", "360training"]
                },
                {
                    "topic": "CDL (Commercial Driver License)",
                    "type": "License",
                    "reason": "Unlocks high-paying regional trucking and logistics opportunities.",
                    "suggested_platforms": ["Local Truck Driving School"]
                }
            ]
        }
    else:  # Service / Default
        return {
            "vertical_growth": [
                {
                    "role": "Service Department Manager",
                    "timeframe": "1-2 Years",
                    "target_salary": "$50,000 - $65,000",
                    "milestones_required": ["Achieve top-rated customer feedback scores", "Train 3+ new staff members"]
                },
                {
                    "role": "Customer Experience Director",
                    "timeframe": "4-5 Years",
                    "target_salary": "$90,000+",
                    "milestones_required": ["Learn customer CRM analytics systems", "Implement customer retention strategy"]
                }
            ],
            "income_opportunities": [
                {
                    "opportunity": "Virtual Assistant Services",
                    "estimated_earnings": "$25 - $40/hr",
                    "action_plan": "Register on Upwork and specialize in scheduling, email operations, or social media management."
                }
            ],
            "learning_recommendations": [
                {
                    "topic": "Salesforce / Hubspot CRM Administration",
                    "type": "Tool",
                    "reason": "Highly sought after skill in service operations.",
                    "suggested_platforms": ["Salesforce Trailhead", "Hubspot Academy"]
                },
                {
                    "topic": "Conflict Resolution and Leadership",
                    "type": "Practical Skill",
                    "reason": "Important for management promotion tracks.",
                    "suggested_platforms": ["Coursera", "LinkedIn Learning"]
                }
            ]
        }
