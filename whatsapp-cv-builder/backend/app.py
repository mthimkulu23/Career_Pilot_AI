import os
import sys

# Ensure backend directory is in the import path
basedir = os.path.dirname(os.path.abspath(__file__))
if basedir not in sys.path:
    sys.path.insert(0, basedir)

from flask import Flask, jsonify
from flask_cors import CORS
from routes.webhook import webhook_bp
from routes.jobs import jobs_bp

app = Flask(__name__)
# Enable CORS for React frontend integration
CORS(app, resources={r"/*": {"origins": "*"}})

# Register blueprints
app.register_blueprint(webhook_bp, url_prefix="/api")
app.register_blueprint(jobs_bp, url_prefix="/api")

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "app": "WhatsApp CV Builder Backend",
        "status": "online"
    }), 200

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5001))
    print(f"Starting server on port {port}...")
    app.run(host="0.0.0.0", port=port, debug=True)
