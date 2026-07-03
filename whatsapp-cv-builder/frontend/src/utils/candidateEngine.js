const SKILL_CATALOG = [
  { name: 'JavaScript', keywords: ['javascript', 'js', 'react', 'node', 'frontend', 'web developer'] },
  { name: 'Python', keywords: ['python', 'django', 'flask', 'data science', 'machine learning'] },
  { name: 'Project Management', keywords: ['project management', 'pm', 'agile', 'scrum', 'leadership'] },
  { name: 'UI/UX Design', keywords: ['ui', 'ux', 'design', 'figma', 'wireframe', 'user experience'] },
  { name: 'Forklift Operation', keywords: ['forklift', 'warehouse', 'logistics'] },
  { name: 'Power Tools', keywords: ['power tools', 'construction', 'carpentry', 'building'] },
  { name: 'Blueprint Reading', keywords: ['blueprint', 'technical drawing', 'architectural'] },
  { name: 'Safety Protocols', keywords: ['safety', 'osha', 'hazard', 'compliance'] },
  { name: 'Customer Service', keywords: ['customer service', 'client', 'support', 'communication'] },
  { name: 'Sales', keywords: ['sales', 'revenue', 'negotiation', 'closing deals'] },
  { name: 'Marketing', keywords: ['marketing', 'social media', 'seo', 'content', 'campaign'] },
  { name: 'Accounting', keywords: ['accounting', 'bookkeeping', 'finance', 'excel', 'quickbooks'] },
  { name: 'Team Leadership', keywords: ['team lead', 'supervisor', 'management', 'mentor'] },
  { name: 'Time Management', keywords: ['time management', 'deadline', 'organized', 'efficient'] },
  { name: 'SQL & Databases', keywords: ['sql', 'database', 'postgres', 'mysql', 'data'] },
  { name: 'Cloud Computing', keywords: ['aws', 'azure', 'cloud', 'devops', 'docker'] },
];

const SECTOR_RULES = [
  { sector: 'Technology', keywords: ['software', 'developer', 'engineer', 'programming', 'tech', 'it', 'javascript', 'python'] },
  { sector: 'Construction & Trades', keywords: ['construction', 'forklift', 'blueprint', 'carpentry', 'trades', 'building'] },
  { sector: 'Design & Creative', keywords: ['design', 'creative', 'ux', 'ui', 'graphic', 'brand'] },
  { sector: 'Business & Finance', keywords: ['finance', 'accounting', 'business', 'sales', 'marketing'] },
  { sector: 'Healthcare', keywords: ['healthcare', 'nurse', 'medical', 'patient', 'clinical'] },
  { sector: 'Logistics & Operations', keywords: ['warehouse', 'logistics', 'supply chain', 'operations'] },
];

const SIDE_HUSTLE_TEMPLATES = [
  { title: 'Freelance Web Projects', platform: 'Upwork', earnings: '$500–$2,000/mo', timeCommitment: '5–10 hrs/week', skills: ['JavaScript', 'UI/UX Design'] },
  { title: 'Weekend Construction Gigs', platform: 'TaskRabbit', earnings: '$200–$600/weekend', timeCommitment: 'Weekends', skills: ['Power Tools', 'Blueprint Reading'] },
  { title: 'Online Tutoring', platform: 'Preply', earnings: '$15–$40/hr', timeCommitment: '3–6 hrs/week', skills: ['Customer Service', 'Time Management'] },
  { title: 'Social Media Management', platform: 'Fiverr', earnings: '$300–$1,500/mo', timeCommitment: '4–8 hrs/week', skills: ['Marketing', 'Customer Service'] },
  { title: 'Warehouse Shift Work', platform: 'Indeed Flex', earnings: '$18–$25/hr', timeCommitment: 'Flexible shifts', skills: ['Forklift Operation', 'Safety Protocols'] },
  { title: 'Data Entry & Admin', platform: 'Remote.co', earnings: '$12–$20/hr', timeCommitment: 'Part-time', skills: ['Accounting', 'Time Management'] },
  { title: 'UX Design Contracts', platform: 'Toptal', earnings: '$60–$120/hr', timeCommitment: 'Project-based', skills: ['UI/UX Design', 'Project Management'] },
  { title: 'Cloud Consulting', platform: 'Contra', earnings: '$75–$150/hr', timeCommitment: 'Evenings', skills: ['Cloud Computing', 'Python'] },
];

