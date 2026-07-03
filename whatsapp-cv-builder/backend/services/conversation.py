from db.candidates import get_candidate_by_phone, create_candidate, update_candidate
from services.whatsapp_service import send_whatsapp_message
from services.openai_service import generate_cv_summary

def handle_incoming_message(phone_number, text_content):
    """Processes incoming candidate messages and progresses their state through the CV building flow."""
    # Fetch or initialize candidate
    candidate = get_candidate_by_phone(phone_number)
    if not candidate:
        candidate = create_candidate(phone_number)
    
    current_state = candidate.get("state", "START")
    text = text_content.strip()
    
    if current_state == "START":
        welcome_msg = "Welcome to Career Pilot AI! Let's build your professional CV in 4 quick steps.\n\nFirst, please reply with your **Full Name**."
        send_whatsapp_message(phone_number, welcome_msg)
        update_candidate(phone_number, {"state": "AWAITING_NAME"})
        
    elif current_state == "AWAITING_NAME":
        update_candidate(phone_number, {
            "name": text,
            "state": "AWAITING_EXPERIENCE"
        })
        send_whatsapp_message(
            phone_number, 
            "Great! Next, please describe your **Work Experience** (e.g. '2 years as a cashier', 'freelance software engineer for 1 year')."
        )
        
    elif current_state == "AWAITING_EXPERIENCE":
        update_candidate(phone_number, {
            "experience": text,
            "state": "AWAITING_SKILLS"
        })
        send_whatsapp_message(
            phone_number, 
            "Got it. Now, please list your **Key Skills** separated by commas (e.g. 'Python, SQL, communication' or 'Customer Service, POS, stock management')."
        )
        
    elif current_state == "AWAITING_SKILLS":
        # Parse skills
        skills = [s.strip() for s in text.split(",") if s.strip()]
        
        # Update state during generation
        update_candidate(phone_number, {"skills": skills, "state": "GENERATING_SUMMARY"})
        send_whatsapp_message(phone_number, "Thank you! Generating your professional CV summary now...")
        
        # Generate summary using OpenAI
        name = candidate.get("name", "Candidate")
        experience = candidate.get("experience", "Not specified")
        summary = generate_cv_summary(name, experience, skills)
        
        # Save final state
        update_candidate(phone_number, {
            "skills": skills,
            "summary": summary,
            "state": "COMPLETED"
        })
        
        summary_msg = f"🎉 **CV Successfully Built!**\n\nHere is your generated Professional Summary:\n\n\"{summary}\"\n\nWe will notify you immediately via WhatsApp if any matching jobs are published."
        send_whatsapp_message(phone_number, summary_msg)
        
    elif current_state == "COMPLETED":
        if text.lower() == "reset":
            welcome_msg = "Let's rebuild your CV. Please reply with your **Full Name**."
            send_whatsapp_message(phone_number, welcome_msg)
            update_candidate(phone_number, {
                "name": "",
                "experience": "",
                "skills": [],
                "summary": "",
                "state": "AWAITING_NAME"
            })
        else:
            info_msg = "Your CV is already registered. If you wish to rebuild it, please reply with 'reset'."
            send_whatsapp_message(phone_number, info_msg)
            
    # For any transition or error recovery
    elif current_state == "GENERATING_SUMMARY":
        send_whatsapp_message(phone_number, "We are currently generating your summary. Please wait a moment.")
