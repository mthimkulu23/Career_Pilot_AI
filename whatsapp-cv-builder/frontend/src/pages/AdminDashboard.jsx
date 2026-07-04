import React, { useCallback, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loadPlatformData, removeUser, removeJob } from '../utils/adminData';
import {
  Users,
  Briefcase,
  TrendingUp,
  Shield,
  Activity,
  ArrowRight,
  X,
  Trash2,
  UserCheck,
  Lock,
} from 'lucide-react';

const QUICK_ACTIONS = [
  { id: 'users', label: 'Manage Users', icon: Users },
  { id: 'jobs', label: 'Review Jobs', icon: Briefcase },
  { id: 'security', label: 'Security Settings', icon: Shield },
  { id: 'analytics', label: 'View Analytics', icon: Activity },
];

const roleBadgeClass = (role) => {
  switch (role) {
    case 'admin':
      return 'role-badge admin';
    case 'employer':
      return 'role-badge employer';
    default:
      return 'role-badge candidate';
  }
};

const AdminDashboard = () => {
  const { user } = useAuth();
  const [platformData, setPlatformData] = useState(() => loadPlatformData());
  const [activePanel, setActivePanel] = useState(null);

  const refreshData = useCallback(() => {
    setPlatformData(loadPlatformData());
  }, []);

  const togglePanel = (panelId) => {
    setActivePanel((prev) => (prev === panelId ? null : panelId));
  };

  const handleRemoveUser = (email) => {
    if (!window.confirm(`Remove user ${email}? This cannot be undone.`)) return;
    removeUser(email);
    refreshData();
  };

  const handleRemoveJob = (id) => {
    if (!window.confirm('Remove this job listing?')) return;
    removeJob(id);
    refreshData();
  };

  const { stats, users, jobs, recentActivity } = platformData;

  const renderPanelContent = () => {
    switch (activePanel) {
      case 'users':
        return (
          <div className="panel-content">
            <div className="panel-header">
              <h3>Registered Users</h3>
              <span className="panel-count">{users.length} total</span>
            </div>
            {users.length === 0 ? (
              <p className="panel-empty">No users registered yet.</p>
            ) : (
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Profile</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.email}>
                        <td>{u.name} {u.surname}</td>
                        <td>{u.email}</td>
                        <td><span className={roleBadgeClass(u.role)}>{u.role}</span></td>
                        <td>{u.hasProfile ? 'Complete' : u.hasOnboarding ? 'Onboarded' : '—'}</td>
                        <td>
                          {u.role !== 'admin' && (
                            <button
                              type="button"
                              className="icon-btn danger"
                              onClick={() => handleRemoveUser(u.email)}
                              title="Remove user"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'jobs':
        return (
          <div className="panel-content">
            <div className="panel-header">
              <h3>Job Listings</h3>
              <span className="panel-count">{jobs.length} total</span>
            </div>
            {jobs.length === 0 ? (
              <p className="panel-empty">No jobs posted yet.</p>
            ) : (
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Company</th>
                      <th>Location</th>
                      <th>Type</th>
                      <th>Salary</th>
                      <th>Status</th>
                      <th>Posted</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id}>
                        <td>{job.title}</td>
                        <td>{job.company}</td>
                        <td>{job.location}</td>
                        <td>{job.type}</td>
                        <td>{job.salary || '—'}</td>
                        <td><span className="status-badge">{job.status || 'Active'}</span></td>
                        <td>{job.createdAt || '—'}</td>
                        <td>
                          <button
                            type="button"
                            className="icon-btn danger"
                            onClick={() => handleRemoveJob(job.id)}
                            title="Remove job"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'security':
        return (
          <div className="panel-content">
            <div className="panel-header">
              <h3>Security Overview</h3>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <Lock size={20} />
                <div>
                  <p className="security-label">Admin Account</p>
                  <p className="security-value">{user?.email}</p>
                </div>
              </div>
              <div className="security-card">
                <Shield size={20} />
                <div>
                  <p className="security-label">Admin Accounts</p>
                  <p className="security-value">{stats.admins} protected</p>
                </div>
              </div>
              <div className="security-card">
                <Users size={20} />
                <div>
                  <p className="security-label">Total Accounts</p>
                  <p className="security-value">{stats.totalUsers} registered</p>
                </div>
              </div>
              <div className="security-card">
                <UserCheck size={20} />
                <div>
                  <p className="security-label">Role Distribution</p>
                  <p className="security-value">
                    {stats.candidates} candidates · {stats.employers} employers
                  </p>
                </div>
              </div>
            </div>
            <div className="security-notes">
              <h4>Platform Policies</h4>
              <ul>
                <li>Admin accounts cannot be created via registration.</li>
                <li>Admin accounts cannot be removed from the user list.</li>
                <li>User passwords are stored locally for this demo only.</li>
                <li>Session is managed via browser localStorage.</li>
              </ul>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="panel-content">
            <div className="panel-header">
              <h3>Platform Analytics</h3>
            </div>
            <div className="analytics-grid">
              <div className="analytics-card">
                <p className="analytics-label">Candidates</p>
                <p className="analytics-value">{stats.candidates}</p>
                <p className="analytics-meta">{stats.onboardedCandidates} onboarded</p>
              </div>
              <div className="analytics-card">
                <p className="analytics-label">Employers</p>
                <p className="analytics-value">{stats.employers}</p>
                <p className="analytics-meta">{stats.totalJobs} jobs posted</p>
              </div>
              <div className="analytics-card">
                <p className="analytics-label">Active Jobs</p>
                <p className="analytics-value">{stats.activeJobs}</p>
                <p className="analytics-meta">of {stats.totalJobs} total</p>
              </div>
              <div className="analytics-card">
                <p className="analytics-label">Profiles Created</p>
                <p className="analytics-value">{stats.profilesCreated}</p>
                <p className="analytics-meta">across all users</p>
              </div>
            </div>
            <div className="analytics-breakdown">
              <h4>User Breakdown</h4>
              <div className="breakdown-bars">
                <div className="breakdown-row">
                  <span>Candidates</span>
                  <div className="breakdown-bar-track">
                    <div
                      className="breakdown-bar fill-candidate"
                      style={{ width: stats.totalUsers ? `${(stats.candidates / stats.totalUsers) * 100}%` : '0%' }}
                    />
                  </div>
                  <span className="breakdown-count">{stats.candidates}</span>
                </div>
                <div className="breakdown-row">
                  <span>Employers</span>
                  <div className="breakdown-bar-track">
                    <div
                      className="breakdown-bar fill-employer"
                      style={{ width: stats.totalUsers ? `${(stats.employers / stats.totalUsers) * 100}%` : '0%' }}
                    />
                  </div>
                  <span className="breakdown-count">{stats.employers}</span>
                </div>
                <div className="breakdown-row">
                  <span>Admins</span>
                  <div className="breakdown-bar-track">
                    <div
                      className="breakdown-bar fill-admin"
                      style={{ width: stats.totalUsers ? `${(stats.admins / stats.totalUsers) * 100}%` : '0%' }}
                    />
                  </div>
                  <span className="breakdown-count">{stats.admins}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const activeAction = QUICK_ACTIONS.find((a) => a.id === activePanel);
  const ActiveIcon = activeAction?.icon;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Welcome, {user?.name}! Monitor platform insights and user activity</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Users size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.totalUsers}</h3>
            <p className="stat-label">Total Users</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Briefcase size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.activeJobs}</h3>
            <p className="stat-label">Active Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Activity size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.profilesCreated}</h3>
            <p className="stat-label">Profiles Created</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={32} /></div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.onboardedCandidates}</h3>
            <p className="stat-label">Onboarded Candidates</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Platform Overview</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-label">Candidates</div>
              <div className="overview-value">{stats.candidates}</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Employers</div>
              <div className="overview-value">{stats.employers}</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Jobs Posted</div>
              <div className="overview-value">{stats.totalJobs}</div>
            </div>
            <div className="overview-item">
              <div className="overview-label">Admins</div>
              <div className="overview-value">{stats.admins}</div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-grid">
            {QUICK_ACTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`action-card ${activePanel === id ? 'active' : ''}`}
                onClick={() => togglePanel(id)}
              >
                <Icon size={24} />
                <span>{label}</span>
                <ArrowRight size={16} className="action-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activePanel && (
        <div className="dashboard-sections">
          <div className="dashboard-section full-width data-panel">
            <div className="data-panel-toolbar">
              <h2 className="section-title panel-title">
                {ActiveIcon && <ActiveIcon size={20} />}
                {activeAction?.label}
              </h2>
              <button type="button" className="close-panel-btn" onClick={() => setActivePanel(null)}>
                <X size={18} />
                Close
              </button>
            </div>
            {renderPanelContent()}
          </div>
        </div>
      )}

      <div className="dashboard-sections">
        <div className="dashboard-section full-width">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.length === 0 ? (
              <p className="panel-empty">No activity recorded yet.</p>
            ) : (
              recentActivity.map((item) => (
                <div key={item.id} className="activity-item">
                  <div className="activity-icon">
                    {item.type === 'job' ? <Briefcase size={16} /> : <Users size={16} />}
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">{item.text}</p>
                    {item.time && <p className="activity-time">{item.time}</p>}
                  </div>
                </div>
              ))
            )}
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

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .overview-grid { grid-template-columns: 1fr; }
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

        .action-card:hover,
        .action-card.active {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child { color: var(--color-primary); }
        .action-arrow { margin-left: auto; color: var(--text-muted); }

        .data-panel { padding-top: 1rem; }

        .data-panel-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0;
        }

        .close-panel-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
        }

        .close-panel-btn:hover {
          color: var(--text-primary);
          border-color: var(--color-primary);
        }

        .panel-content { margin-top: 0.5rem; }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .panel-count {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .panel-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .data-table-wrapper { overflow-x: auto; }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .data-table th,
        .data-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-glass);
        }

        .data-table th {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .data-table td { color: var(--text-primary); }

        .role-badge {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .role-badge.admin { background: rgba(244, 63, 94, 0.15); color: #f87171; }
        .role-badge.employer { background: rgba(6, 182, 212, 0.15); color: #22d3ee; }
        .role-badge.candidate { background: rgba(99, 102, 241, 0.15); color: #818cf8; }

        .status-badge {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .icon-btn.danger:hover {
          color: #f87171;
          background: rgba(244, 63, 94, 0.1);
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .security-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
        }

        .security-card svg { color: var(--color-primary); flex-shrink: 0; margin-top: 0.125rem; }

        .security-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.25rem;
        }

        .security-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .security-notes h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem;
        }

        .security-notes ul {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.7;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .analytics-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .analytics-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem;
        }

        .analytics-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .analytics-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0.25rem 0 0;
        }

        .analytics-breakdown h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 1rem;
        }

        .breakdown-bars { display: flex; flex-direction: column; gap: 0.75rem; }

        .breakdown-row {
          display: grid;
          grid-template-columns: 90px 1fr 32px;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .breakdown-bar-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          overflow: hidden;
        }

        .breakdown-bar {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .fill-candidate { background: #818cf8; }
        .fill-employer { background: #22d3ee; }
        .fill-admin { background: #f87171; }

        .breakdown-count {
          text-align: right;
          font-weight: 600;
          color: var(--text-primary);
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

        .activity-text {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin: 0 0 0.25rem;
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
