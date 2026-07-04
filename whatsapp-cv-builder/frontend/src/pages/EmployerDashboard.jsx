import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getPlatformJobs } from '../utils/placeholderJobs';
import { Briefcase, Users, FileText, TrendingUp, Plus, ArrowRight, MapPin, Banknote } from 'lucide-react';

const PLACEHOLDER_APPLICANTS = [
  { name: 'Thabo Mokoena', job: 'Senior Frontend Engineer', time: '2 hours ago', badge: 'New' },
  { name: 'Lerato Ndlovu', job: 'Lead UX Designer', time: '5 hours ago', badge: null },
  { name: 'Sipho Dlamini', job: 'Full Stack Developer', time: '1 day ago', badge: 'Hot' },
  { name: 'Nomsa Khumalo', job: 'Digital Marketing Specialist', time: '1 day ago', badge: null },
  { name: 'James van der Merwe', job: 'DevOps Engineer', time: '2 days ago', badge: null },
];

const EmployerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const jobs = useMemo(() => getPlatformJobs(), []);
  const activeJobs = jobs.filter((j) => j.status === 'Active' || !j.status);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
        <p className="dashboard-subtitle">Manage your job postings and find top talent across South Africa</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Briefcase size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{activeJobs.length}</h3>
            <p className="stat-label">Active Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Users size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{PLACEHOLDER_APPLICANTS.length * 12}</h3>
            <p className="stat-label">Total Applicants</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FileText size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{PLACEHOLDER_APPLICANTS.length}</h3>
            <p className="stat-label">New Applications</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">92%</h3>
            <p className="stat-label">Response Rate</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-grid">
            <button type="button" className="action-card" onClick={() => navigate('/create-job')}>
              <Plus size={24} />
              <span>Post New Job</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button type="button" className="action-card" onClick={() => navigate('/view-jobs')}>
              <Briefcase size={24} />
              <span>Manage Jobs</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button type="button" className="action-card" onClick={() => navigate('/view-jobs')}>
              <Users size={24} />
              <span>View Applicants</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button type="button" className="action-card" onClick={() => navigate('/create-job')}>
              <FileText size={24} />
              <span>Job Templates</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">Recent Applications</h2>
          <div className="applicant-list">
            {PLACEHOLDER_APPLICANTS.map((applicant) => (
              <div key={applicant.name} className="applicant-card">
                <div className="applicant-header">
                  <h3 className="applicant-name">{applicant.name}</h3>
                  {applicant.badge && <span className="applicant-badge">{applicant.badge}</span>}
                </div>
                <p className="applicant-position">Applied for: {applicant.job}</p>
                <p className="applicant-time">{applicant.time}</p>
                <div className="applicant-actions">
                  <button type="button" className="btn btn-primary btn-sm">View Profile</button>
                  <button type="button" className="btn btn-secondary btn-sm">Message</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section full-width">
          <h2 className="section-title">Active Job Listings ({activeJobs.length})</h2>
          <div className="jobs-grid">
            {activeJobs.map((job) => (
              <div key={job.id} className="job-listing-card">
                <div className="job-listing-header">
                  <h3 className="job-listing-title">{job.title}</h3>
                  <span className="job-listing-type">{job.type}</span>
                </div>
                <p className="job-listing-company">{job.company}</p>
                <div className="job-listing-meta">
                  <span><MapPin size={14} /> {job.location}</span>
                  <span><Banknote size={14} /> {job.salary}</span>
                </div>
                <p className="job-listing-desc">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header { margin-bottom: 2rem; }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle { color: var(--text-secondary); font-size: 1rem; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform var(--transition-fast);
        }

        .stat-card:hover { transform: translateY(-4px); }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        .stat-label { color: var(--text-secondary); font-size: 0.875rem; margin: 0; }

        .dashboard-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .dashboard-sections { grid-template-columns: 1fr; }
        }

        .dashboard-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .dashboard-section.full-width { grid-column: 1 / -1; }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .action-grid { grid-template-columns: 1fr; }
        }

        .action-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .action-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child { color: var(--color-primary); }
        .action-arrow { margin-left: auto; color: var(--text-muted); }

        .applicant-list { display: flex; flex-direction: column; gap: 1rem; max-height: 420px; overflow-y: auto; }

        .applicant-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .applicant-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .applicant-name { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .applicant-badge {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .applicant-position { color: var(--text-secondary); font-size: 0.875rem; margin: 0 0 0.25rem; }
        .applicant-time { color: var(--text-muted); font-size: 0.8rem; margin: 0 0 0.75rem; }
        .applicant-actions { display: flex; gap: 0.5rem; }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          max-height: 520px;
          overflow-y: auto;
        }

        .job-listing-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .job-listing-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .job-listing-title { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .job-listing-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .job-listing-company { color: var(--text-secondary); font-size: 0.875rem; margin: 0 0 0.75rem; }

        .job-listing-meta {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .job-listing-meta span {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .job-listing-meta svg { color: var(--color-primary); }

        .job-listing-desc {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-sm { padding: 0.5rem 1rem; font-size: 0.875rem; }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }
      `}</style>
    </div>
  );
};

export default EmployerDashboard;
