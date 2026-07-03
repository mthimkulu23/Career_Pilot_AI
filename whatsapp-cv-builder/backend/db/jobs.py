"""
MongoDB document schema for the 'jobs' collection.

Collection: jobs
  {
    _id: ObjectId,
    title: str,
    company: str,
    description: str,
    skills: list[str],        # stored as a real list — no JSON encoding needed
    category: str,            # "Tech" | "Trade" | "Service" | "Manual"
    employment_type: str,     # "Formal" | "Informal" | "Gig"
    salary_range: str,
    location: str,
    created_at: datetime
  }
"""
import datetime


def new_job(title, company, description, skills, category, employment_type, salary_range, location) -> dict:
    return {
        "title": title,
        "company": company,
        "description": description,
        "skills": skills,           # plain Python list — MongoDB handles it natively
        "category": category,
        "employment_type": employment_type,
        "salary_range": salary_range,
        "location": location,
        "created_at": datetime.datetime.utcnow(),
    }


MOCK_JOBS = [
    # --- Tech ---
    {
        "title": "Junior Python Developer",
        "company": "ByteCraft Solutions",
        "description": "Build robust REST APIs and integrate machine learning workflows.",
        "skills": ["Python", "SQL", "Git", "FastAPI"],
        "category": "Tech",
        "employment_type": "Formal",
        "salary_range": "$65,000 - $80,000",
        "location": "Remote / New York",
    },
    {
        "title": "React Frontend Developer",
        "company": "PixelPerfect Agency",
        "description": "Build premium client interfaces with React, Javascript, and modern CSS.",
        "skills": ["Javascript", "React", "HTML", "CSS", "Git"],
        "category": "Tech",
        "employment_type": "Formal",
        "salary_range": "$70,000 - $90,000",
        "location": "San Francisco, CA",
    },
    # --- Trade ---
    {
        "title": "Commercial Plumber",
        "company": "Apex Plumbing & HVAC",
        "description": "Install copper/PVC pipes, read schematics, and diagnose leaks.",
        "skills": ["Plumbing", "HVAC", "Wiring", "Problem Solving"],
        "category": "Trade",
        "employment_type": "Informal",
        "salary_range": "$55,000 - $70,000",
        "location": "Chicago, IL",
    },
    {
        "title": "Industrial Welder",
        "company": "MetalWorks Manufacturing",
        "description": "MIG/TIG welding, structural reading, and safety compliance.",
        "skills": ["Welding", "Mechanic", "Lifting", "Safety Compliance"],
        "category": "Trade",
        "employment_type": "Formal",
        "salary_range": "$50,000 - $65,000",
        "location": "Houston, TX",
    },
    # --- Service ---
    {
        "title": "Customer Success Representative",
        "company": "SaaSify Inc.",
        "description": "Engage cloud app users to solve queries and increase client retention.",
        "skills": ["Customer Support", "Communication", "Problem Solving", "Excel"],
        "category": "Service",
        "employment_type": "Formal",
        "salary_range": "$45,000 - $55,000",
        "location": "Austin, TX",
    },
    {
        "title": "Registered Nurse (ER)",
        "company": "City Health Hospital",
        "description": "Provide critical care to triage patients in a fast-paced ER environment.",
        "skills": ["Nursing", "Medical Assist", "Communication", "Teamwork"],
        "category": "Service",
        "employment_type": "Formal",
        "salary_range": "$80,000 - $95,000",
        "location": "Boston, MA",
    },
    # --- Manual ---
    {
        "title": "Warehouse Logistics Operator",
        "company": "SwiftShip Logistics",
        "description": "Packaging, sorting, forklift operation, and loading trailers.",
        "skills": ["Forklift", "Warehouse", "Lifting", "Inventory"],
        "category": "Manual",
        "employment_type": "Formal",
        "salary_range": "$35,000 - $42,000",
        "location": "Atlanta, GA",
    },
    {
        "title": "Local Delivery Driver",
        "company": "GoDelivery Express",
        "description": "Drive mid-size cargo trucks for local residential deliveries.",
        "skills": ["Driving", "Customer Support", "Lifting", "GPS Navigation"],
        "category": "Manual",
        "employment_type": "Gig",
        "salary_range": "$38,000 - $46,000",
        "location": "Miami, FL",
    },
]
