import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());

        if (!userExists) {
          setStatus('error');
          setErrorMessage('No account found with this email address.');
          setIsSubmitting(false);
          return;
        }

        // Generate reset token
        const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const resetExpiry = Date.now() + 3600000; // 1 hour from now

        // Store reset token in localStorage
        localStorage.setItem(`reset_${email.toLowerCase()}`, JSON.stringify({
          token: resetToken,
          expiry: resetExpiry
        }));

        setStatus('success');
        setIsSubmitting(false);
      } catch (error) {
        setStatus('error');
        setErrorMessage('An error occurred. Please try again.');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <Link to="/login" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Login</span>
        </Link>

        <div className="forgot-password-header">
          <div className="icon-wrapper">
            <Mail size={48} />
          </div>
          <h1 className="forgot-password-title">Forgot Password?</h1>
          <p className="forgot-password-subtitle">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {status === 'success' ? (
          <div className="success-message">
            <CheckCircle size={48} className="success-icon" />
            <h3>Reset Link Sent!</h3>
            <p>
              We've sent a password reset link to <strong>{email}</strong>. 
              The link will expire in 1 hour.
            </p>
            <p className="note">
              <em>Note: Since this is a demo, the reset token has been stored in localStorage. 
              In a real application, this would be sent via email.</em>
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/reset-password', { state: { email } })}
            >
              Proceed to Reset Password
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setStatus('idle');
                setEmail('');
              }}
            >
              Try Different Email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>

            {status === 'error' && (
              <div className="error-message">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}

        <div className="forgot-password-footer">
          <p>Remember your password? <Link to="/login">Sign In</Link></p>
        </div>
      </div>

      <style>{`
        .forgot-password-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .forgot-password-card {
          width: 100%;
          max-width: 480px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color var(--transition-fast);
        }

        .back-link:hover {
          color: var(--text-primary);
        }

        .forgot-password-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .forgot-password-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .forgot-password-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }

        .forgot-password-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input {
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all var(--transition-fast);
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .form-group input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-group input::placeholder {
          color: var(--text-muted);
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(244, 63, 94, 0.15);
          border: 1px solid rgba(244, 63, 94, 0.3);
          border-radius: var(--radius-md);
          color: #f87171;
          font-size: 0.9rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .success-message h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .success-message p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .success-message .note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .success-message .btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .btn-large {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
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
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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

        .forgot-password-footer {
          margin-top: 2rem;
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .forgot-password-footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .forgot-password-footer a {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .forgot-password-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .forgot-password-card {
            padding: 1.5rem;
          }

          .forgot-password-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
