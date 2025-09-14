// src/layouts/WorkerLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import { LayoutDashboard, Hammer } from "lucide-react";

const WorkerLayout = () => {
  const workerLinks = [
    { to: "/worker/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/worker/fabrications", label: "Fabrications", icon: Hammer },
  ];

  return (
    <div className="flex">
      <Sidebar links={workerLinks} title="Worker Panel" />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default WorkerLayout;
