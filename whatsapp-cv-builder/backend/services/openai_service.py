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
            f"and adding value to any organisation."
        )
