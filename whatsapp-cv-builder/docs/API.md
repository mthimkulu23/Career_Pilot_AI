# CareerPilot AI: Frontend & API Integration Guide

This document outlines the API flows and available endpoints for the Frontend (Web/Mobile) and WhatsApp integrations. The backend is built in FastAPI and uses MongoDB Atlas for storage.

---

## 🌊 Core Integration Flows

### Flow A: Standard Web/App Flow
1. **Upload CV:** The user uploads a PDF or raw text to `POST /api/candidates/upload`. The backend parses it, classifies the skills, infers employment preference (Formal/Informal/Gig), and returns a `candidate_id`.
2. **View Profile:** The frontend fetches the parsed profile using `GET /api/candidates/{candidate_id}`.
3. **View Job Matches:** The frontend fetches matching jobs using `GET /api/candidates/{candidate_id}/matches`.
4. **View Career Path:** The frontend fetches the 5-year roadmap, gig opportunities, and learning recommendations using `GET /api/candidates/{candidate_id}/career-path`.
5. **Chat with Coach:** The user asks a question via `POST /api/candidates/{candidate_id}/coach/chat`.

### Flow B: WhatsApp Webhook Flow (No UI)
1. **Send CV via Text:** The user sends a large text message containing their experience to the WhatsApp Bot. The bot forwards it to `POST /api/webhook/whatsapp/cv`. The backend replies with a summary string to send back to the user on WhatsApp.
2. **Chatting:** The user asks questions on WhatsApp. The bot forwards them to `POST /api/webhook/whatsapp/chat`. The backend remembers the conversation and replies contextually.

---

## 📡 API Endpoints

### 1. Authentication (`/api/auth`)

Before calling protected endpoints, you must obtain a JWT token. All protected requests require an `Authorization: Bearer <token>` header.

| Method | Endpoint | Description | Payload |
|--------|----------|-------------|---------|
| `POST` | `/register` | Register a new user with a specific role. | JSON: `{"email": "...", "password": "...", "role": "CANDIDATE"\|"EMPLOYER"\|"ADMIN"}` |
| `POST` | `/login` | Log in to obtain a JWT token. | Form URL-encoded: `username` (email), `password` |

---

### 2. Candidates (`/api/candidates`) - *All routes require Candidate ownership, Employer, or Admin role.*

| Method | Endpoint | Description | Headers & Payload |
|--------|----------|-------------|-------------------|
| `POST` | `/upload` | Upload a CV (PDF) or raw text. Auto-links profile to logged-in user. | `Authorization: Bearer <token>` <br> Form Data: `file` (PDF) OR `cv_text` (String) |
| `GET`  | `/{id}` | Get candidate parsed profile. Candidates can only get their own profile. | `Authorization: Bearer <token>` |
| `GET`  | `/{id}/matches` | Get job matches. Candidates can only get their own matches. | `Authorization: Bearer <token>` |
| `GET`  | `/{id}/career-path`| Get predicted growth path. Candidates can only get their own path. | `Authorization: Bearer <token>` |
| `POST` | `/{id}/coach/chat` | Chat with AI Career Coach. Candidates can only chat on their own profile. | `Authorization: Bearer <token>` <br> JSON: `{"message": "string"}` |
| `GET`  | `/{id}/coach/history`| Retrieve chat history. Candidates can only view their own history. | `Authorization: Bearer <token>` |

---

### 3. Jobs (`/api/jobs`)

| Method | Endpoint | Description | Authorization / Payload |
|--------|----------|-------------|-------------------------|
| `GET`  | `/` | Retrieve all jobs from database. | **Public** (No token needed) |
| `POST` | `/` | Create a new job. | **Employer / Admin only** <br> `Authorization: Bearer <token>` <br> JSON: `{"title": "...", "company": "...", "description": "...", "skills": [], "category": "...", "employment_type": "..."}` |
| `POST` | `/seed` | Wipe the DB and seed with mock jobs. | **Admin only** <br> `Authorization: Bearer <token>` |

*Note: Valid `category` types: `"Tech", "Trade", "Service", "Manual"`. Valid `employment_type` types: `"Formal", "Informal", "Gig"`.*

---

### 3. WhatsApp Webhooks (`/api/webhook`)

These endpoints are specifically designed to accept payloads from Twilio/WhatsApp wrappers and return a simple string `reply_message` that can be sent directly back to the user over SMS/WhatsApp.

#### `POST /api/webhook/whatsapp/cv`
**Description:** Processes a CV sent over WhatsApp.
**Payload:**
```json
{
  "phone": "+1234567890",
  "cv_text": "I am a delivery driver with 5 years of experience..."
}
```
**Response:**
```json
{
  "candidate_id": "64a2b...",
  "phone": "+1234567890",
  "status": "CV_PROCESSED_SUCCESSFULLY",
  "reply_message": "Hi there! 👋 Your CV has been processed. ✅ 4 skills extracted..."
}
```

#### `POST /api/webhook/whatsapp/chat`
**Description:** Forwards a WhatsApp chat message to the AI coach.
**Payload:**
```json
{
  "phone": "+1234567890",
  "message": "How do I get a raise?"
}
```
**Response:**
```json
{
  "phone": "+1234567890",
  "reply_message": "To get a raise as a delivery driver, you should focus on..."
}
```