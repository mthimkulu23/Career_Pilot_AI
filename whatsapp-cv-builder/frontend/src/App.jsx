import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EmployerChatWidget from './components/EmployerChatWidget';
import CreateJob from './pages/CreateJob';
import ViewJobs from './pages/ViewJobs';
import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AICoach from './components/AICoach';
import { getDashboardPath } from './utils/getDashboardPath';

const RoleBasedRedirect = () => {
  const { user } = useAuth();
  return <Navigate to={getDashboardPath(user?.role)} replace />;
};

const AppContent = () => {
  const { user } = useAuth();
  const emailKey = useMemo(() => user?.email, [user]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!emailKey) return;
    try {
      const p = localStorage.getItem(`profile_${emailKey}`);
      if (p) setUserProfile(JSON.parse(p));
      else setUserProfile(null);
    } catch {
      setUserProfile(null);
    }
  }, [emailKey]);

  const handleAIMessage = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          "I'm here to help with your career questions. This demo coach uses a placeholder backend response."
        );
      }, 500);
    });
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={['candidate']}>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Dashboard />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
              <EmployerChatWidget candidateEmail={user?.email} employerId="default-employer" />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-job"
        element={
          <ProtectedRoute requiredRole="employer">
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <CreateJob />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/view-jobs"
        element={
          <ProtectedRoute allowedRoles={['candidate', 'employer']}>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <ViewJobs />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/candidate-dashboard"
        element={
          <ProtectedRoute requiredRole="candidate">
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <CandidateDashboard />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer-dashboard"
        element={
          <ProtectedRoute requiredRole="employer">
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <EmployerDashboard />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <AdminDashboard />
              </main>
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRoles={['candidate', 'employer']}>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Profile />
              </main>
              <AICoach userProfile={userProfile} onSendMessage={handleAIMessage} />
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={user ? <RoleBasedRedirect /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
