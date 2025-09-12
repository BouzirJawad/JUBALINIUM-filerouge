import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import Loading from "../page/public/Loading";

export const ProtectedRoute = () => {
    const { token, user, loading } = useAuth()

    if (loading) return <Loading message="Checking access..." />

    if (!token && !user) {
        return <Navigate to={"/login"}/>
    }

    return <Outlet/>
}