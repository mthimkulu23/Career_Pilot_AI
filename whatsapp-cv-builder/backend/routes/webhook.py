import os
from flask import Blueprint, request, jsonify
from services.conversation import handle_incoming_message

webhook_bp = Blueprint("webhook", __name__)

@webhook_bp.route("/webhook", methods=["GET"])
def verify_webhook():
    """Endpoint for Meta App webhook verification."""
    verify_token = os.getenv("WHATSAPP_VERIFY_TOKEN")
    
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge")
    
    if mode and token:
        if mode == "subscribe" and token == verify_token:
            print("Webhook Verified Successfully.")
            return challenge, 200
        else:
            return "Forbidden", 403
    return "Not Found", 404

@webhook_bp.route("/webhook", methods=["POST"])
def receive_message():
    """Endpoint for receiving incoming WhatsApp message webhook events from Meta."""
    data = request.json
    print("Received Webhook Payload:", data)
    
    try:
        if "object" in data and data["object"] == "whatsapp_business_account":
            for entry in data.get("entry", []):
                for change in entry.get("changes", []):
                    value = change.get("value", {})
                    messages = value.get("messages", [])
                    for message in messages:
                        phone_number = message.get("from")
                        text_body = ""
                        if message.get("type") == "text":
                            text_body = message.get("text", {}).get("body", "")
                        
                        if phone_number and text_body:
                            handle_incoming_message(phone_number, text_body)
    except Exception as e:
        print("Error parsing webhook message:", e)
        
    return jsonify({"status": "success"}), 200