const CAREER_PATHS = {
  Technology: [
    { year: 'Year 1', title: 'Junior Developer', salary: '$55k–$70k', icon: '💻' },
    { year: 'Year 2', title: 'Mid-Level Engineer', salary: '$75k–$95k', icon: '🚀' },
    { year: 'Year 3', title: 'Senior Developer', salary: '$100k–$130k', icon: '⭐' },
    { year: 'Year 4', title: 'Tech Lead', salary: '$120k–$150k', icon: '🎯' },
    { year: 'Year 5', title: 'Engineering Manager', salary: '$140k–$180k', icon: '👑' },
  ],
  'Construction & Trades': [
    { year: 'Year 1', title: 'Skilled Tradesperson', salary: '$40k–$55k', icon: '🔧' },
    { year: 'Year 2', title: 'Site Supervisor', salary: '$55k–$70k', icon: '📋' },
    { year: 'Year 3', title: 'Project Coordinator', salary: '$65k–$80k', icon: '🏗️' },
    { year: 'Year 4', title: 'Construction Manager', salary: '$80k–$100k', icon: '🎯' },
    { year: 'Year 5', title: 'Operations Director', salary: '$95k–$120k', icon: '👑' },
  ],
  'Design & Creative': [
    { year: 'Year 1', title: 'Junior Designer', salary: '$45k–$60k', icon: '🎨' },
    { year: 'Year 2', title: 'Product Designer', salary: '$65k–$85k', icon: '✨' },
    { year: 'Year 3', title: 'Senior UX Designer', salary: '$90k–$115k', icon: '⭐' },
    { year: 'Year 4', title: 'Design Lead', salary: '$110k–$140k', icon: '🎯' },
    { year: 'Year 5', title: 'Head of Design', salary: '$130k–$170k', icon: '👑' },
  ],
  'Business & Finance': [
    { year: 'Year 1', title: 'Analyst / Associate', salary: '$45k–$60k', icon: '📊' },
    { year: 'Year 2', title: 'Account Manager', salary: '$60k–$75k', icon: '🤝' },
    { year: 'Year 3', title: 'Senior Consultant', salary: '$80k–$100k', icon: '⭐' },
    { year: 'Year 4', title: 'Department Lead', salary: '$100k–$130k', icon: '🎯' },
    { year: 'Year 5', title: 'Director', salary: '$120k–$160k', icon: '👑' },
  ],
  default: [
    { year: 'Year 1', title: 'Entry-Level Specialist', salary: '$40k–$55k', icon: '🌱' },
    { year: 'Year 2', title: 'Experienced Professional', salary: '$55k–$70k', icon: '📈' },
    { year: 'Year 3', title: 'Senior Specialist', salary: '$70k–$90k', icon: '⭐' },
    { year: 'Year 4', title: 'Team Lead', salary: '$85k–$110k', icon: '🎯' },
    { year: 'Year 5', title: 'Department Manager', salary: '$100k–$130k', icon: '👑' },
  ],
};

function normalizeText(text) {
  return (text || '').toLowerCase();
}

function detectSkills(text) {
  const normalized = normalizeText(text);
  const found = [];

  SKILL_CATALOG.forEach(({ name, keywords }) => {
    const matches = keywords.filter((kw) => normalized.includes(kw)).length;
    if (matches > 0) {
      const level = Math.min(95, 60 + matches * 12 + Math.floor(Math.random() * 8));
      found.push({ name, level });
    }
  });

  if (found.length === 0) {
    return [
      { name: 'Communication', level: 75 },
      { name: 'Problem Solving', level: 70 },
      { name: 'Time Management', level: 72 },
      { name: 'Teamwork', level: 78 },
    ];
  }

  return found.sort((a, b) => b.level - a.level).slice(0, 8);
}

function detectSector(text) {
  const normalized = normalizeText(text);
  let best = { sector: 'General Professional', score: 0 };

  SECTOR_RULES.forEach(({ sector, keywords }) => {
    const score = keywords.filter((kw) => normalized.includes(kw)).length;
    if (score > best.score) best = { sector, score };
  });

  return best.sector;
}

