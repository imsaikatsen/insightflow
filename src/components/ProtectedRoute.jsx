import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // Check if user is logged in
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
