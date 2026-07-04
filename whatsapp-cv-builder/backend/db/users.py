"""
MongoDB document schema for the 'users' collection.

Collections:
  users:
    {
      _id: ObjectId,
      email: str,
      hashed_password: str,
      role: str,              # "CANDIDATE" | "EMPLOYER" | "ADMIN"
      created_at: datetime
    }
"""
import datetime
from enum import Enum

class UserRole(str, Enum):
    CANDIDATE = "CANDIDATE"
    EMPLOYER = "EMPLOYER"
    ADMIN = "ADMIN"

def new_user(email: str, hashed_password: str, role: str) -> dict:
    # Ensure role is validated against the Enum values
    normalized_role = role.upper()
    if normalized_role not in [r.value for r in UserRole]:
        raise ValueError(f"Invalid role: {role}. Must be one of {[r.value for r in UserRole]}")

    return {
        "email": email.lower().strip(),
        "hashed_password": hashed_password,
        "role": normalized_role,
        "created_at": datetime.datetime.now(datetime.timezone.utc)
    }
