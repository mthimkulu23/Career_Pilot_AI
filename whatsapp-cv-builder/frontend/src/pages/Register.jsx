import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, ArrowRight, AlertCircle, CheckCircle2, Briefcase, Shield, UserCheck } from 'lucide-react';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'First name is required';
    if (!formData.surname.trim()) newErrors.surname = 'Surname is required';
    if (!formData.role) newErrors.role = 'Please select a role';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one capital letter';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');
    setSuccessMsg('');

    // Simulate delay for user feedback animations
    setTimeout(() => {
      const result = register(
        formData.name,
        formData.surname,
        formData.email,
        formData.password,
        formData.role
      );
      setIsSubmitting(false);

      if (result.success) {
        setSuccessMsg(result.message);
        // Clear form
        setFormData({
          name: '',
          surname: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
        });
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2200);
      } else {
        setServerError(result.message);
      }
    }, 800);
  };

  return (
    <div className="auth-page-container">
      {/* Decorative ambient glowing background circles */}
      <div className="glow-circle top-right"></div>
      <div className="glow-circle bottom-left"></div>

      <div className="auth-card-wrapper animate-slide-up">
        <div className="auth-header">
          <div className="auth-logo">🚀</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join CareerPilot and select your role to get started</p>
        </div>

        {serverError && (
          <div className="alert alert-error">
            <AlertCircle size={18} />
            <span>{serverError}</span>
          </div>
        )}

        {successMsg && (
          <div className="alert alert-success">
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row-double">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <div className="form-input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input has-icon ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="John"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="surname">Surname</label>
              <div className="form-input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className={`form-input has-icon ${errors.surname ? 'is-invalid' : ''}`}
                  placeholder="Doe"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
              {errors.surname && (
                <span className="form-error-msg">
                  <AlertCircle size={14} />
                  {errors.surname}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Select Your Role</label>
            <div className="role-selection">
              <div
                className={`role-card ${formData.role === 'candidate' ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'role', value: 'candidate' } })}
              >
                <UserCheck className="role-icon" size={24} />
                <h3 className="role-title">Candidate</h3>
                <p className="role-description">Search for jobs and build your career</p>
              </div>
              <div
                className={`role-card ${formData.role === 'employer' ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'role', value: 'employer' } })}
              >
                <Briefcase className="role-icon" size={24} />
                <h3 className="role-title">Employer</h3>
                <p className="role-description">Post jobs and find talent</p>
              </div>
              <div
                className={`role-card ${formData.role === 'admin' ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'role', value: 'admin' } })}
              >
                <Shield className="role-icon" size={24} />
                <h3 className="role-title">Admin</h3>
                <p className="role-description">Oversee app insights and users</p>
              </div>
            </div>
            {errors.role && (
              <span className="form-error-msg">
                <AlertCircle size={14} />
                {errors.role}
              </span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <div className="form-input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input has-icon ${errors.email ? 'is-invalid' : ''}`}
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <span className="form-error-msg">
                <AlertCircle size={14} />
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <div className="form-input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type="password"
                id="password"
                name="password"
                className={`form-input has-icon ${errors.password ? 'is-invalid' : ''}`}
                placeholder="8+ chars, 1 capital, 1 special char"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <span className="form-error-msg">
                <AlertCircle size={14} />
                {errors.password}
              </span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <div className="form-input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-input has-icon ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {errors.confirmPassword && (
              <span className="form-error-msg">
                <AlertCircle size={14} />
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit-btn"
            disabled={isSubmitting || !!successMsg}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Register</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>{' '}
          <Link to="/login" className="auth-link">
            Log In
          </Link>
        </div>
      </div>

      <style>{`
        .auth-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glows */
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        .glow-circle.top-right {
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: var(--color-primary);
        }

        .glow-circle.bottom-left {
          bottom: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: var(--color-secondary);
        }

        .auth-card-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 500px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-glass);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-logo {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }

        .auth-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form {
          margin-bottom: 1.5rem;
        }

        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .form-row-double {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          transition: color var(--transition-fast);
          pointer-events: none;
        }

        .form-input.has-icon {
          padding-left: 2.75rem;
        }

        .form-input.is-invalid {
          border-color: rgba(244, 63, 94, 0.4);
        }

        .form-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
        }

        .form-input:focus + .input-icon {
          color: var(--color-primary);
        }

        .auth-submit-btn {
          margin-top: 1.5rem;
          height: 48px;
        }

        .auth-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .auth-link {
          font-weight: 600;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }

        .auth-link:hover {
          color: var(--color-primary-hover);
        }

        /* Spinner for submissions */
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Role selection styles */
        .role-selection {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 600px) {
          .role-selection {
            grid-template-columns: 1fr;
          }
        }

        .role-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .role-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .role-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .role-icon {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          transition: color var(--transition-fast);
        }

        .role-card:hover .role-icon,
        .role-card.selected .role-icon {
          color: var(--color-primary);
        }

        .role-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .role-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default Register;
