import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getDashboardPath } from '../utils/getDashboardPath';

const ProtectedRoute = ({ children, requiredRole, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const dashboardPath = getDashboardPath(user.role);

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={dashboardPath} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={dashboardPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
