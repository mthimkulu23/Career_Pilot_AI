import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, Briefcase, TrendingUp, Shield, Activity, ArrowRight } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Welcome, {user?.name}! Monitor platform insights and user activity</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">1,247</h3>
            <p className="stat-label">Total Users</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Briefcase size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">342</h3>
            <p className="stat-label">Active Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Activity size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">89</h3>
            <p className="stat-label">Daily Active Users</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={32} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">+23%</h3>
            <p className="stat-label">Growth Rate</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Platform Overview</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-label">Candidates</div>
              <div className="overview-value">856</div>
              <div className="overview-change positive">+12%</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Employers</div>
              <div className="overview-value">391</div>
              <div className="overview-change positive">+8%</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Jobs Posted</div>
              <div className="overview-value">1,892</div>
              <div className="overview-change positive">+15%</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Applications</div>
              <div className="overview-value">4,567</div>
              <div className="overview-change positive">+22%</div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-grid">
            <button className="action-card">
              <Users size={24} />
              <span>Manage Users</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Briefcase size={24} />
              <span>Review Jobs</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Shield size={24} />
              <span>Security Settings</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
            <button className="action-card">
              <Activity size={24} />
              <span>View Analytics</span>
              <ArrowRight size={16} className="action-arrow" />
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section full-width">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <Users size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">New user registration: Jane Doe (Candidate)</p>
                <p className="activity-time">5 minutes ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Briefcase size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">New job posted: Senior Developer at TechCorp</p>
                <p className="activity-time">15 minutes ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Shield size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">Security alert: Multiple failed login attempts</p>
                <p className="activity-time">1 hour ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Users size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">Employer account approved: InnovateTech</p>
                <p className="activity-time">2 hours ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Activity size={16} />
              </div>
              <div className="activity-content">
                <p className="activity-text">System backup completed successfully</p>
                <p className="activity-time">3 hours ago</p>
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
          margin-bottom: 2rem;
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

        .dashboard-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        .overview-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
          text-align: center;
        }

        .overview-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .overview-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .overview-change {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .overview-change.positive {
          color: #10b981;
        }

        .overview-change.negative {
          color: #ef4444;
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

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-text {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin: 0 0 0.25rem 0;
        }

        .activity-time {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