function detectWorkStyle(text) {
  const normalized = normalizeText(text);
  if (/remote|work from home|wfh|distributed/.test(normalized)) return 'Remote-first';
  if (/gig|contract|freelance|part-time|weekend/.test(normalized)) return 'Gig Economy';
  if (/hybrid/.test(normalized)) return 'Hybrid';
  return 'Full-time Employment';
}

function detectPaymentPreference(text) {
  const normalized = normalizeText(text);
  if (/hourly|per hour|\/hr/.test(normalized)) return 'Hourly rate';
  if (/project|per project|contract basis/.test(normalized)) return 'Per-project basis';
  if (/salary|annual|yearly/.test(normalized)) return 'Annual salary';
  if (/gig|freelance/.test(normalized)) return 'Flexible / gig-based';
  return 'Competitive salary';
}

export function buildProfileFromText(text, userName) {
  const skills = detectSkills(text);
  const dominantSector = detectSector(text);

  return {
    name: userName,
    dominantSector,
    workStyle: detectWorkStyle(text),
    skills,
    experience: text.trim(),
    preferredPayment: detectPaymentPreference(text),
    lastUpdated: new Date().toISOString(),
  };
}

export function buildProfileFromUpload(file, userName) {
  const fileHint = `${file.name} ${userName}`;
  const skills = detectSkills(fileHint);
  const dominantSector = detectSector(fileHint);

  return {
    name: userName,
    dominantSector,
    workStyle: 'Full-time Employment',
    skills,
    experience: `CV uploaded: ${file.name} (${Math.round(file.size / 1024)} KB)`,
    preferredPayment: 'Competitive salary',
    uploadedFile: file.name,
    lastUpdated: new Date().toISOString(),
  };
}

export function mergeProfileUpdate(existingProfile, updateData, userName) {
  if (updateData.method === 'text' && updateData.rawText?.trim()) {
    const analyzed = buildProfileFromText(
      `${existingProfile?.experience || ''}\n${updateData.rawText}`,
      userName
    );
    return {
      ...analyzed,
      experience: updateData.rawText.trim(),
    };
  }

  if (updateData.method === 'upload' && updateData.file) {
    const analyzed = buildProfileFromUpload(updateData.file, userName);
    return {
      ...existingProfile,
      ...analyzed,
      skills: analyzed.skills.length ? analyzed.skills : existingProfile?.skills,
    };
  }

  return existingProfile;
}

function getPlatformJobs() {
  const defaultJobs = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      company: 'Stripe',
      location: 'San Francisco, CA (Hybrid)',
      type: 'Full-time',
      salary: '$165,000 - $190,000',
      description: 'Looking for a product-minded engineer to lead frontend architecture for payments UI. Requires JavaScript, React, and web development experience.',
      status: 'Active',
      createdAt: '2026-07-01',
    },
    {
      id: 2,
      title: 'Lead UX Designer',
      company: 'Linear',
      location: 'Remote (US/Europe)',
      type: 'Remote',
      salary: '$140,000 - $160,000',
      description: 'Shape the next generation of software tracking tools. Requires 5+ years of design systems, UI/UX, and Figma experience.',
      status: 'Active',
      createdAt: '2026-07-02',
    },
    {
      id: 3,
      title: 'Construction Site Supervisor',
      company: 'BuildRight Inc',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$65,000 - $80,000',
      description: 'Supervise construction crews, ensure safety protocols, read blueprints, and manage power tools on active building sites.',
      status: 'Active',
      createdAt: '2026-07-03',
    },
    {
      id: 4,
      title: 'Marketing Coordinator',
      company: 'GrowthLabs',
      location: 'Remote',
      type: 'Remote',
      salary: '$50,000 - $65,000',
      description: 'Manage social media campaigns, content marketing, SEO strategy, and client communication for B2B SaaS clients.',
      status: 'Active',
      createdAt: '2026-07-03',
    },
  ];

  try {
    const saved = localStorage.getItem('jobs');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) return parsed;
    }
    localStorage.setItem('jobs', JSON.stringify(defaultJobs));
    return defaultJobs;
  } catch {
    return defaultJobs;
  }
}

