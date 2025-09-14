// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = ({ links, title = "Dashboard" }) => {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg fixed top-0 left-0 flex flex-col">
      <div className="p-6 font-bold text-xl text-blue-600">{title}</div>
      <nav className="flex-1 px-4 space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {Icon && <Icon size={18} />}
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
