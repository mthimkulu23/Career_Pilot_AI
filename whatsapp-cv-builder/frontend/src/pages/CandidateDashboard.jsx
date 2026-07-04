import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import Onboarding from '../components/Onboarding';
import ProfileSkills from '../components/ProfileSkills';
import JobMatcher from '../components/JobMatcher';
import AICoach from '../components/AICoach';
import {
  generateAllMatches,
  saveCandidateData,
  mergeProfileUpdate,
  getApplications,
  getApplicationStats,
} from '../utils/candidateEngine';
import { Briefcase, Send, RefreshCw } from 'lucide-react';

const CandidateDashboard = () => {
  const { user } = useAuth();
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [sideHustles, setSideHustles] = useState([]);
  const [careerPath, setCareerPath] = useState([]);
  const [applications, setApplications] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const applyMatches = useCallback((profile) => {
    console.log('Applying matches for profile:', profile);
    try {
      const matches = generateAllMatches(profile);
      console.log('Generated matches:', matches);
      setMatchedJobs(matches.matchedJobs || []);
      setSideHustles(matches.sideHustles || []);
      setCareerPath(matches.careerPath || []);
      saveCandidateData(user?.email, { profile, ...matches });
      return matches;
    } catch (error) {
      console.error('Error generating matches:', error);
      // Return empty arrays on error to prevent blank screen
      return { matchedJobs: [], sideHustles: [], careerPath: [] };
    }
  }, [user?.email]);

  const loadUserData = useCallback(async () => {
    if (!user?.email) return;
    setIsLoading(true);
    try {
      const savedProfile = localStorage.getItem(`profile_${user.email}`);
      const savedJobs = localStorage.getItem(`jobs_${user.email}`);
      const savedHustles = localStorage.getItem(`hustles_${user.email}`);
      const savedCareerPath = localStorage.getItem(`careerPath_${user.email}`);

      let profile = savedProfile ? JSON.parse(savedProfile) : null;
      setUserProfile(profile);
      setApplications(getApplications(user.email));

      if (savedJobs) setMatchedJobs(JSON.parse(savedJobs));
      if (savedHustles) setSideHustles(JSON.parse(savedHustles));
      if (savedCareerPath) setCareerPath(JSON.parse(savedCareerPath));

      if (profile && !savedJobs) {
        applyMatches(profile);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user?.email, applyMatches]);

  useEffect(() => {
    const onboardingStatus = localStorage.getItem(`onboarding_${user?.email}`);
    setHasCompletedOnboarding(!!onboardingStatus);
    setShowOnboarding(!onboardingStatus);

    if (onboardingStatus) {
      loadUserData();
    } else {
      setIsLoading(false);
    }
  }, [user, loadUserData]);

  const handleOnboardingComplete = (profileData) => {
    console.log('Onboarding complete with profile:', profileData);
    localStorage.setItem(`onboarding_${user?.email}`, 'completed');
    
    // Ensure profile has required fields
    const validProfile = {
      ...profileData,
      skills: profileData.skills || [],
      dominantSector: profileData.dominantSector || 'General Professional',
      workStyle: profileData.workStyle || 'Full-time Employment',
      preferredPayment: profileData.preferredPayment || 'Competitive salary (ZAR)',
    };
    
    const matches = applyMatches(validProfile);
    console.log('Generated matches:', matches);
    setUserProfile(validProfile);
    setHasCompletedOnboarding(true);
    setShowOnboarding(false);
    
    const jobCount = matches.matchedJobs?.length || 0;
    showToast(`Profile created! Found ${jobCount} job matches.`);
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      const userName = `${user?.name || ''} ${user?.surname || ''}`.trim() || 'Candidate';
      const updatedProfile = mergeProfileUpdate(userProfile, updatedData, userName);
      const matches = applyMatches(updatedProfile);
      setUserProfile(updatedProfile);
      showToast(`Profile updated! ${matches.matchedJobs.length} jobs re-matched.`);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleRefreshMatches = () => {
    if (!userProfile) return;
    setIsRefreshing(true);
    setTimeout(() => {
      const matches = applyMatches(userProfile);
      showToast(`Matches refreshed! ${matches.matchedJobs.length} jobs found.`);
      setIsRefreshing(false);
    }, 800);
  };

  const handleApplicationsChange = (updated) => {
    setApplications(updated);
  };

  const appStats = getApplicationStats(user?.email);

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading your dashboard...</p>
        </div>
        <style>{`
          .dashboard-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .loading-state { text-align: center; color: var(--text-secondary); }
          .spinner {
            width: 40px; height: 40px;
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {toast && <div className="toast-notification">{toast}</div>}

      {showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <>
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
              <p className="dashboard-subtitle">Your personalized career dashboard</p>
            </div>
            <button
              type="button"
              className="refresh-btn"
              onClick={handleRefreshMatches}
              disabled={isRefreshing}
            >
              <RefreshCw size={16} className={isRefreshing ? 'spinning' : ''} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Matches'}
            </button>
          </div>

          <div className="stats-row">
            <div className="mini-stat">
              <Briefcase size={18} />
              <span className="mini-stat-value">{matchedJobs.length}</span>
              <span className="mini-stat-label">Job Matches</span>
            </div>
            <div className="mini-stat">
              <Send size={18} />
              <span className="mini-stat-value">{appStats.total}</span>
              <span className="mini-stat-label">Applications</span>
            </div>
            <div className="mini-stat">
              <span className="mini-stat-value">{userProfile?.skills?.length || 0}</span>
              <span className="mini-stat-label">Skills Discovered</span>
            </div>
            <div className="mini-stat">
              <span className="mini-stat-value">{sideHustles.length}</span>
              <span className="mini-stat-label">Gig Opportunities</span>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="main-section">
              <ProfileSkills profile={userProfile} onUpdateProfile={handleProfileUpdate} />
            </div>

            <div className="main-section">
              <JobMatcher
                userEmail={user?.email}
                matchedJobs={matchedJobs}
                sideHustles={sideHustles}
                careerPath={careerPath}
                applications={applications}
                onApplicationsChange={handleApplicationsChange}
                onRefreshMatches={handleRefreshMatches}
                hasProfile={!!userProfile}
              />
            </div>
          </div>

          <AICoach 
            userProfile={userProfile}
            onSendMessage={async (message) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve("I'm here to help with your career questions. Connect me to an AI backend for personalized responses based on your profile.");
                }, 1000);
              });
            }}
          />
        </>
      )}

      <style>{`
        .dashboard-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .toast-notification {
          position: fixed;
          top: 5rem;
          right: 1.5rem;
          z-index: 3000;
          background: rgba(16, 185, 129, 0.95);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .dashboard-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--text-primary);
          padding: 0.625rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .refresh-btn:hover:not(:disabled) {
          background: rgba(99, 102, 241, 0.25);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinning { animation: spin 1s linear infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mini-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .mini-stat svg { color: var(--color-primary); margin-bottom: 0.25rem; }

        .mini-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mini-stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .main-section { width: 100%; }

        @media (max-width: 768px) {
          .dashboard-container { padding: 1rem; }
          .dashboard-title { font-size: 1.5rem; }
          .dashboard-header { flex-direction: column; }
          .refresh-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default CandidateDashboard;
