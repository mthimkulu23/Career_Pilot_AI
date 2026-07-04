# CareerPilot AI — Hackathon Pitch Guide (Simple & Easy)

A simple, 2-minute guide to help you pitch **CareerPilot AI** to the judges.

---

## 🚀 1. The 30-Second Elevator Pitch
> *"Traditional job platforms like LinkedIn work great for corporate offices, but they completely ignore blue-collar workers, tradespeople, and gig workers. These workers often don't have a formal PDF resume, and they use WhatsApp, not complex job portals. **CareerPilot AI** is a WhatsApp-first assistant. Workers just send a quick text message or photo of their experience, and our system automatically creates a professional profile, matches them to local jobs, and guides their career."*

---

## 🎯 2. The Core Problem & Our Solution
* **The Problem:** Blue-collar workers (plumbers, drivers, retail workers) are locked out of modern career tools because they don't have formatted resumes or computers. Additionally, many do not speak or write in English as their primary language.
* **Our Solution:** A WhatsApp integration. You text our chatbot in **any language** (e.g., Spanish, French, Zulu, Xhosa, etc.), and it does the rest.

## 🌍 3. How the Tech Works (Made Simple)

We combine two types of tech to keep the app fast, cheap, and localized:

1. **AI (Large Language Model - OpenAI/Gemini):**
   * Acts as the "smart parser." It reads unstructured WhatsApp texts in **any language**, translates the profile details (skills, summaries, roles) to English for standardized matchmaking, and extracts standard entities.
   * Groups skills into 4 categories: **Tech**, **Trade**, **Service**, or **Manual**.
   * Acts as the "AI Career Coach" to chat with workers—**detecting the language of the incoming message and replying in the exact same language (e.g., Zulu, Spanish, etc.)** to offer localized advice.
2. **ML (Localized Math Rules):**
   * Acts as the "job matcher." Instead of paying for expensive AI to match jobs, a fast local Python formula calculates skill overlap:
     $$\text{Match Score} = \frac{\text{Skills Candidate Has}}{\text{Skills Job Needs}} \times 100$$
   * Matches candidate profiles against jobs instantly and cost-effectively.

---

## ⚙️ 4. Technology Stack Checklist
* **FastAPI:** The engine that runs our server.
* **MongoDB Atlas:** The cloud database where candidate profiles and jobs are stored.
* **OpenAI (GPT-4o-mini) & Gemini:** The artificial intelligence models.
* **Uvicorn:** Starts and handles the server connections.

---

## 🏆 5. Show the Judges (Live Demo Steps)
1. **Show the Health Page:** Open `http://localhost:8000/api/status` to show the application is healthy.
2. **Show the Swagger API Docs:** Open `http://localhost:8000/docs` to show a clean, ready-to-scale backend.
3. **Show Fallback Resilience:** Explain that if the OpenAI API keys run out, the system automatically uses a smart local keywords search fallback so the WhatsApp bot *never crashes*.
