# ---------------------------------------------------------------
# backend/services/whatsapp_service.py
# WHY THIS FILE EXISTS:
#   Sends WhatsApp messages OUT to candidates via Twilio.
#   Used for:
#     1. Replying to the candidate during the 5-question flow
#     2. Sending job alerts when an employer publishes a job
#
# HOW IT CONNECTS TO THE REST OF THE PROJECT:
#   - Reads TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and
#     TWILIO_WHATSAPP_NUMBER from config.py (loaded from .env)
#   - webhook.py calls send_message() to reply to candidates
#   - matching.py calls send_whatsapp_message() (alias kept for compat)
# ---------------------------------------------------------------

import config
from twilio.rest import Client

# Create the Twilio client once using the SID + Auth Token from .env.
_client = None

def _get_client():
    global _client
    if _client is None and config.TWILIO_ACCOUNT_SID and config.TWILIO_AUTH_TOKEN:
        _client = Client(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN)
    return _client


def send_message(to_number: str, message_text: str) -> bool:
    """
    Send one WhatsApp text message via Twilio.

    to_number:    digits only OR with +, e.g. "27715920246"
    message_text: the text to send

    Returns True if Twilio accepted, False otherwise.
    Falls back to console log if Twilio keys are not configured.
    """
    clean = str(to_number).replace("whatsapp:", "").replace("+", "").replace(" ", "").strip()
    to_whatsapp = f"whatsapp:+{clean}"

    client = _get_client()
    if not client:
        print(f"[WhatsApp FALLBACK] To: {to_whatsapp} | {message_text[:80]}")
        return False

    try:
        msg = client.messages.create(
            from_=config.TWILIO_WHATSAPP_NUMBER,
            to=to_whatsapp,
            body=message_text,
        )
        return bool(msg.sid)
    except Exception as e:
        print(f"[Twilio send_message error] {e}")
        return False


# Alias so matching.py and any other callers using the old name still work
def send_whatsapp_message(to_phone: str, message_text: str) -> bool:
    return send_message(to_phone, message_text)
