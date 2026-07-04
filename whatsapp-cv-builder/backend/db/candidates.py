"""
MongoDB document schema for the 'candidates' and 'conversation_messages' collections.

Collections:
  candidates:
    {
      _id: ObjectId,
      name: str,
      email: str,
      phone: str,
      raw_text: str,
      profile: dict,          # parsed CV output (skills, classification, experience …)
      career_path: dict,       # predictions (vertical_growth, income_opportunities, learning…)
      created_at: datetime
    }

  conversation_messages:
    {
      _id: ObjectId,
      candidate_id: str,       # string representation of candidate ObjectId
      role: str,               # "user" | "assistant"
      content: str,
      created_at: datetime
    }
"""
import datetime


def new_candidate(name, email, phone, raw_text, profile, career_path) -> dict:
    return {
        "name": name,
        "email": email,
        "phone": phone,
        "raw_text": raw_text,
        "profile": profile,
        "career_path": career_path,
        "created_at": datetime.datetime.now(datetime.timezone.utc),
    }


def new_message(candidate_id: str, role: str, content: str) -> dict:
    return {
        "candidate_id": candidate_id,
        "role": role,
        "content": content,
        "created_at": datetime.datetime.now(datetime.timezone.utc)
    }
