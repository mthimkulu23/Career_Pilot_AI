from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends
from db.connection import candidates_col, jobs_col, messages_col
from db.candidates import new_candidate, new_message
from services.openai_service import parse_and_classify_cv, generate_career_predictions, get_coach_response
from services.matching import match_candidate_to_jobs
from pydantic import BaseModel
from typing import List, Optional
from bson import ObjectId
import io
import pypdf
from dependencies import get_current_user

router = APIRouter(prefix="/api/candidates", tags=["Candidates"])

# ── Pydantic schemas ─────────────────────────────────────────────────────────

class ChatMessageIn(BaseModel):
    message: str

class ChatMessageResponse(BaseModel):
    role: str
    content: str

# ── Helpers ──────────────────────────────────────────────────────────────────

def _oid(raw_id: str) -> ObjectId:
    """Convert a string to ObjectId, raising 422 on invalid format."""
    try:
        return ObjectId(raw_id)
    except Exception:
        raise HTTPException(status_code=422, detail=f"Invalid candidate id: {raw_id}")

def _fmt(doc: dict) -> dict:
    """Serialize a MongoDB document: convert _id → id string."""
    if doc and "_id" in doc:
        doc["id"] = str(doc.pop("_id"))
    return doc

def extract_text_from_pdf(file_bytes: bytes) -> str:
    try:
        reader = pypdf.PdfReader(io.BytesIO(file_bytes))
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
        return text.strip()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to parse PDF: {e}")

def check_access(candidate_doc: dict, current_user: dict):
    """Enforce Candidate profile ownership or Admin/Employer permissions."""
    if current_user.get("role") in ["ADMIN", "EMPLOYER"]:
        return
    # Match by profile email or explicit user_id link
    if candidate_doc.get("email") == current_user.get("email"):
        return
    if candidate_doc.get("user_id") == current_user.get("id"):
        return
    raise HTTPException(status_code=403, detail="Access denied. You do not own this candidate profile.")

# ── Endpoints ─────────────────────────────────────────────────────────────────

@router.post("/upload")
async def upload_cv(
    file: Optional[UploadFile] = File(None),
    cv_text: Optional[str] = Form(None),
    current_user: dict = Depends(get_current_user),
):
    """
    Stage 1–4: CV Upload → AI Document Understanding → Skill Extraction & Classification.
    Accepts a PDF file or plain text; stores result in MongoDB Atlas.
    """
    raw_text = ""
    if file:
        if not file.filename or not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400, detail="Only PDF uploads are supported.")
        raw_text = extract_text_from_pdf(await file.read())
    elif cv_text:
        raw_text = cv_text.strip()

    if not raw_text:
        raise HTTPException(status_code=400, detail="Provide a PDF file or cv_text.")

    # Stage 2–4
    profile = parse_and_classify_cv(raw_text)
    # Stage 6–8
    career_path = generate_career_predictions(profile)

    doc = new_candidate(
        name=profile.get("name") or "New Candidate",
        email=profile.get("email"),
        phone=profile.get("phone"),
        raw_text=raw_text,
        profile=profile,
        career_path=career_path,
    )
    doc["user_id"] = current_user.get("id")
    result = candidates_col().insert_one(doc)
    candidate_id = str(result.inserted_id)

    return {
        "id": candidate_id,
        "name": doc["name"],
        "email": doc["email"],
        "phone": doc["phone"],
        "profile": profile,
        "career_path": career_path,
    }


@router.get("/{candidate_id}")
def get_candidate(candidate_id: str, current_user: dict = Depends(get_current_user)):
    """Fetch a stored candidate profile from MongoDB Atlas."""
    doc = candidates_col().find_one({"_id": _oid(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found.")
    check_access(doc, current_user)
    return _fmt(doc)


@router.get("/{candidate_id}/matches")
def get_candidate_matches(candidate_id: str, current_user: dict = Depends(get_current_user)):
    """
    Stage 5: Job Matching Engine.
    Scores every job in the Atlas 'jobs' collection against the candidate.
    """
    doc = candidates_col().find_one({"_id": _oid(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found.")
    check_access(doc, current_user)

    profile = doc.get("profile", {})
    jobs = list(jobs_col().find())
    # Convert ObjectId to string so matching helper can include job_id
    for j in jobs:
        j["id"] = str(j.pop("_id"))

    return match_candidate_to_jobs(profile, jobs)


@router.get("/{candidate_id}/career-path")
def get_candidate_career_path(candidate_id: str, current_user: dict = Depends(get_current_user)):
    """Stage 6–8: Return career roadmap, income opportunities, and learning plan."""
    doc = candidates_col().find_one({"_id": _oid(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found.")
    check_access(doc, current_user)
    return doc.get("career_path", {})


@router.post("/{candidate_id}/coach/chat", response_model=ChatMessageResponse)
def chat_with_coach(
    candidate_id: str,
    chat_in: ChatMessageIn,
    current_user: dict = Depends(get_current_user)
):
    """Stage 9: AI Career Coach — responds to the candidate's question."""
    doc = candidates_col().find_one({"_id": _oid(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found.")
    check_access(doc, current_user)

    profile = doc.get("profile", {})

    # Retrieve last 6 messages as history
    history_docs = list(
        messages_col()
        .find({"candidate_id": candidate_id})
        .sort("created_at", 1)
        .limit(6)
    )
    history = [{"role": m["role"], "content": m["content"]} for m in history_docs]

    reply = get_coach_response(profile, history, chat_in.message)

    # Persist both turns
    messages_col().insert_many([
        new_message(candidate_id, "user", chat_in.message),
        new_message(candidate_id, "assistant", reply),
    ])

    return ChatMessageResponse(role="assistant", content=reply)


@router.get("/{candidate_id}/coach/history", response_model=List[ChatMessageResponse])
def get_chat_history(candidate_id: str, current_user: dict = Depends(get_current_user)):
    """Return full conversation history for a candidate."""
    doc = candidates_col().find_one({"_id": _oid(candidate_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Candidate not found.")
    check_access(doc, current_user)

    msgs = list(messages_col().find({"candidate_id": candidate_id}).sort("created_at", 1))
    return [ChatMessageResponse(role=m["role"], content=m["content"]) for m in msgs]
