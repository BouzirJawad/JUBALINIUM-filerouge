// src/components/layout/Topbar.jsx
import { useAuth } from "../provider/AuthProvider";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 ml-64">
      <div className="font-semibold text-gray-700">
        Welcome, {user?.username || "User"}
      </div>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Topbar;
