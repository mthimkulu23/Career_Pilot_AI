import os
import requests

def send_whatsapp_message(to_phone, message_text):
    """Sends a text message using Meta's WhatsApp Cloud API.
    If configurations are missing, it fallbacks to log console output.
    """
    token = os.getenv("WHATSAPP_TOKEN")
    phone_number_id = os.getenv("WHATSAPP_PHONE_NUMBER_ID")
    
    if not token or not phone_number_id:
        print("WhatsApp API credentials missing. Simulating output instead:")
        print(f"To: {to_phone} | Msg: {message_text}")
        return False

    url = f"https://graph.facebook.com/v20.0/{phone_number_id}/messages"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": to_phone,
        "type": "text",
        "text": {
            "body": message_text
        }
    }
    
    try:
        response = requests.post(url, json=payload, headers=headers)
        response_data = response.json()
        if response.status_code == 200:
            return True
        else:
            print("WhatsApp API Error:", response_data)
            return False
    except Exception as e:
        print("Failed to send WhatsApp message:", e)
        return False
