import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, Briefcase, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';

const CandidateDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
        <p className="dashboard-subtitle">Find your dream job and build your career</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Briefcase size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">12</h3>
            <p className="stat-label">Jobs Applied</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Search size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">45</h3>
            <p className="stat-label">Jobs Viewed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">3</h3>
            <p className="stat-label">Saved Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">85%</h3>
            <p className="stat-label">Profile Complete</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-grid">
            <button className="action-card">
              <Search size={24} />
              <span>Search Jobs</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Briefcase size={24} />
              <span>My Applications</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <BookOpen size={24} />
              <span>Saved Jobs</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <TrendingUp size={24} />
              <span>Update Profile</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">Recent Job Matches</h2>
          <div className="job-list">
            <div className="job-card">
              <div className="job-header">
                <h3 className="job-title">Senior Frontend Developer</h3>
                <span className="job-badge">New</span>
              </div>
              <p className="job-company">TechCorp Inc.</p>
              <p className="job-location">San Francisco, CA</p>
              <button className="btn btn-primary btn-sm">Apply Now</button>
            </div>
            <div className="job-card">
              <div className="job-header">
                <h3 className="job-title">UX Designer</h3>
                <span className="job-badge">Hot</span>
              </div>
              <p className="job-company">DesignHub</p>
              <p className="job-location">Remote</p>
              <button className="btn btn-primary btn-sm">Apply Now</button>
            </div>
            <div className="job-card">
              <div className="job-header">
                <h3 className="job-title">Product Manager</h3>
              </div>
              <p className="job-company">InnovateTech</p>
              <p className="job-location">New York, NY</p>
              <button className="btn btn-primary btn-sm">Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

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

        .stat-card:hover {
          transform: translateY(-4px);
        }

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

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .dashboard-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .dashboard-sections {
            grid-template-columns: 1fr;
          }
        }

        .dashboard-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

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
          .action-grid {
            grid-template-columns: 1fr;
          }
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

        .action-card svg:first-child {
          color: var(--color-primary);
        }

        .action-arrow {
          margin-left: auto;
          color: var(--text-muted);
        }

        .job-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .job-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .job-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .job-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .job-badge {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .job-company {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0 0 0.25rem 0;
        }

        .job-location {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0 0 0.75rem 0;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default CandidateDashboard;
