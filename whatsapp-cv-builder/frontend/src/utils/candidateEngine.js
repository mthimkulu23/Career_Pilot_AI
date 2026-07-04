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
  { title: 'Freelance Web Projects', platform: 'Upwork', earnings: 'R8,000–R35,000/mo', timeCommitment: '5–10 hrs/week', skills: ['JavaScript', 'UI/UX Design'] },
  { title: 'Weekend Construction Gigs', platform: 'TaskRabbit', earnings: 'R3,500–R10,000/weekend', timeCommitment: 'Weekends', skills: ['Power Tools', 'Blueprint Reading'] },
  { title: 'Online Tutoring', platform: 'Preply', earnings: 'R250–R650/hr', timeCommitment: '3–6 hrs/week', skills: ['Customer Service', 'Time Management'] },
  { title: 'Social Media Management', platform: 'Fiverr', earnings: 'R5,000–R25,000/mo', timeCommitment: '4–8 hrs/week', skills: ['Marketing', 'Customer Service'] },
  { title: 'Warehouse Shift Work', platform: 'Indeed Flex', earnings: 'R120–R180/hr', timeCommitment: 'Flexible shifts', skills: ['Forklift Operation', 'Safety Protocols'] },
  { title: 'Data Entry & Admin', platform: 'Remote.co', earnings: 'R90–R150/hr', timeCommitment: 'Part-time', skills: ['Accounting', 'Time Management'] },
  { title: 'UX Design Contracts', platform: 'Toptal', earnings: 'R800–R1,800/hr', timeCommitment: 'Project-based', skills: ['UI/UX Design', 'Project Management'] },
  { title: 'Cloud Consulting', platform: 'Contra', earnings: 'R950–R2,200/hr', timeCommitment: 'Evenings', skills: ['Cloud Computing', 'Python'] },
];

const CAREER_PATHS = {
  Technology: [
    { year: 'Year 1', title: 'Junior Developer', salary: 'R350k–R480k p.a.', icon: '💻' },
    { year: 'Year 2', title: 'Mid-Level Engineer', salary: 'R480k–R720k p.a.', icon: '🚀' },
    { year: 'Year 3', title: 'Senior Developer', salary: 'R720k–R950k p.a.', icon: '⭐' },
    { year: 'Year 4', title: 'Tech Lead', salary: 'R900k–R1.2m p.a.', icon: '🎯' },
    { year: 'Year 5', title: 'Engineering Manager', salary: 'R1.1m–R1.5m p.a.', icon: '👑' },
  ],
  'Construction & Trades': [
    { year: 'Year 1', title: 'Skilled Tradesperson', salary: 'R220k–R320k p.a.', icon: '🔧' },
    { year: 'Year 2', title: 'Site Supervisor', salary: 'R320k–R450k p.a.', icon: '📋' },
    { year: 'Year 3', title: 'Project Coordinator', salary: 'R400k–R550k p.a.', icon: '🏗️' },
    { year: 'Year 4', title: 'Construction Manager', salary: 'R550k–R750k p.a.', icon: '🎯' },
    { year: 'Year 5', title: 'Operations Director', salary: 'R750k–R950k p.a.', icon: '👑' },
  ],
  'Design & Creative': [
    { year: 'Year 1', title: 'Junior Designer', salary: 'R280k–R380k p.a.', icon: '🎨' },
    { year: 'Year 2', title: 'Product Designer', salary: 'R400k–R550k p.a.', icon: '✨' },
    { year: 'Year 3', title: 'Senior UX Designer', salary: 'R550k–R750k p.a.', icon: '⭐' },
    { year: 'Year 4', title: 'Design Lead', salary: 'R700k–R900k p.a.', icon: '🎯' },
    { year: 'Year 5', title: 'Head of Design', salary: 'R850k–R1.1m p.a.', icon: '👑' },
  ],
  'Business & Finance': [
    { year: 'Year 1', title: 'Analyst / Associate', salary: 'R300k–R420k p.a.', icon: '📊' },
    { year: 'Year 2', title: 'Account Manager', salary: 'R420k–R550k p.a.', icon: '🤝' },
    { year: 'Year 3', title: 'Senior Consultant', salary: 'R550k–R750k p.a.', icon: '⭐' },
    { year: 'Year 4', title: 'Department Lead', salary: 'R700k–R950k p.a.', icon: '🎯' },
    { year: 'Year 5', title: 'Director', salary: 'R900k–R1.2m p.a.', icon: '👑' },
  ],
  default: [
    { year: 'Year 1', title: 'Entry-Level Specialist', salary: 'R240k–R350k p.a.', icon: '🌱' },
    { year: 'Year 2', title: 'Experienced Professional', salary: 'R350k–R480k p.a.', icon: '📈' },
    { year: 'Year 3', title: 'Senior Specialist', salary: 'R480k–R650k p.a.', icon: '⭐' },
    { year: 'Year 4', title: 'Team Lead', salary: 'R600k–R800k p.a.', icon: '🎯' },
    { year: 'Year 5', title: 'Department Manager', salary: 'R750k–R1m p.a.', icon: '👑' },
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
  if (/salary|annual|yearly/.test(normalized)) return 'Annual salary (ZAR)';
  if (/gig|freelance/.test(normalized)) return 'Flexible / gig-based';
  return 'Competitive salary (ZAR)';
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
    preferredPayment: 'Competitive salary (ZAR)',
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

import { getPlatformJobs } from './placeholderJobs';

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
