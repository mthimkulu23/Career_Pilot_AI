# ---------------------------------------------------------------
# backend/routes/webhook.py
# Twilio WhatsApp webhook.
# Twilio sends POST form-data (not JSON) for each incoming message.
# We pull out From + Body, run the 5-question engine, reply back.
# ---------------------------------------------------------------

import traceback
from flask import Blueprint, request

from services.conversation import handle_message
from services.whatsapp_service import send_message

webhook_bp = Blueprint("webhook", __name__)


@webhook_bp.route("/webhook", methods=["POST"])
def receive_message():
    """
    Twilio sends every incoming WhatsApp message here as form data.
    We pull out the sender's number and their text, run the 5-question
    engine, and send the reply back via Twilio.
    """
    print("\n=== POST /webhook RECEIVED (Twilio) ===")

    # Twilio sends FORM data, not JSON.
    # "From" looks like "whatsapp:+27715920246"
    from_number = request.form.get("From", "")
    body = request.form.get("Body", "")

    print("FROM:", from_number, "| BODY:", body)

    # Strip the "whatsapp:+" prefix so we work with a plain number
    sender = from_number.replace("whatsapp:", "").replace("+", "").strip()

    try:
        if not sender or not body:
            print("Missing sender or body — ignoring.")
            return "<Response></Response>", 200, {"Content-Type": "text/xml"}

        # Run the 5-question engine and get the reply text
        reply = handle_message(sender, body)
        print("REPLY:", reply[:80])

        # Send the reply back to the candidate via Twilio
        send_message(sender, reply)

    except Exception:
        print("=== WEBHOOK ERROR ===")
        traceback.print_exc()

    # Twilio expects a 200 with empty TwiML so it doesn't send its own auto-reply
    return "<Response></Response>", 200, {"Content-Type": "text/xml"}
