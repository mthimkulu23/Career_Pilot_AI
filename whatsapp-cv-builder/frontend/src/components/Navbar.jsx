import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, PlusCircle, Briefcase, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">CareerPilot<span className="logo-accent">AI</span></span>
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/create-job"
            className={`nav-link ${isActive('/create-job') ? 'active' : ''}`}
          >
            <PlusCircle size={18} />
            <span>Create Job</span>
          </Link>
          <Link
            to="/view-jobs"
            className={`nav-link ${isActive('/view-jobs') ? 'active' : ''}`}
          >
            <Briefcase size={18} />
            <span>View Jobs</span>
          </Link>
        </div>

        {user && (
          <div className="navbar-user-section">
            <div className="user-profile">
              <div className="user-avatar">
                <User size={16} />
              </div>
              <span className="user-name">{user.name} {user.surname}</span>
            </div>
            <button onClick={logout} className="logout-btn" title="Sign Out">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 15, 25, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-glass);
          padding: 0.75rem 1.5rem;
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .logo-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--text-primary);
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .navbar-user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid var(--border-glass);
        }

        .user-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
        }

        .user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: 1px solid rgba(244, 63, 94, 0.2);
          color: #f87171;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .logout-btn:hover {
          background: rgba(244, 63, 94, 0.1);
          color: #fda4af;
          border-color: rgba(244, 63, 94, 0.4);
        }

        @media (max-width: 768px) {
          .navbar-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          
          .navbar-links {
            justify-content: center;
          }

          .navbar-user-section {
            justify-content: space-between;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
