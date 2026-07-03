import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FileText, TrendingUp, ArrowRight, BookOpen } from 'lucide-react';


const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    cvCount: 2,
    applicationsSubmitted: 4,
  });


  useEffect(() => {
  }, []);


  const tips = [
    "Tailor your CV's keywords to match the specific job listing for better recruiter match rates.",
    "Keep your resume to 2 pages maximum. Focus on recent results and metrics over descriptions.",
    "Quantify your accomplishments (e.g. 'Boosted sales by 20%' instead of 'Responsible for sales').",
  ];

  const randomTip = tips[new Date().getDay() % tips.length];

  return (
    <div className="dashboard-wrapper animate-fade-in">
      <header className="dashboard-header">
        <div>
          <h1 className="welcome-text">
            Welcome back, <span className="highlight-text">{user?.name} {user?.surname}</span>
          </h1>
          <p className="welcome-sub">Here is what is happening with your career progress today.</p>
        </div>
      </header>


      {/* Stats Cards Section */}
      <section className="stats-grid">
        <div className="stat-card glass-card">
          <div className="stat-icon-wrapper purple">
            <FileText size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">AI CVs Generated</span>
            <h2 className="stat-value">{stats.cvCount}</h2>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon-wrapper green">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Applications Submitted</span>
            <h2 className="stat-value">{stats.applicationsSubmitted}</h2>
          </div>
        </div>
      </section>


      {/* Main Grid Options */}
      <div className="dashboard-grid">
        <div className="grid-main glass-card">
          <h3 className="section-title">Quick Actions</h3>
          <div className="actions-list">
            <Link to="/view-jobs" className="action-row">
              <div className="action-meta">
                <h4 className="action-title">View and manage jobs list</h4>
                <p className="action-description">Browse active careers, track application status, and review details.</p>
              </div>
              <ArrowRight size={20} className="action-arrow" />
            </Link>
          </div>
        </div>


        <div className="grid-sidebar glass-card">
          <div className="sidebar-header">
            <BookOpen size={20} className="sidebar-icon" />
            <h3 className="sidebar-title">Daily Career Tip</h3>
          </div>
          <p className="tip-content">"{randomTip}"</p>
          <div className="badge badge-success tip-badge">PRO TIP</div>
        </div>
      </div>

      <style>{`
        .dashboard-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .welcome-text {
          font-size: 2.25rem;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .welcome-sub {
          color: var(--text-secondary);
          font-size: 1rem;
        }



        /* Stats grid styling */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.75rem 2rem;
        }

        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
        }

        .stat-icon-wrapper.purple {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .stat-icon-wrapper.blue {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .stat-icon-wrapper.green {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        /* Main Dashboard layouts */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .create-job-btn {
            width: 100%;
          }
        }

        .section-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 0.75rem;
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .action-row:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateX(4px);
        }

        .action-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .action-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .action-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .action-arrow {
          color: var(--text-muted);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .action-row:hover .action-arrow {
          color: var(--color-primary);
          transform: translateX(2px);
        }

        /* Sidebar styling */
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        .sidebar-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .tip-content {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.25rem;
        }

        .tip-badge {
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
