# ---------------------------------------------------------------
# backend/services/conversation.py
# WHY THIS FILE EXISTS:
#   The "brain" of the WhatsApp bot. Runs the five-question flow:
#   given an incoming message, it figures out which question the
#   candidate is answering, saves it, and returns the next question.
#
# HOW IT CONNECTS:
#   - Uses db/candidates.py to read/write candidate records
#   - Uses the "step" field to track progress
#   - Calls services/openai_service.py after Q5 for the summary
#   - routes/webhook.py calls handle_message() for every message
# ---------------------------------------------------------------

from db.candidates import (
    get_candidate,
    create_candidate,
    save_answer,
    save_summary,
)
from services.openai_service import generate_summary

# The five questions in order. Each step maps to the field to save
# and the text to send.
QUESTIONS = {
    1: {"field": "full_name",        "text": "Question 1 of 5:\nWhat is your full name?"},
    2: {"field": "phone_number",     "text": "Question 2 of 5:\nWhat is your phone number?"},
    3: {"field": "qualification",    "text": "Question 3 of 5:\nWhat is your highest qualification?"},
    4: {"field": "main_skill",       "text": "Question 4 of 5:\nWhat is your main skill? (e.g. Plumbing, React, Sales)"},
    5: {"field": "years_experience", "text": "Question 5 of 5:\nHow many years of experience do you have?"},
}


def handle_message(whatsapp_number, message_text):
    """
    Handle one incoming WhatsApp message and return the text to reply.
    """
    candidate = get_candidate(whatsapp_number)

    # New person: create record, ask Q1.
    if candidate is None:
        create_candidate(whatsapp_number)
        return (
            "Welcome to the CV Builder!\n"
            "I'll ask you 5 quick questions to build your CV.\n\n"
            + QUESTIONS[1]["text"]
        )

    current_step = candidate["step"]

    # Already finished with CV setup. Handle career coaching.
    if current_step >= 6:
        from services.openai_service import generate_coach_response
        from db.connection import get_db
        
        db = get_db()
        candidate_profile = db["candidate_profiles"].find_one({"whatsapp_number": whatsapp_number}, {"_id": 0})
        
        # Determine the prompt based on shortcuts
        text_lower = message_text.strip().lower()
        if text_lower == "tips":
            prompt = "Please give me some personalized career coaching tips based on my profile."
        elif text_lower == "questions":
            prompt = "Please give me some common interview questions and how I should answer them based on my profile."
        else:
            prompt = message_text
            
        reply = generate_coach_response(prompt, candidate_profile or candidate)
        return reply

    # Save the answer to the current question, advance the step.
    field = QUESTIONS[current_step]["field"]
    save_answer(whatsapp_number, field, message_text, current_step + 1)

    # Not the last question: ask the next one.
    if current_step < 5:
        return QUESTIONS[current_step + 1]["text"]

    # That was Q5: generate summary, save it, finish.
    candidate = get_candidate(whatsapp_number)
    summary = generate_summary(candidate)
    save_summary(whatsapp_number, summary)

    return (
        "Thank you! Your CV is complete.\n\n"
        "Here is your professional summary:\n\n"
        + summary
        + "\n\nYou'll get a WhatsApp alert when a matching job is posted."
    )
