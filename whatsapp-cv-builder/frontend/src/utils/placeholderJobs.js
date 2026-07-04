export const PLACEHOLDER_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Discovery Ltd',
    location: 'Sandton, Johannesburg (Hybrid)',
    type: 'Full-time',
    salary: 'R850,000 - R1,100,000 p.a.',
    description: 'Lead frontend architecture for digital insurance products. Requires JavaScript, React, and modern web development experience.',
    status: 'Active',
    createdAt: '2026-06-28',
  },
  {
    id: 2,
    title: 'Lead UX Designer',
    company: 'Naked Insurance',
    location: 'Cape Town (Remote)',
    type: 'Remote',
    salary: 'R720,000 - R950,000 p.a.',
    description: 'Shape customer-facing insurance experiences. Requires 5+ years of UI/UX design, Figma, and design systems experience.',
    status: 'Active',
    createdAt: '2026-06-29',
  },
  {
    id: 3,
    title: 'Construction Site Supervisor',
    company: 'Murray & Roberts',
    location: 'Johannesburg, Gauteng',
    type: 'Full-time',
    salary: 'R420,000 - R580,000 p.a.',
    description: 'Supervise construction crews, enforce safety protocols, read blueprints, and manage power tools on active building sites.',
    status: 'Active',
    createdAt: '2026-06-30',
  },
  {
    id: 4,
    title: 'Marketing Coordinator',
    company: 'Takealot',
    location: 'Cape Town, Western Cape',
    type: 'Full-time',
    salary: 'R320,000 - R450,000 p.a.',
    description: 'Manage social media campaigns, content marketing, SEO strategy, and client communication for e-commerce growth.',
    status: 'Active',
    createdAt: '2026-07-01',
  },
  {
    id: 5,
    title: 'Python Data Analyst',
    company: 'Standard Bank',
    location: 'Johannesburg, Gauteng',
    type: 'Full-time',
    salary: 'R550,000 - R750,000 p.a.',
    description: 'Analyse financial datasets, build Python dashboards, and support data-driven decision making across retail banking.',
    status: 'Active',
    createdAt: '2026-07-01',
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'Yoco',
    location: 'Cape Town (Hybrid)',
    type: 'Full-time',
    salary: 'R600,000 - R820,000 p.a.',
    description: 'Build payment products for SMEs using JavaScript, React, Node, and cloud infrastructure. Fintech experience a plus.',
    status: 'Active',
    createdAt: '2026-07-02',
  },
  {
    id: 7,
    title: 'Warehouse Operations Lead',
    company: 'Pick n Pay',
    location: 'Durban, KwaZulu-Natal',
    type: 'Full-time',
    salary: 'R280,000 - R380,000 p.a.',
    description: 'Oversee warehouse logistics, forklift operations, inventory control, and team safety compliance in a high-volume distribution centre.',
    status: 'Active',
    createdAt: '2026-07-02',
  },
  {
    id: 8,
    title: 'Sales Consultant',
    company: 'Vodacom',
    location: 'Pretoria, Gauteng',
    type: 'Full-time',
    salary: 'R240,000 - R360,000 p.a. + commission',
    description: 'Drive B2B and consumer sales, manage client relationships, and exceed revenue targets in the telecommunications sector.',
    status: 'Active',
    createdAt: '2026-07-03',
  },
  {
    id: 9,
    title: 'Registered Nurse',
    company: 'Netcare',
    location: 'Johannesburg, Gauteng',
    type: 'Full-time',
    salary: 'R350,000 - R480,000 p.a.',
    description: 'Deliver patient care in a busy hospital ward. Requires valid SANC registration and strong clinical communication skills.',
    status: 'Active',
    createdAt: '2026-07-03',
  },
  {
    id: 10,
    title: 'Digital Marketing Specialist',
    company: 'Woolworths',
    location: 'Remote (South Africa)',
    type: 'Remote',
    salary: 'R380,000 - R520,000 p.a.',
    description: 'Plan and execute digital campaigns, manage social media content, and analyse marketing performance across retail channels.',
    status: 'Active',
    createdAt: '2026-07-03',
  },
  {
    id: 11,
    title: 'Financial Accountant',
    company: 'PwC South Africa',
    location: 'Sandton, Johannesburg',
    type: 'Full-time',
    salary: 'R450,000 - R620,000 p.a.',
    description: 'Prepare financial statements, manage bookkeeping processes, and support audit engagements for corporate clients.',
    status: 'Active',
    createdAt: '2026-07-04',
  },
  {
    id: 12,
    title: 'DevOps Engineer',
    company: 'MTN',
    location: 'Johannesburg (Hybrid)',
    type: 'Full-time',
    salary: 'R700,000 - R950,000 p.a.',
    description: 'Maintain cloud infrastructure, automate deployments with Docker and AWS, and support high-availability telco systems.',
    status: 'Active',
    createdAt: '2026-07-04',
  },
  {
    id: 13,
    title: 'Customer Support Agent',
    company: 'Capitec Bank',
    location: 'Stellenbosch, Western Cape',
    type: 'Full-time',
    salary: 'R180,000 - R260,000 p.a.',
    description: 'Handle customer enquiries via phone and chat, resolve banking issues, and deliver excellent client service daily.',
    status: 'Active',
    createdAt: '2026-07-04',
  },
  {
    id: 14,
    title: 'Project Manager',
    company: 'Sanlam',
    location: 'Bellville, Cape Town',
    type: 'Contract',
    salary: 'R650 - R950 per hour',
    description: 'Lead agile project delivery for insurance product launches. Requires project management, scrum, and stakeholder leadership.',
    status: 'Active',
    createdAt: '2026-07-04',
  },
];

const PLACEHOLDER_IDS = new Set(PLACEHOLDER_JOBS.map((j) => j.id));

export function ensureJobsSeeded() {
  try {
    const saved = localStorage.getItem('jobs');
    let customJobs = [];

    if (saved) {
      const parsed = JSON.parse(saved);
      const hasLegacyCurrency = parsed.some((j) => j.salary?.includes('$'));
      customJobs = parsed.filter((j) => !PLACEHOLDER_IDS.has(j.id));

      if (!parsed.length || hasLegacyCurrency || parsed.length < PLACEHOLDER_JOBS.length) {
        const merged = [...PLACEHOLDER_JOBS, ...customJobs];
        localStorage.setItem('jobs', JSON.stringify(merged));
        return merged;
      }

      return parsed;
    }

    localStorage.setItem('jobs', JSON.stringify(PLACEHOLDER_JOBS));
    return PLACEHOLDER_JOBS;
  } catch {
    localStorage.setItem('jobs', JSON.stringify(PLACEHOLDER_JOBS));
    return PLACEHOLDER_JOBS;
  }
}

export function getPlatformJobs() {
  return ensureJobsSeeded();
}

export function getActiveJobCount() {
  return getPlatformJobs().filter((j) => j.status === 'Active' || !j.status).length;
}
