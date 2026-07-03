# CareerPilot AI: Product Vision & User Journey

This document outlines the core problem we are solving, our solution, and the intended User Experience (UX) flow. Please use this as a guide when designing the frontend interfaces.

---

## 🔴 The Problem

Traditional job boards and career services are fundamentally broken for a massive segment of the workforce:

1. **The "White-Collar Bias":** Most platforms (like LinkedIn or Indeed) cater almost exclusively to formal, tech, or corporate roles. They ignore tradespeople, manual laborers, service industry workers, and those in the gig or informal economy.
2. **The "CV Barrier":** Many highly skilled workers struggle to articulate their experience into a polished, professional PDF CV. As a result, standard resume-parsing algorithms pass them over.
3. **Lack of Strategic Guidance:** Finding a job is only half the battle. Knowing *how* to advance a career, what skills to learn next, and how to maximize income through side-hustles usually requires expensive, inaccessible human career coaches.

## 🟢 The Solution

**CareerPilot AI** levels the playing field. It is an accessible, AI-driven career mentor designed for the *entire* workforce.

Instead of relying on keyword matching against a rigid PDF, we use Large Language Models (LLMs) to understand the human behind the text. We extract their skills, figure out what industry they belong in (Tech, Trade, Service, or Manual), and determine how they want to work (Formal W2, Informal Cash, or Gig Economy). Then, we map out their entire future.

---

## 🗺️ The Frontend User Journey (UX Flow)

When building the web/mobile app, the user should be guided through these 4 distinct stages:

### Stage 1: The "No-CV" Onboarding
- **Goal:** Lower the barrier to entry while still supporting traditional job seekers.
- **UI Experience:** Give the user two easy options:
  1. **Upload a PDF:** If they already have a traditional CV, they can upload it directly.
  2. **Raw Text Box:** If they don't have a CV, they can use a friendly text box. Ask them: *"Tell us what you do, what tools you use, and how you usually get paid."* 
- **Backend Action:** The backend takes either the PDF or the messy raw text, parses it via AI, and builds a professional, structured profile behind the scenes.

### Stage 2: The Dashboard (Profile & Skills)
- **Goal:** Show the user their value.
- **UI Experience:** Display their newly generated profile. Show them the skills the AI discovered they have. Highlight their dominant sector (e.g., "Manual Labor") and their preferred work style (e.g., "Gig Economy").

### Stage 3: The Job Matcher & Income Strategy
- **Goal:** Give them immediate opportunities and a long-term roadmap.
- **UI Experience:**
  - **Immediate Jobs:** Show a feed of matched jobs. If they are missing a skill for a job, highlight it (e.g., *"You are an 80% match, but you need OSHA certification"*).
  - **Side-Hustles:** Have a section for "Gig Opportunities" showing how they can make money this weekend with their current skills.
  - **5-Year Plan:** Show a timeline of where they could be in 5 years (e.g., *Warehouse Operator ➔ Shift Supervisor ➔ Fleet Manager*) and the salary they can expect.

### Stage 4: The AI Coach Chatbot
- **Goal:** Continuous, personalized mentorship.
- **UI Experience:** A floating chat window or dedicated screen where the user can talk to their "Coach".
- **Interaction:** Because the backend feeds the AI their exact profile and job matches, the user can ask things like: *"How do I negotiate my salary for that Delivery job?"* and get highly specific advice.

---

## 🔒 User Roles & Security Model

To protect user data and ensure proper permissions, the frontend must support three distinct user roles:

### 1. The Candidate (Job Seeker)
- **Permissions:** Can register, log in, upload their own CV, view their own profile, matches, and career path, and chat with their coach.
- **Privacy:** Restrained to their own data only. Attempting to access another candidate's profile via ID will result in a `403 Forbidden` error.

### 2. The Employer
- **Permissions:** Can post new job opportunities (`POST /api/jobs/`) and search/view candidate profiles to find matches.
- **Restrictions:** Cannot access candidate chat histories or career predictions (coaching content is strictly private to the candidate). Cannot seed the database.

### 3. The Admin
- **Permissions:** Full read/write access across all endpoints. Can view all candidates, post jobs, and run system tasks (like `/api/jobs/seed` to reset the database).

