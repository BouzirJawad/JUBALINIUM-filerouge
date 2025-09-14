// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import { LayoutDashboard, Users, BarChart } from "lucide-react";

const AdminLayout = () => {
  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/manage-users", label: "Manage Users", icon: Users },
    { to: "/admin/stats", label: "Stats", icon: BarChart },
  ];

  return (
    <div className="flex">
      <Sidebar links={adminLinks} title="Admin Panel" />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
