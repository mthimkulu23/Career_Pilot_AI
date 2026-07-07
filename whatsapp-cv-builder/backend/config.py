import os
from dotenv import load_dotenv

# Path to the backend directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Load environment variables from the absolute path of .env
load_dotenv(os.path.join(basedir, '.env'))

class Config:
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/my_database")

# ── Twilio ──────────────────────────────────────────────────────────────────
# whatsapp_service.py imports these directly (not from Config class)
TWILIO_ACCOUNT_SID    = os.getenv("TWILIO_ACCOUNT_SID", "")
TWILIO_AUTH_TOKEN     = os.getenv("TWILIO_AUTH_TOKEN", "")
# Must be in form "whatsapp:+14155238886" (Twilio Sandbox or approved number)
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER", "whatsapp:+14155238886")
