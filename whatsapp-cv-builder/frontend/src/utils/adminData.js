import { getPlatformJobs } from './placeholderJobs';

export function loadPlatformData() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const jobs = getPlatformJobs();

  const candidates = users.filter((u) => u.role === 'candidate');
  const employers = users.filter((u) => u.role === 'employer');
  const admins = users.filter((u) => u.role === 'admin');

  let onboardedCount = 0;
  let profilesCount = 0;
  users.forEach((u) => {
    if (localStorage.getItem(`onboarding_${u.email}`)) onboardedCount++;
    if (localStorage.getItem(`profile_${u.email}`)) profilesCount++;
  });

  const activeJobs = jobs.filter((j) => j.status === 'Active' || !j.status);

  const safeUsers = users.map(({ name, surname, email, role }) => ({
    name,
    surname,
    email,
    role,
    hasProfile: !!localStorage.getItem(`profile_${email}`),
    hasOnboarding: !!localStorage.getItem(`onboarding_${email}`),
  }));

  const recentActivity = [
    ...safeUsers.map((u) => ({
      id: `user-${u.email}`,
      type: 'user',
      text: `User registered: ${u.name} ${u.surname} (${u.role})`,
      time: null,
    })),
    ...jobs.map((j) => ({
      id: `job-${j.id}`,
      type: 'job',
      text: `Job posted: ${j.title} at ${j.company}`,
      time: j.createdAt || null,
    })),
  ].slice(0, 8);

  return {
    users: safeUsers,
    jobs,
    recentActivity,
    stats: {
      totalUsers: users.length,
      candidates: candidates.length,
      employers: employers.length,
      admins: admins.length,
      activeJobs: activeJobs.length,
      totalJobs: jobs.length,
      onboardedCandidates: onboardedCount,
      profilesCreated: profilesCount,
    },
  };
}

export function removeUser(email) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const updated = users.filter(
    (u) => u.email.toLowerCase() !== email.toLowerCase() || u.role === 'admin'
  );
  localStorage.setItem('users', JSON.stringify(updated));
}

export function removeJob(id) {
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  localStorage.setItem('jobs', JSON.stringify(jobs.filter((j) => j.id !== id)));
}
