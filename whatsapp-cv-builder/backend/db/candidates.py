from db.connection import get_db

def get_candidates_collection():
    """Returns the PyMongo collection for candidates."""
    return get_db()["candidates"]

def get_candidate_by_phone(phone_number):
    """Retrieves a candidate by their WhatsApp phone number."""
    return get_candidates_collection().find_one({"phone_number": phone_number})

def create_candidate(phone_number):
    """Initializes and returns a candidate record with an initial conversation state."""
    candidate = {
        "phone_number": phone_number,
        "name": "",
        "experience": "",
        "skills": [],
        "summary": "",
        "state": "START"
    }
    get_candidates_collection().insert_one(candidate)
    return candidate

def update_candidate(phone_number, update_data):
    """Updates candidate properties."""
    get_candidates_collection().update_one(
        {"phone_number": phone_number},
        {"$set": update_data}
    )

def get_all_candidates():
    """Returns a list of all candidate records."""
    return list(get_candidates_collection().find())
