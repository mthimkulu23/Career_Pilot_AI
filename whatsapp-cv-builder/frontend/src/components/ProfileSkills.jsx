import React, { useState } from 'react';
import { Award, Target, Briefcase, Zap, Upload, FileText, X } from 'lucide-react';

const ProfileSkills = ({ profile, onUpdateProfile }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateMethod, setUpdateMethod] = useState('');
  const [file, setFile] = useState(null);
  const [rawText, setRawText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    }
  };

  const handleUpdateSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const updatedData = {
        method: updateMethod,
        file: file,
        rawText: rawText
      };
      onUpdateProfile(updatedData);
      setIsSubmitting(false);
      setShowUpdateModal(false);
      setFile(null);
      setRawText('');
      setUpdateMethod('');
    }, 1500);
  };

  if (!profile) {
    return (
      <div className="profile-skills-container empty-state">
        <div className="empty-content">
          <Award size={48} />
          <h3>No Profile Data</h3>
          <p>Complete the onboarding to see your profile and skills</p>
        </div>
      </div>
    );
  }

  const displayProfile = profile;

  return (
    <div className="profile-skills-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <span className="avatar-initials">{displayProfile.name.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{displayProfile.name}</h2>
          <p className="profile-experience">{displayProfile.experience}</p>
        </div>
        <button 
          className="update-profile-btn"
          onClick={() => setShowUpdateModal(true)}
          title="Update Profile"
        >
          <Upload size={18} />
          <span>Update CV</span>
        </button>
      </div>

      <div className="profile-highlights">
        <div className="highlight-card">
          <div className="highlight-icon">
            <Target size={24} />
          </div>
          <div className="highlight-content">
            <p className="highlight-label">Dominant Sector</p>
            <h3 className="highlight-value">{displayProfile.dominantSector}</h3>
          </div>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">
            <Briefcase size={24} />
          </div>
          <div className="highlight-content">
            <p className="highlight-label">Work Style</p>
            <h3 className="highlight-value">{displayProfile.workStyle}</h3>
          </div>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">
            <Zap size={24} />
          </div>
          <div className="highlight-content">
            <p className="highlight-label">Payment Preference</p>
            <h3 className="highlight-value">{displayProfile.preferredPayment}</h3>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3 className="section-title">
          <Award size={20} />
          Your Discovered Skills
        </h3>
        <div className="skills-grid">
          {displayProfile.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .profile-skills-container {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
        }

        .profile-info h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .profile-experience {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .profile-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .highlight-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .highlight-label {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0 0 0.25rem 0;
        }

        .highlight-value {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .skills-section {
          margin-top: 2rem;
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

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .skill-percentage {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: 9999px;
          transition: width 0.5s ease;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }

          .profile-highlights {
            grid-template-columns: 1fr;
          }
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
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

        .update-profile-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .update-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
          .update-profile-btn {
            margin-left: 0;
            margin-top: 1rem;
            width: 100%;
            justify-content: center;
          }

          .profile-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .update-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .update-modal {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .update-method-selection {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .update-method-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .update-method-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .update-method-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .update-method-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .update-method-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .update-method-description {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .update-upload-area {
          margin-bottom: 1.5rem;
        }

        .update-file-input {
          display: none;
        }

        .update-upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          border: 2px dashed var(--border-glass);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          background: rgba(255, 255, 255, 0.02);
        }

        .update-upload-label:hover {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .update-upload-label svg {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .update-text-area {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.9rem;
          line-height: 1.5;
          resize: vertical;
          font-family: inherit;
          min-height: 120px;
        }

        .update-text-area:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .update-text-area::placeholder {
          color: var(--text-muted);
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .modal-btn-cancel {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-btn-cancel:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .modal-btn-submit {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .modal-btn-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      {showUpdateModal && (
        <div className="update-modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowUpdateModal(false)}>
          <div className="update-modal">
            <div className="modal-header">
              <h3 className="modal-title">Update Your Profile</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setShowUpdateModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            {!updateMethod ? (
              <div className="update-method-selection">
                <div
                  className={`update-method-card ${updateMethod === 'upload' ? 'selected' : ''}`}
                  onClick={() => setUpdateMethod('upload')}
                >
                  <div className="update-method-icon">
                    <Upload size={24} />
                  </div>
                  <h4 className="update-method-title">Upload New CV</h4>
                  <p className="update-method-description">Replace your current CV with a new PDF</p>
                </div>

                <div
                  className={`update-method-card ${updateMethod === 'text' ? 'selected' : ''}`}
                  onClick={() => setUpdateMethod('text')}
                >
                  <div className="update-method-icon">
                    <FileText size={24} />
                  </div>
                  <h4 className="update-method-title">Update Experience</h4>
                  <p className="update-method-description">Add new skills and experience details</p>
                </div>
              </div>
            ) : (
              <>
                {updateMethod === 'upload' && (
                  <div className="update-upload-area">
                    <input
                      type="file"
                      id="update-cv-upload"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="update-file-input"
                    />
                    <label htmlFor="update-cv-upload" className="update-upload-label">
                      <Upload size={32} />
                      <p style={{ margin: '0.5rem 0 0.25rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                        {file ? file.name : 'Click to upload new CV'}
                      </p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        PDF files only (max 5MB)
                      </p>
                    </label>
                  </div>
                )}

                {updateMethod === 'text' && (
                  <div className="update-upload-area">
                    <textarea
                      className="update-text-area"
                      placeholder="Add new skills, experience, or update your current role description..."
                      value={rawText}
                      onChange={(e) => setRawText(e.target.value)}
                      rows={5}
                    />
                  </div>
                )}

                <div className="modal-actions">
                  <button
                    className="modal-btn-cancel"
                    onClick={() => {
                      setUpdateMethod('');
                      setFile(null);
                      setRawText('');
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="modal-btn-submit"
                    onClick={handleUpdateSubmit}
                    disabled={isSubmitting || (updateMethod === 'upload' && !file) || (updateMethod === 'text' && !rawText.trim())}
                  >
                    {isSubmitting ? 'Updating...' : 'Update Profile'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSkills;
