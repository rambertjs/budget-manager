import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
