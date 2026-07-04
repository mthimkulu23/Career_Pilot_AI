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

## 🏢 Stage 5: Employer Portal & Talent Engagement

### Goal
Help employers quickly discover qualified candidates, communicate with them, and manage recruitment efficiently — creating a complete two-sided marketplace.

---

### 5.1 Employer Dashboard
After logging in, the employer should see a summary panel with key recruitment metrics at a glance:

| Widget | Description |
|--------|-------------|
| **Active Job Posts** | All live vacancies and their status |
| **Number of Applicants** | Candidates who applied or were matched |
| **AI Recommended Candidates** | Top-ranked matches across all vacancies |
| **Interviews Scheduled** | Upcoming and pending interview sessions |
| **Hiring Analytics** | Conversion rates, time-to-hire, skill trends |

---

### 5.2 AI Candidate Matching
Instead of searching manually, employers receive AI-powered candidate recommendations automatically based on their posted jobs.

**Example recommendations:**

> **Software Engineer** — Match Score: 96%
> Skills: Python, FastAPI, MongoDB, AWS | Experience: 4 years | Available Immediately

> **Electrician** — Match Score: 92%
> Certified | 6 years experience | Available Full Time

---

### 5.3 Candidate Search & Filtering
Allow employers to filter the candidate pool by:
- Skills
- Industry sector (Tech / Trade / Service / Manual / Gig)
- Experience level
- Location
- Availability
- Expected salary
- Employment type (Formal / Informal / Gig)
- Certifications

---

### 5.4 Candidate Profile View (Employer-facing)
Each candidate profile visible to an employer should include:
- AI-generated professional summary
- Skills (classified by sector)
- Work history
- Education
- Certifications
- Portfolio link (if applicable)
- Match percentage against the employer's job posting
- Career interests and availability status

> [!CAUTION]
> **Employers must NOT be able to access:**
> - AI coaching conversations
> - Personal career plans or predictions
> - Private candidate notes

---

### 5.5 Employer Actions
Employers should be able to perform the following actions on any candidate profile:

- ⭐ **Save** candidate for later
- 📋 **Shortlist** candidate for a specific vacancy
- 📅 **Send interview invitation**
- 💬 **Send direct message**
- 📄 **Download CV** (if candidate has granted permission)
- ❌ **Reject or Archive** candidate
- ✅ **Offer Employment**

---

### 5.6 Employer Engagement Strategy
To keep employers returning to the platform regularly, the system should notify them proactively.

**Weekly Talent Recommendations:**
> *"3 new candidates matching your Warehouse Manager role are now available."*

**Instant Match Notifications (Real-time):**
Whenever a new candidate uploads a CV that matches an existing job posting:
> *"3 new candidates match your Software Developer vacancy."*

**AI Recruitment Assistant (Chat):**
Employers can ask an AI assistant questions such as:
- *"Who are my best candidates?"*
- *"Why is this candidate a good match?"*
- *"Which applicants meet all mandatory requirements?"*
- *"Who can start immediately?"*
- *"What skills are missing in my applicant pool?"*

---

### 5.7 Hiring Analytics Dashboard
Display the following metrics to help employers optimize their process:

| Metric | Description |
|--------|-------------|
| Active vacancies | Total open positions |
| Average time to hire | Days from posting to offer acceptance |
| Interview conversion rate | Percentage of interviews leading to offers |
| Offer acceptance rate | Percentage of offers accepted by candidates |
| Most requested skills | Top skills searched across all employer accounts |
| Candidate response rate | Percentage of candidates who respond to outreach |

---

### 5.8 Recruitment Workflow
```
1. Employer creates an account (EMPLOYER role)
2. Employer posts a job via POST /api/jobs/
3. AI analyzes the job description and indexes it
4. AI automatically ranks the best matching candidates
5. Employer reviews recommended candidates
6. Employer contacts and shortlists candidates
7. Interviews are scheduled
8. Candidate accepts or declines the offer
9. Employer marks the position as Filled
10. AI learns from the hiring outcome to improve future recommendations
```

---

### 5.9 Future AI Features (Roadmap)
To make CareerPilot AI stand out from competitors, the following AI-powered features are planned:

| Feature | Description |
|---------|-------------|
| **Resume-to-Job Matching** | Automatically match uploaded CVs to active vacancies |
| **AI Candidate Ranking** | Explain *why* each candidate is a strong fit |
| **Interview Question Generator** | Create role-specific interview questions automatically |
| **Candidate Skill Gap Analysis** | Identify missing skills and recommend training paths |
| **Salary Benchmarking** | Suggest competitive salary ranges by role and location |
| **Talent Pipeline** | Maintain a pool of promising candidates for future openings |
| **Automated Follow-ups** | Remind employers to review applications or respond to candidates |

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

