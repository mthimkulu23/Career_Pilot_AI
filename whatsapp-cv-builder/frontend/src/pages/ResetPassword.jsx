import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
      return;
    }

    // Check if reset token is valid
    const resetData = JSON.parse(localStorage.getItem(`reset_${email.toLowerCase()}`) || 'null');
    
    if (!resetData || Date.now() > resetData.expiry) {
      setStatus('error');
      setErrorMessage('Reset link has expired or is invalid. Please request a new one.');
      setIsValidToken(false);
    } else {
      setIsValidToken(true);
    }
  }, [email, navigate]);

  const validatePassword = (pwd) => {
    // At least 8 characters, 1 uppercase, 1 special character
    const hasLength = pwd.length >= 8;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return hasLength && hasUppercase && hasSpecial;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setStatus('error');
      setErrorMessage('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setStatus('error');
      setErrorMessage('Password must be at least 8 characters with 1 uppercase letter and 1 special character.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Update user password in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());

        if (userIndex === -1) {
          setStatus('error');
          setErrorMessage('User not found. Please try again.');
          setIsSubmitting(false);
          return;
        }

        // Update password
        users[userIndex].password = password;
        localStorage.setItem('users', JSON.stringify(users));

        // Clear reset token
        localStorage.removeItem(`reset_${email.toLowerCase()}`);

        setStatus('success');
        setIsSubmitting(false);
      } catch (error) {
        setStatus('error');
        setErrorMessage('An error occurred. Please try again.');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  if (!isValidToken && status !== 'success') {
    return (
      <div className="reset-password-container">
        <div className="reset-password-card">
          <div className="error-state">
            <AlertCircle size={48} className="error-icon" />
            <h2>Invalid or Expired Link</h2>
            <p>{errorMessage}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/forgot-password')}
            >
              Request New Reset Link
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <Link to="/login" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Login</span>
        </Link>

        <div className="reset-password-header">
          <div className="icon-wrapper">
            <Lock size={48} />
          </div>
          <h1 className="reset-password-title">Reset Password</h1>
          <p className="reset-password-subtitle">
            Create a new secure password for your account
          </p>
        </div>

        {status === 'success' ? (
          <div className="success-message">
            <CheckCircle size={48} className="success-icon" />
            <h3>Password Reset Successful!</h3>
            <p>Your password has been successfully updated. You can now log in with your new password.</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/login')}
            >
              Proceed to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reset-password-form">
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="password-requirements">
                <span className={password.length >= 8 ? 'valid' : ''}>• At least 8 characters</span>
                <span className={/[A-Z]/.test(password) ? 'valid' : ''}>• 1 uppercase letter</span>
                <span className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'valid' : ''}>• 1 special character</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
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
              disabled={isSubmitting || !password || !confirmPassword}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}

        <div className="reset-password-footer">
          <p>Remember your password? <Link to="/login">Sign In</Link></p>
        </div>
      </div>

      <style>{`
        .reset-password-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .reset-password-card {
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

        .reset-password-header {
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

        .reset-password-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reset-password-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }

        .reset-password-form {
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

        .password-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .password-input-wrapper input {
          width: 100%;
          padding: 0.875rem 3rem 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all var(--transition-fast);
        }

        .password-input-wrapper input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .password-input-wrapper input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .password-input-wrapper input::placeholder {
          color: var(--text-muted);
        }

        .toggle-password {
          position: absolute;
          right: 0.75rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color var(--transition-fast);
        }

        .toggle-password:hover {
          color: var(--text-primary);
        }

        .password-requirements {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .password-requirements span {
          transition: color var(--transition-fast);
        }

        .password-requirements span.valid {
          color: #10b981;
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

        .success-message .btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .error-state {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .error-icon {
          color: #f87171;
          margin-bottom: 0.5rem;
        }

        .error-state h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .error-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .error-state .btn {
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

        .reset-password-footer {
          margin-top: 2rem;
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .reset-password-footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .reset-password-footer a {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .reset-password-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .reset-password-card {
            padding: 1.5rem;
          }

          .reset-password-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ResetPassword;
