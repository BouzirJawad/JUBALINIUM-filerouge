// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl py-10 bg-white  rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
