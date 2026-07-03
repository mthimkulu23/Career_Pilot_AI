from fastapi import APIRouter, HTTPException
from db.connection import candidates_col, jobs_col, messages_col
from db.candidates import new_candidate, new_message
from services.openai_service import parse_and_classify_cv, generate_career_predictions, get_coach_response
from pydantic import BaseModel
import datetime

router = APIRouter(prefix="/api/webhook", tags=["Webhook"])


class WhatsAppCVRequest(BaseModel):
    phone: str
    cv_text: str


class WhatsAppChatRequest(BaseModel):
    phone: str
    message: str


@router.post("/whatsapp/cv")
def webhook_whatsapp_cv(req: WhatsAppCVRequest):
    """
    Simulated WhatsApp webhook: candidate sends their CV text by phone number.
    Runs the full pipeline and upserts the candidate document in MongoDB Atlas.
    """
    phone = req.phone.strip()
    cv_text = req.cv_text.strip()

    if not phone or not cv_text:
        raise HTTPException(status_code=400, detail="phone and cv_text are required.")

    # Stage 2–4: Parse & classify
    profile = parse_and_classify_cv(cv_text)
    # Stage 6–8: Career predictions
    predictions = generate_career_predictions(profile)

    # Upsert candidate by phone
    col = candidates_col()
    existing = col.find_one({"phone": phone})
    doc = new_candidate(
        name=profile.get("name") or "WhatsApp Candidate",
        email=profile.get("email"),
        phone=phone,
        raw_text=cv_text,
        profile=profile,
        career_path=predictions,
    )

    if existing:
        doc["updated_at"] = datetime.datetime.utcnow()
        col.update_one({"phone": phone}, {"$set": doc})
        candidate_id = str(existing["_id"])
    else:
        result = col.insert_one(doc)
        candidate_id = str(result.inserted_id)

    clf = profile.get("skill_classification", {})
    dominant = max(clf, key=lambda k: len(clf[k])) if clf else "General"

    reply = (
        f"Hi {profile.get('name', 'there')}! 👋 Your CV has been processed.\n\n"
        f"✅ {len(profile.get('skills', []))} skills extracted — dominant sector: *{dominant}*.\n"
        f"💼 Your career roadmap and job matches are ready.\n"
        f"💬 Reply with any career question to chat with your AI Career Coach!"
    )

    return {
        "candidate_id": candidate_id,
        "phone": phone,
        "status": "CV_PROCESSED_SUCCESSFULLY",
        "reply_message": reply,
        "extracted_profile": profile,
        "predictions": predictions,
    }


@router.post("/whatsapp/chat")
def webhook_whatsapp_chat(req: WhatsAppChatRequest):
    """
    Simulated WhatsApp webhook: candidate sends a message to the AI Career Coach.
    """
    phone = req.phone.strip()
    message = req.message.strip()

    if not phone or not message:
        raise HTTPException(status_code=400, detail="phone and message are required.")

    candidate = candidates_col().find_one({"phone": phone})
    if not candidate:
        return {
            "phone": phone,
            "reply_message": (
                "Hi! 👋 I couldn't find a CV on file for your number. "
                "Please send your CV text first to get started!"
            ),
        }

    candidate_id = str(candidate["_id"])
    profile = candidate.get("profile", {})

    # Retrieve last 6 messages as history
    history_docs = list(
        messages_col()
        .find({"candidate_id": candidate_id})
        .sort("created_at", 1)
        .limit(6)
    )
    history = [{"role": m["role"], "content": m["content"]} for m in history_docs]

    coach_reply = get_coach_response(profile, history, message)

    messages_col().insert_many([
        new_message(candidate_id, "user", message),
        new_message(candidate_id, "assistant", coach_reply),
    ])

    return {"phone": phone, "reply_message": coach_reply}
