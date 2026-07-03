import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, ArrowLeft, Plus } from 'lucide-react';

const CreateJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.salary.trim()) newErrors.salary = 'Salary/Compensation is required';
    if (!formData.description.trim()) newErrors.description = 'Job description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate saving process
    setTimeout(() => {
      const existingJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
      const newJob = {
        id: Date.now(),
        ...formData,
        status: 'Active',
        createdAt: new Date().toLocaleDateString(),
      };

      existingJobs.unshift(newJob);
      localStorage.setItem('jobs', JSON.stringify(existingJobs));

      setIsSubmitting(false);
      setSuccess(true);

      // Reset form
      setFormData({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        salary: '',
        description: '',
      });

      // Navigate to view-jobs after 1.5 seconds
      setTimeout(() => {
        navigate('/view-jobs');
      }, 1500);
    }, 800);
  };

  return (
    <div className="create-job-wrapper animate-fade-in">
      <header className="page-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>
        <h1 className="page-title">Create Job Listing</h1>
        <p className="page-subtitle">Publish a new career opportunity to the database</p>
      </header>

      {success && (
        <div className="alert alert-success">
          <CheckCircle2 size={18} />
          <span>Job listing created successfully! Redirecting to jobs board...</span>
        </div>
      )}

      <div className="form-card glass-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="title">Job Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={`form-input ${errors.title ? 'is-invalid' : ''}`}
                placeholder="Software Engineer"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.title}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className={`form-input ${errors.company ? 'is-invalid' : ''}`}
                placeholder="Google"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.company}
                </span>
              )}
            </div>
          </div>

          <div className="form-row-triple">
            <div className="form-group">
              <label className="form-label" htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className={`form-input ${errors.location ? 'is-invalid' : ''}`}
                placeholder="Remote / San Francisco, CA"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.location}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="type">Job Type</label>
              <select
                id="type"
                name="type"
                className="form-input select-input"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote Only</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="salary">Salary / Compensation</label>
              <input
                type="text"
                id="salary"
                name="salary"
                className={`form-input ${errors.salary ? 'is-invalid' : ''}`}
                placeholder="e.g. $120,000 - $140,000"
                value={formData.salary}
                onChange={handleChange}
              />
              {errors.salary && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.salary}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="description">Job Description</label>
            <textarea
              id="description"
              name="description"
              rows="6"
              className={`form-input textarea-input ${errors.description ? 'is-invalid' : ''}`}
              placeholder="Outline the responsibilities, requirements, and benefits of the role..."
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <span className="form-error-msg">
                <AlertCircle size={14} />
                {errors.description}
              </span>
            )}
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary cancel-btn"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting || success}
            >
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <Plus size={18} />
                  <span>Publish Job Listing</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .create-job-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .page-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: color var(--transition-fast);
          margin-bottom: 0.5rem;
          padding: 0;
        }

        .back-btn:hover {
          color: var(--text-primary);
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

        .form-card {
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .form-row-triple {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 768px) {
          .form-row, .form-row-triple {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .select-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
          padding-right: 2.5rem;
        }

        .textarea-input {
          resize: vertical;
          min-height: 120px;
        }

        .form-input.is-invalid {
          border-color: rgba(244, 63, 94, 0.4);
        }

        .form-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.75rem;
        }

        .cancel-btn, .submit-btn {
          width: auto;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CreateJob;
