import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { currentUser } = useSelector((state) => state.users);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
