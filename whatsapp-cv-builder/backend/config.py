"""Configuration settings and environment variables for the application."""
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB Atlas
MONGODB_URI = os.getenv(
    "MONGODB_URI",
    "mongodb+srv://thabang23mthimkulu_db_user:"
    "M84jk3NrN87v44Gw@cluster0.tzxuefz.mongodb.net/mydatabase"
)
DB_NAME = os.getenv("DB_NAME", "career_pilot")

# LLM providers (at least one must be set for live AI; fallback kicks in without keys)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Server
PORT = int(os.getenv("PORT", "8000"))
HOST = os.getenv("HOST", "0.0.0.0")
