from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_engine import parse_and_classify_cv, generate_career_predictions

router = APIRouter(prefix="/ai", tags=["AI"])


# -----------------------
# Request Schemas
# -----------------------
class CVRequest(BaseModel):
    cv_text: str


# -----------------------
# 1. CV ANALYSIS
# -----------------------
@router.post("/analyze-cv")
def analyze_cv(request: CVRequest):
    """
    Parse and classify a CV text string.
    Returns structured profile with skills, classification, and experience.
    """
    if not request.cv_text.strip():
        raise HTTPException(status_code=400, detail="cv_text must not be empty.")
    return parse_and_classify_cv(request.cv_text)


# -----------------------
# 2. CAREER PREDICTION
# -----------------------
@router.post("/career")
def career_prediction(request: CVRequest):
    """
    Parse the CV and then generate career predictions,
    income opportunities, and learning recommendations.
    """
    if not request.cv_text.strip():
        raise HTTPException(status_code=400, detail="cv_text must not be empty.")
    profile = parse_and_classify_cv(request.cv_text)
    predictions = generate_career_predictions(profile)
    return {"profile": profile, "predictions": predictions}
