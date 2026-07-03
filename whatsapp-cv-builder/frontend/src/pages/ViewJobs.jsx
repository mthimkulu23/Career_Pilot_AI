import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Plus, Trash2, MapPin, Calendar, DollarSign, Briefcase } from 'lucide-react';

const ViewJobs = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Read jobs from localStorage, prepopulate if empty
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      const defaultJobs = [
        {
          id: 1,
          title: 'Senior Frontend Engineer',
          company: 'Stripe',
          location: 'San Francisco, CA (Hybrid)',
          type: 'Full-time',
          salary: '$165,000 - $190,000',
          description: 'Looking for a product-minded engineer to lead frontend architecture for payments UI.',
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
          description: 'Shape the next generation of software tracking tools. Requires 5+ years of design systems experience.',
          status: 'Active',
          createdAt: '2026-07-02',
        },
      ];
      localStorage.setItem('jobs', JSON.stringify(defaultJobs));
      setJobs(defaultJobs);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  const getBadgeClass = (type) => {
    switch (type) {
      case 'Full-time': return 'badge-fulltime';
      case 'Remote': return 'badge-remote';
      case 'Contract': return 'badge-contract';
      default: return 'badge-other';
    }
  };

  return (
    <div className="view-jobs-wrapper animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Active Job Listings</h1>
        <p className="page-subtitle">Track, update, and manage candidate opportunities</p>
      </header>

      <div className="table-actions">
        <span className="results-count">{jobs.length} Listings Found</span>
        {user?.role === 'employer' && (
          <button onClick={() => navigate('/create-job')} className="btn btn-primary add-job-btn">
            <Plus size={18} />
            <span>Add New Job</span>
          </button>
        )}
      </div>

      {jobs.length === 0 ? (
        <div className="empty-state glass-card">
          <Briefcase size={48} className="empty-icon" />
          <h3>No Job Listings Found</h3>
          {user?.role === 'employer' ? (
            <>
              <p>Get started by creating your first job listing today.</p>
              <button onClick={() => navigate('/create-job')} className="btn btn-primary empty-btn">
                Create Job
              </button>
            </>
          ) : (
            <p>Check back later for new job opportunities.</p>
          )}
        </div>
      ) : (
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card glass-card">
              <div className="job-card-header">
                <div>
                  <h2 className="job-title">{job.title}</h2>
                  <span className="job-company">{job.company}</span>
                </div>
                <div className="job-meta-badges">
                  <span className={`badge ${getBadgeClass(job.type)}`}>
                    {job.type}
                  </span>
                  <span className="badge badge-success">
                    {job.status}
                  </span>
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-card-footer">
                <div className="job-meta-details">
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="meta-item">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>Added {job.createdAt}</span>
                  </div>
                </div>
                {user?.role === 'employer' && (
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="delete-job-btn"
                    title="Delete Listing"
                  >
                    <Trash2 size={18} />
                    <span>Delete</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .view-jobs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .page-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .page-title {
          font-size: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .table-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .results-count {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .add-job-btn {
          width: auto;
        }

        .jobs-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .job-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .job-company {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .job-meta-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge-fulltime {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .badge-remote {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .badge-contract {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .badge-other {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-glass);
        }

        .job-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .job-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
          margin-top: 0.25rem;
        }

        .job-meta-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .delete-job-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .delete-job-btn:hover {
          color: #f87171;
          background: rgba(244, 63, 94, 0.08);
        }

        /* Empty state styling */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          gap: 1rem;
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .empty-btn {
          width: auto;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .job-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .job-card-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
          }

          .job-meta-details {
            gap: 0.75rem 1.25rem;
          }

          .delete-job-btn {
            justify-content: center;
            border: 1px solid rgba(244, 63, 94, 0.2);
            color: #f87171;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewJobs;