function scoreJobMatch(job, profileSkills) {
  const jobText = normalizeText(`${job.title} ${job.company} ${job.description} ${job.type}`);
  const skillNames = profileSkills.map((s) => s.name.toLowerCase());

  let matched = 0;
  const missingSkills = [];

  profileSkills.forEach((skill) => {
    const skillWords = skill.name.toLowerCase().split(/\s+/);
    const skillKeywords = SKILL_CATALOG.find((s) => s.name === skill.name)?.keywords || skillWords;
    const isMatch = skillKeywords.some((kw) => jobText.includes(kw)) || jobText.includes(skill.name.toLowerCase());

    if (isMatch) matched++;
    else missingSkills.push(skill.name);
  });

  const baseScore = profileSkills.length ? Math.round((matched / profileSkills.length) * 100) : 50;
  const titleBonus = skillNames.some((s) => jobText.includes(s)) ? 10 : 0;
  const matchPercentage = Math.min(98, Math.max(35, baseScore + titleBonus));

  return { matchPercentage, missingSkills: missingSkills.slice(0, 3) };
}

export function generateJobMatches(profile) {
  const jobs = getPlatformJobs();
  if (!jobs.length || !profile?.skills?.length) return [];

  return jobs
    .map((job) => {
      const { matchPercentage, missingSkills } = scoreJobMatch(job, profile.skills);
      return {
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        type: job.type,
        description: job.description,
        matchPercentage,
        missingSkills,
      };
    })
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 6);
}

export function generateSideHustles(profile) {
  if (!profile?.skills?.length) return [];

  const skillNames = profile.skills.map((s) => s.name);

  return SIDE_HUSTLE_TEMPLATES.filter((hustle) =>
    hustle.skills.some((s) => skillNames.includes(s))
  )
    .slice(0, 4)
    .map((hustle, index) => ({
      id: `hustle-${index + 1}`,
      title: hustle.title,
      platform: hustle.platform,
      earnings: hustle.earnings,
      timeCommitment: hustle.timeCommitment,
      skillsUsed: hustle.skills.filter((s) => skillNames.includes(s)),
      description: `Earn extra income using your ${hustle.skills.filter((s) => skillNames.includes(s)).join(' & ')} skills on ${hustle.platform}.`,
    }));
}

export function generateCareerPath(profile) {
  const sector = profile?.dominantSector || 'default';
  return CAREER_PATHS[sector] || CAREER_PATHS.default;
}

export function saveCandidateData(email, { profile, matchedJobs, sideHustles, careerPath }) {
  if (profile) localStorage.setItem(`profile_${email}`, JSON.stringify(profile));
  if (matchedJobs) localStorage.setItem(`jobs_${email}`, JSON.stringify(matchedJobs));
  if (sideHustles) localStorage.setItem(`hustles_${email}`, JSON.stringify(sideHustles));
  if (careerPath) localStorage.setItem(`careerPath_${email}`, JSON.stringify(careerPath));
}

export function generateAllMatches(profile) {
  const matchedJobs = generateJobMatches(profile);
  const sideHustles = generateSideHustles(profile);
  const careerPath = generateCareerPath(profile);
  return { matchedJobs, sideHustles, careerPath };
}

export function getApplications(email) {
  try {
    return JSON.parse(localStorage.getItem(`applications_${email}`) || '[]');
  } catch {
    return [];
  }
}

export function applyToJob(email, job) {
  const applications = getApplications(email);
  if (applications.some((a) => a.jobId === job.id)) return applications;

  const updated = [
    {
      jobId: job.id,
      title: job.title,
      company: job.company,
      appliedAt: new Date().toISOString(),
      status: 'Applied',
    },
    ...applications,
  ];
  localStorage.setItem(`applications_${email}`, JSON.stringify(updated));
  return updated;
}

export function getSavedHustles(email) {
  try {
    return JSON.parse(localStorage.getItem(`saved_hustles_${email}`) || '[]');
  } catch {
    return [];
  }
}

export function saveHustleInterest(email, hustle) {
  const saved = getSavedHustles(email);
  if (saved.some((h) => h.id === hustle.id)) return saved;

  const updated = [
    {
      id: hustle.id,
      title: hustle.title,
      platform: hustle.platform,
      savedAt: new Date().toISOString(),
    },
    ...saved,
  ];
  localStorage.setItem(`saved_hustles_${email}`, JSON.stringify(updated));
  return updated;
}

export function getApplicationStats(email) {
  const applications = getApplications(email);
  return {
    total: applications.length,
    recent: applications.slice(0, 3),
  };
}
