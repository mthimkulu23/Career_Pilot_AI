import React, { useState } from 'react';
import { Upload, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { buildProfileFromText, buildProfileFromUpload } from '../utils/candidateEngine';

const Onboarding = ({ onComplete }) => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('');
  const [file, setFile] = useState(null);
  const [rawText, setRawText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const userName = `${user?.name || ''} ${user?.surname || ''}`.trim() || 'Candidate';
      const profileData =
        method === 'upload'
          ? buildProfileFromUpload(file, userName)
          : buildProfileFromText(rawText, userName);

      setIsSubmitting(false);
      onComplete(profileData);
    }, 1500);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        {step === 1 && (
          <>
            <div className="onboarding-header">
              <h1 className="onboarding-title">Let's Build Your Profile</h1>
              <p className="onboarding-subtitle">Choose how you'd like to share your experience</p>
            </div>

            <div className="method-selection">
              <div
                className={`method-card ${method === 'upload' ? 'selected' : ''}`}
                onClick={() => setMethod('upload')}
              >
                <div className="method-icon">
                  <Upload size={32} />
                </div>
                <h3 className="method-title">Upload CV</h3>
                <p className="method-description">I have a PDF resume ready to upload</p>
              </div>

              <div
                className={`method-card ${method === 'text' ? 'selected' : ''}`}
                onClick={() => setMethod('text')}
              >
                <div className="method-icon">
                  <FileText size={32} />
                </div>
                <h3 className="method-title">Tell Us About Yourself</h3>
                <p className="method-description">I'll describe my experience in my own words</p>
              </div>
            </div>

            {method && (
              <button
                className="btn btn-primary btn-large"
                onClick={() => setStep(2)}
              >
                Continue
                <ArrowRight size={18} />
              </button>
            )}
          </>
        )}

        {step === 2 && method === 'upload' && (
          <>
            <div className="onboarding-header">
              <h1 className="onboarding-title">Upload Your CV</h1>
              <p className="onboarding-subtitle">We'll extract your skills and experience automatically</p>
            </div>

            <div className="upload-area">
              <input
                type="file"
                id="cv-upload"
                accept=".pdf"
                onChange={handleFileUpload}
                className="file-input"
              />
              <label htmlFor="cv-upload" className="upload-label">
                <Upload size={48} />
                <p className="upload-text">
                  {file ? file.name : 'Click to upload or drag and drop'}
                </p>
                <p className="upload-hint">PDF files only (max 5MB)</p>
              </label>
              {file && (
                <div className="file-success">
                  <CheckCircle size={16} />
                  <span>File selected successfully</span>
                </div>
              )}
            </div>

            <div className="onboarding-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!file || isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Generate Profile'}
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}

        {step === 2 && method === 'text' && (
          <>
            <div className="onboarding-header">
              <h1 className="onboarding-title">Tell Us About Yourself</h1>
              <p className="onboarding-subtitle">
                What do you do, what tools do you use, and how do you usually get paid?
              </p>
            </div>

            <div className="text-input-area">
              <textarea
                className="text-area"
                placeholder="Example: I've been working in construction for 5 years. I'm skilled in operating forklifts, using power tools, and reading blueprints. I usually work on contract basis and get paid per project. I'm looking for more stable work but open to gigs on weekends..."
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                rows={8}
              />
              <div className="char-count">
                {rawText.length} characters
              </div>
            </div>

            <div className="onboarding-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!rawText.trim() || isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Generate Profile'}
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .onboarding-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .onboarding-card {
          width: 100%;
          max-width: 600px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .onboarding-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .onboarding-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .method-selection {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 480px) {
          .method-selection {
            grid-template-columns: 1fr;
          }
        }

        .method-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .method-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-4px);
        }

        .method-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .method-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .method-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .method-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .upload-area {
          margin-bottom: 2rem;
        }

        .file-input {
          display: none;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          border: 2px dashed var(--border-glass);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          background: rgba(255, 255, 255, 0.02);
        }

        .upload-label:hover {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .upload-label svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .upload-text {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .upload-hint {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .file-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          color: #10b981;
          font-size: 0.875rem;
        }

        .text-input-area {
          margin-bottom: 2rem;
        }

        .text-area {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          line-height: 1.5;
          resize: vertical;
          font-family: inherit;
        }

        .text-area:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .text-area::placeholder {
          color: var(--text-muted);
        }

        .char-count {
          text-align: right;
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }

        .onboarding-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .btn-large {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Onboarding;
