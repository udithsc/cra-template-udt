import { useLocation, Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const token = '1';
  // const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default ProtectedRoute;
