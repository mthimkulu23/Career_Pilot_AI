from fastapi import APIRouter

router = APIRouter(prefix="/api/ai", tags=["AI"])

@router.get("/health")
def health_check():
    return {"status": "AI router operational"}
