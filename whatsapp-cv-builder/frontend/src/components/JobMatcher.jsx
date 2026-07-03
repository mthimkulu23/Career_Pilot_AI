import React from 'react';
import { Briefcase, DollarSign, TrendingUp, AlertCircle, Clock, MapPin } from 'lucide-react';

const JobMatcher = ({ matchedJobs, sideHustles, careerPath }) => {
  if (!matchedJobs && !sideHustles && !careerPath) {
    return (
      <div className="job-matcher-container empty-state">
        <div className="empty-content">
          <Briefcase size={48} />
          <h3>No Job Matches Yet</h3>
          <p>Complete your profile to see personalized job matches and opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <div className="job-matcher-container">
      {/* Matched Jobs Section */}
      {matchedJobs && matchedJobs.length > 0 && (
        <div className="matcher-section">
          <h3 className="section-title">
            <Briefcase size={20} />
            Matched Jobs For You
          </h3>
          <div className="jobs-list">
            {matchedJobs.map((job) => (
              <div key={job.id} className="job-card">
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
                {job.missingSkills && job.missingSkills.length > 0 && (
                  <div className="missing-skills">
                    <AlertCircle size={14} className="alert-icon" />
                    <span className="missing-text">
                      Missing: {job.missingSkills.join(', ')}
                    </span>
                  </div>
                )}
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Side Hustles Section */}
      {sideHustles && sideHustles.length > 0 && (
        <div className="matcher-section">
          <h3 className="section-title">
            <DollarSign size={20} />
            Gig Opportunities
          </h3>
          <div className="hustles-list">
            {sideHustles.map((hustle) => (
              <div key={hustle.id} className="hustle-card">
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
                  {hustle.skillsUsed && hustle.skillsUsed.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <button className="btn btn-secondary btn-sm">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5-Year Plan Section */}
      {careerPath && careerPath.length > 0 && (
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

      <style>{`
        .job-matcher-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .job-matcher-container {
            grid-template-columns: 1fr;
          }
        }

        .matcher-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .matcher-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-title svg {
          color: var(--color-primary);
        }

        .jobs-list,
        .hustles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .job-card,
        .hustle-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .job-card:hover,
        .hustle-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
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

        .match-percentage {
          font-weight: 700;
          font-size: 0.9rem;
          color: white;
        }

        .match-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .job-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .job-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .job-company {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0 0 0.75rem 0;
        }

        .job-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .job-detail svg {
          color: var(--color-primary);
        }

        .missing-skills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
        }

        .alert-icon {
          color: #f59e0b;
        }

        .missing-text {
          color: #f59e0b;
          font-size: 0.85rem;
        }

        .hustle-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .hustle-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .hustle-earnings {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .hustle-platform {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin: 0 0 0.5rem 0;
        }

        .hustle-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .hustle-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .hustle-detail svg {
          color: var(--color-primary);
        }

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

        .career-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
        }

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

        .timeline-content {
          flex: 1;
        }

        .timeline-year {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: var(--text-primary);
        }

        .timeline-salary {
          color: #10b981;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          width: 100%;
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

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
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

        .empty-content {
          text-align: center;
          color: var(--text-muted);
        }

        .empty-content svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .empty-content p {
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default JobMatcher;
