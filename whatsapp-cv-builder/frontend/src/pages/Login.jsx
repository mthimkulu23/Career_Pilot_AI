import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
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

    // Small timeout to simulate login delay for animations
    setTimeout(() => {
      const result = login(formData.email, formData.password);
      setIsSubmitting(false);

      if (result.success) {
        navigate('/');
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
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to manage your CVs & track your job progress</p>
        </div>

        {serverError && (
          <div className="alert alert-error">
            <AlertCircle size={18} />
            <span>{serverError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <div className="form-input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input has-icon ${errors.email ? 'is-invalid' : ''}`}
                placeholder="you@example.com"
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
                placeholder="••••••••"
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

          <button
            type="submit"
            className="btn btn-primary auth-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>{' '}
          <Link to="/register" className="auth-link">
            Create an Account
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
          max-width: 440px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-glass);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-size: 3rem;
          margin-bottom: 1rem;
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
          margin-bottom: 2rem;
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
          margin-top: 1.75rem;
          height: 48px;
        }

        .auth-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
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

        @keyframes float-shadow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
};

export default Login;
