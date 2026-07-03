import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Onboarding from '../components/Onboarding';
import ProfileSkills from '../components/ProfileSkills';
import JobMatcher from '../components/JobMatcher';

const CandidateDashboard = () => {
  const { user } = useAuth();
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [matchedJobs, setMatchedJobs] = useState(null);
  const [sideHustles, setSideHustles] = useState(null);
  const [careerPath, setCareerPath] = useState(null);

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingStatus = localStorage.getItem(`onboarding_${user?.email}`);
    setHasCompletedOnboarding(!!onboardingStatus);
    setShowOnboarding(!onboardingStatus);

    // Load user data if onboarding is complete
    if (onboardingStatus) {
      loadUserData();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const loadUserData = async () => {
    setIsLoading(true);
    try {
      const savedProfile = localStorage.getItem(`profile_${user?.email}`);
      const savedJobs = localStorage.getItem(`jobs_${user?.email}`);
      const savedHustles = localStorage.getItem(`hustles_${user?.email}`);
      const savedCareerPath = localStorage.getItem(`careerPath_${user?.email}`);

      if (savedProfile) setUserProfile(JSON.parse(savedProfile));
      if (savedJobs) setMatchedJobs(JSON.parse(savedJobs));
      if (savedHustles) setSideHustles(JSON.parse(savedHustles));
      if (savedCareerPath) setCareerPath(JSON.parse(savedCareerPath));
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnboardingComplete = (profileData) => {
    localStorage.setItem(`onboarding_${user?.email}`, 'completed');
    localStorage.setItem(`profile_${user?.email}`, JSON.stringify(profileData));
    setUserProfile(profileData);
    setHasCompletedOnboarding(true);
    setShowOnboarding(false);

    loadUserData();
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      const updatedProfile = {
        ...userProfile,
        experience:
          updatedData.method === 'upload'
            ? 'CV updated: ' + (updatedData.file?.name || 'New file uploaded')
            : updatedData.rawText || userProfile.experience,
        lastUpdated: new Date().toISOString(),
      };

      setUserProfile(updatedProfile);
      localStorage.setItem(`profile_${user?.email}`, JSON.stringify(updatedProfile));
      loadUserData();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

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

          .loading-state {
            text-align: center;
            color: var(--text-secondary);
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {showOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <>
          <div className="dashboard-header">
            <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
            <p className="dashboard-subtitle">Your personalized career dashboard</p>
          </div>

          <div className="dashboard-content">
            <div className="main-section">
              <ProfileSkills profile={userProfile} onUpdateProfile={handleProfileUpdate} />
            </div>

            <div className="main-section">
              <JobMatcher
                matchedJobs={matchedJobs}
                sideHustles={sideHustles}
                careerPath={careerPath}
              />
            </div>
          </div>

          {/* AI Coach is now mounted globally from App.jsx */}
        </>
      )}

      <style>{`
        .dashboard-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2rem;
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

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .main-section {
          width: 100%;
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: 1rem;
          }

          .dashboard-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CandidateDashboard;

