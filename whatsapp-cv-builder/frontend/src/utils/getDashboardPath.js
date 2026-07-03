export const getDashboardPath = (role) => {
  switch (role) {
    case 'admin':
      return '/admin-dashboard';
    case 'employer':
      return '/employer-dashboard';
    case 'candidate':
      return '/candidate-dashboard';
    default:
      return '/login';
  }
};
