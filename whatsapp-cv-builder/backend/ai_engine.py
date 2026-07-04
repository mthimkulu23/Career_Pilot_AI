# ai_engine.py — re-exports the core AI functions from services.openai_service
# so that any file importing `from ai_engine import ...` works correctly.

from services.openai_service import (
    parse_and_classify_cv,
    generate_career_predictions,
    get_coach_response,
    call_llm,
    generate_mock_profile,
    generate_mock_predictions,
)

__all__ = [
    "parse_and_classify_cv",
    "generate_career_predictions",
    "get_coach_response",
    "call_llm",
    "generate_mock_profile",
    "generate_mock_predictions",
]
