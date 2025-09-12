import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import Loading from "../page/public/Loading";

const RoleBasedRoute = ({ children, allowedRoles, redirectGuestTo = "/" }) => {
  const { user, loading } = useAuth();

  // While checking auth/loading, you can show a spinner or nothing
  if (loading) return <Loading message="Loading data ..." />;

  // If not logged in, treat as guest
  const role = user?.role || "guest";

  // Check if the user's role is allowed
  if (!allowedRoles.includes(role)) {
    // Redirect guests to login
    if (role === "guest") return <Navigate to={redirectGuestTo} replace />;
    // Redirect unauthorized logged-in users to home or dashboard
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleBasedRoute;
