import React, { useState } from 'react';
import {
  Briefcase,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Clock,
  MapPin,
  CheckCircle,
  X,
  ExternalLink,
  Send,
} from 'lucide-react';
import { applyToJob, saveHustleInterest, getSavedHustles } from '../utils/candidateEngine';

const JobMatcher = ({
  userEmail,
  matchedJobs,
  sideHustles,
  careerPath,
  applications,
  onApplicationsChange,
  onRefreshMatches,
  hasProfile,
}) => {
  const [selectedHustle, setSelectedHustle] = useState(null);
  const [savedHustles, setSavedHustles] = useState(() => getSavedHustles(userEmail));
  const [expandedJob, setExpandedJob] = useState(null);

  const appliedJobIds = new Set(applications.map((a) => a.jobId));

  const handleApply = (job) => {
    if (!userEmail || appliedJobIds.has(job.id)) return;
    const updated = applyToJob(userEmail, job);
    onApplicationsChange(updated);
  };

  const handleSaveHustle = (hustle) => {
    if (!userEmail) return;
    const updated = saveHustleInterest(userEmail, hustle);
    setSavedHustles(updated);
    setSelectedHustle(null);
  };

  const savedHustleIds = new Set(savedHustles.map((h) => h.id));

  if (!hasProfile) {
    return (
      <div className="job-matcher-container empty-state">
        <div className="empty-content">
          <Briefcase size={48} />
          <h3>No Profile Yet</h3>
          <p>Complete onboarding to see personalized job matches and opportunities</p>
        </div>
      </div>
    );
  }

  const hasMatches = matchedJobs?.length > 0 || sideHustles?.length > 0 || careerPath?.length > 0;

  if (!hasMatches) {
    return (
      <div className="job-matcher-container empty-state">
        <div className="empty-content">
          <Briefcase size={48} />
          <h3>No Job Matches Yet</h3>
          <p>No platform jobs found to match against. Ask an employer to post jobs, then refresh.</p>
          <button type="button" className="btn btn-primary btn-sm refresh-empty-btn" onClick={onRefreshMatches}>
            Refresh Matches
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="job-matcher-container">
      {applications.length > 0 && (
        <div className="matcher-section full-width applications-section">
          <h3 className="section-title">
            <Send size={20} />
            Your Applications ({applications.length})
          </h3>
          <div className="applications-list">
            {applications.map((app) => (
              <div key={app.jobId} className="application-item">
                <div className="application-info">
                  <span className="application-title">{app.title}</span>
                  <span className="application-company">{app.company}</span>
                </div>
                <div className="application-meta">
                  <span className="application-status">{app.status}</span>
                  <span className="application-date">
                    {new Date(app.appliedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {matchedJobs?.length > 0 && (
        <div className="matcher-section">
          <h3 className="section-title">
            <Briefcase size={20} />
            Matched Jobs For You
          </h3>
          <div className="jobs-list">
            {matchedJobs.map((job) => {
              const isApplied = appliedJobIds.has(job.id);
              const isExpanded = expandedJob === job.id;

              return (
                <div key={job.id} className={`job-card ${isApplied ? 'applied' : ''}`}>
                  <div className="job-header">
                    <div className="job-match-badge">
                      <span className="match-percentage">{job.matchPercentage}%</span>
                      <span className="match-label">Match</span>
                    </div>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <h4 className="job-title">{job.title}</h4>
                  <p className="job-company">{job.company}</p>
                  <div className="job-details">
                    <span className="job-detail">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="job-detail">
                      <DollarSign size={14} />
                      {job.salary}
                    </span>
                  </div>
                  {job.missingSkills?.length > 0 && (
                    <div className="missing-skills">
                      <AlertCircle size={14} className="alert-icon" />
                      <span className="missing-text">
                        Skills to develop: {job.missingSkills.join(', ')}
                      </span>
                    </div>
                  )}
                  {isExpanded && job.description && (
                    <p className="job-description">{job.description}</p>
                  )}
                  <div className="job-actions">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    >
                      {isExpanded ? 'Hide Details' : 'View Details'}
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${isApplied ? 'btn-applied' : 'btn-primary'}`}
                      onClick={() => handleApply(job)}
                      disabled={isApplied}
                    >
                      {isApplied ? (
                        <>
                          <CheckCircle size={14} />
                          Applied
                        </>
                      ) : (
                        'Apply Now'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {sideHustles?.length > 0 && (
        <div className="matcher-section">
          <h3 className="section-title">
            <DollarSign size={20} />
            Gig Opportunities
          </h3>
          <div className="hustles-list">
            {sideHustles.map((hustle) => {
              const isSaved = savedHustleIds.has(hustle.id);
              return (
                <div key={hustle.id} className={`hustle-card ${isSaved ? 'saved' : ''}`}>
                  <div className="hustle-header">
                    <h4 className="hustle-title">{hustle.title}</h4>
                    <span className="hustle-earnings">{hustle.earnings}</span>
                  </div>
                  <p className="hustle-platform">via {hustle.platform}</p>
                  <div className="hustle-details">
                    <span className="hustle-detail">
                      <Clock size={14} />
                      {hustle.timeCommitment}
                    </span>
                  </div>
                  <div className="hustle-skills">
                    {hustle.skillsUsed?.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`btn btn-sm ${isSaved ? 'btn-applied' : 'btn-secondary'}`}
                    onClick={() => setSelectedHustle(hustle)}
                  >
                    {isSaved ? (
                      <>
                        <CheckCircle size={14} />
                        Saved
                      </>
                    ) : (
                      'Learn More'
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {careerPath?.length > 0 && (
        <div className="matcher-section full-width">
          <h3 className="section-title">
            <TrendingUp size={20} />
            Your 5-Year Career Path
          </h3>
          <div className="career-timeline">
            {careerPath.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon">{step.icon}</span>
                  {index < careerPath.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{step.year}</span>
                  <h4 className="timeline-title">{step.title}</h4>
                  <span className="timeline-salary">{step.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedHustle && (
        <div
          className="hustle-modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setSelectedHustle(null)}
        >
          <div className="hustle-modal">
            <div className="modal-header">
              <h3>{selectedHustle.title}</h3>
              <button type="button" className="modal-close" onClick={() => setSelectedHustle(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-detail-row">
                <span className="modal-label">Platform</span>
                <span>{selectedHustle.platform}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-label">Earnings</span>
                <span className="earnings-highlight">{selectedHustle.earnings}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-label">Time Commitment</span>
                <span>{selectedHustle.timeCommitment}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-label">Skills Used</span>
                <div className="hustle-skills">
                  {selectedHustle.skillsUsed?.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              {selectedHustle.description && (
                <p className="modal-description">{selectedHustle.description}</p>
              )}
            </div>
            <div className="modal-actions">
              {!savedHustleIds.has(selectedHustle.id) && (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleSaveHustle(selectedHustle)}
                >
                  <ExternalLink size={14} />
                  Save Interest
                </button>
              )}
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedHustle(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .job-matcher-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .job-matcher-container { grid-template-columns: 1fr; }
        }

        .matcher-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .matcher-section.full-width { grid-column: 1 / -1; }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-title svg { color: var(--color-primary); }

        .jobs-list, .hustles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .job-card, .hustle-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .job-card:hover, .hustle-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .job-card.applied, .hustle-card.saved {
          border-color: rgba(16, 185, 129, 0.3);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .job-match-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        .match-percentage { font-weight: 700; font-size: 0.9rem; color: white; }
        .match-label { font-size: 0.75rem; color: rgba(255, 255, 255, 0.9); }

        .job-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .job-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.5rem; color: var(--text-primary); }
        .job-company { color: var(--text-secondary); font-size: 0.9rem; margin: 0 0 0.75rem; }

        .job-details { display: flex; gap: 1rem; margin-bottom: 0.75rem; flex-wrap: wrap; }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .job-detail svg { color: var(--color-primary); }

        .job-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0 0 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-sm);
        }

        .missing-skills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.75rem;
        }

        .alert-icon { color: #f59e0b; }
        .missing-text { color: #f59e0b; font-size: 0.85rem; }

        .job-actions {
          display: flex;
          gap: 0.5rem;
        }

        .hustle-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .hustle-title { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .hustle-earnings {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .hustle-platform { color: var(--text-secondary); font-size: 0.85rem; margin: 0 0 0.5rem; }
        .hustle-details { display: flex; gap: 1rem; margin-bottom: 0.75rem; }

        .hustle-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .hustle-detail svg { color: var(--color-primary); }

        .hustle-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .applications-list { display: flex; flex-direction: column; gap: 0.75rem; }

        .application-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          gap: 1rem;
        }

        .application-info { display: flex; flex-direction: column; gap: 0.125rem; }
        .application-title { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
        .application-company { color: var(--text-secondary); font-size: 0.8rem; }
        .application-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.125rem; }

        .application-status {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 0.15rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .application-date { color: var(--text-muted); font-size: 0.75rem; }

        .career-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .timeline-item { display: flex; gap: 1rem; }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .timeline-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(180deg, var(--color-primary) 0%, transparent 100%);
          margin: 0.5rem 0;
        }

        .timeline-year { color: var(--text-muted); font-size: 0.8rem; font-weight: 600; margin-bottom: 0.25rem; }
        .timeline-title { font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--text-primary); }
        .timeline-salary { color: #10b981; font-weight: 700; font-size: 0.9rem; }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          flex: 1;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }

        .btn-applied {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: default;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          grid-column: 1 / -1;
        }

        .empty-content { text-align: center; color: var(--text-muted); }
        .empty-content svg { margin-bottom: 1rem; opacity: 0.5; }
        .empty-content h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-secondary); }
        .empty-content p { font-size: 0.9rem; margin: 0 0 1rem; max-width: 360px; }

        .refresh-empty-btn { margin: 0 auto; max-width: 200px; }

        .hustle-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .hustle-modal {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          max-width: 480px;
          width: 100%;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .modal-header h3 { margin: 0; font-size: 1.15rem; color: var(--text-primary); }

        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .modal-body { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem; }

        .modal-detail-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .modal-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .earnings-highlight { color: #34d399; font-weight: 700; }

        .modal-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0 0;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default JobMatcher;
