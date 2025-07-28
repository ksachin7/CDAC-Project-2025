import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export default RequireAuth;