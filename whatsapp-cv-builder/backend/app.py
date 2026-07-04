import os
import sys

# Ensure backend directory is in the import path
basedir = os.path.dirname(os.path.abspath(__file__))
if basedir not in sys.path:
    sys.path.insert(0, basedir)

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from routes.webhook import webhook_bp
from routes.jobs import jobs_bp
from routes.auth import auth_bp
from routes.candidates import candidates_bp

# The path to the React build folder
frontend_dist = os.path.join(basedir, "..", "frontend", "dist")

app = Flask(__name__, static_folder=frontend_dist, static_url_path="/")
# Secret key for session management
app.secret_key = os.getenv("SECRET_KEY", "career-pilot-dev-secret-change-in-prod")
# Enable CORS for React frontend with credentials support
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Register blueprints
app.register_blueprint(webhook_bp, url_prefix="/api")
app.register_blueprint(jobs_bp, url_prefix="/api")
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(candidates_bp, url_prefix="/api")

# Serve the React App from the root path
@app.route("/")
def serve_react():
    # Check if the frontend has been built
    if not os.path.exists(os.path.join(frontend_dist, "index.html")):
        return """
        <h1>React Frontend Not Built</h1>
        <p>You need to build the React frontend for the backend to serve it. Run these commands in your terminal:</p>
        <pre>
cd ../frontend
npm install
npm run build
        </pre>
        <p>After building, refresh this page.</p>
        """, 404

    return send_from_directory(frontend_dist, "index.html")

# Fallback for React Router (catch-all for SPA routes like /dashboard)
@app.errorhandler(404)
def not_found(e):
    if not os.path.exists(os.path.join(frontend_dist, "index.html")):
        return jsonify({"error": "Not found"}), 404
    return send_from_directory(frontend_dist, "index.html")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5001))
    print(f"Starting server on port {port}...")
    app.run(host="0.0.0.0", port=port, debug=True)
