import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Briefcase, Users, FileText, TrendingUp, Plus, ArrowRight } from 'lucide-react';

const EmployerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
        <p className="dashboard-subtitle">Manage your job postings and find top talent</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Briefcase size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">8</h3>
            <p className="stat-label">Active Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">156</h3>
            <p className="stat-label">Total Applicants</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">24</h3>
            <p className="stat-label">New Applications</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={32} />
          </div>
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
            <button className="action-card">
              <Plus size={24} />
              <span>Post New Job</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Briefcase size={24} />
              <span>Manage Jobs</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Users size={24} />
              <span>View Applicants</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <FileText size={24} />
              <span>Job Templates</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">Recent Applications</h2>
          <div className="applicant-list">
            <div className="applicant-card">
              <div className="applicant-header">
                <h3 className="applicant-name">John Smith</h3>
                <span className="applicant-badge">New</span>
              </div>
              <p className="applicant-position">Applied for: Senior Frontend Developer</p>
              <p className="applicant-time">2 hours ago</p>
              <div className="applicant-actions">
                <button className="btn btn-primary btn-sm">View Profile</button>
                <button className="btn btn-secondary btn-sm">Message</button>
              </div>
            </div>
            <div className="applicant-card">
              <div className="applicant-header">
                <h3 className="applicant-name">Sarah Johnson</h3>
              </div>
              <p className="applicant-position">Applied for: UX Designer</p>
              <p className="applicant-time">5 hours ago</p>
              <div className="applicant-actions">
                <button className="btn btn-primary btn-sm">View Profile</button>
                <button className="btn btn-secondary btn-sm">Message</button>
              </div>
            </div>
            <div className="applicant-card">
              <div className="applicant-header">
                <h3 className="applicant-name">Michael Chen</h3>
                <span className="applicant-badge">Hot</span>
              </div>
              <p className="applicant-position">Applied for: Product Manager</p>
              <p className="applicant-time">1 day ago</p>
              <div className="applicant-actions">
                <button className="btn btn-primary btn-sm">View Profile</button>
                <button className="btn btn-secondary btn-sm">Message</button>
              </div>
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

        .applicant-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .applicant-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .applicant-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .applicant-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .applicant-name {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .applicant-badge {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .applicant-position {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0 0 0.25rem 0;
        }

        .applicant-time {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0 0 0.75rem 0;
        }

        .applicant-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};

export default EmployerDashboard;
