import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import ViewJobs from './pages/ViewJobs';
import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <Dashboard />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-job"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <CreateJob />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-jobs"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <ViewJobs />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/candidate-dashboard"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <CandidateDashboard />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employer-dashboard"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <EmployerDashboard />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <AdminDashboard />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
