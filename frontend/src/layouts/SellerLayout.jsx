// src/layouts/SellerLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import { LayoutDashboard, Package, ShoppingCart } from "lucide-react";

const SellerLayout = () => {
  const sellerLinks = [
    { to: "/seller/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/seller/products", label: "Products", icon: Package },
    { to: "/seller/orders", label: "Orders", icon: ShoppingCart },
  ];

  return (
    <div className="flex">
      <Sidebar links={sellerLinks} title="Seller Panel" />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
