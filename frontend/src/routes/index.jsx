import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import PublicLayout from "../layouts/PublicLayout";
import SellerLayout from "../layouts/SellerLayout";
import WorkerLayout from "../layouts/WorkerLayout";

import NotFound from "../page/public/NotFound";
import HomePage from "../page/public/Home";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import Store from "../page/client/Store";
import ProductDetails from "../page/public/ProductDetails";
import CartPage from "../page/public/Cart";

const Routes = () => {
  const { token, user } = useAuth();

  // Public routes (no login required)
  const publicRoutes = [
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "store", element: <Store /> },
        { path: "store/:productId", element: <ProductDetails />},
        { path: "fabrication", element: <>Fabrication</> },
        { path: "cart", element: <CartPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  // No-auth-only routes (guest only)
  const noAuthRoutesOnly = [
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ];

  // Auth-only routes (any logged-in user)
  const authRoutesOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <ClientLayout />,
          children: [
            { path: "checkout", element: <>checkout</> },
            { path: "profile", element: <>profile</> },
            { path: "custom-fabrication", element: <>costume fabrication</> },
          ],
        },
      ],
    },
  ];

  // Seller-only routes
  const sellerRoutesOnly = [
    {
      path: "/seller",
      element: (
        <RoleBasedRoute allowedRoles={["seller"]}>
          <SellerLayout />
        </RoleBasedRoute>
      ),
      children: [
        { path: "dashboard", element: <>SellerDashboard</> },
        { path: "products", element: <>SellerProducts</> },
        { path: "product/:id", element: <>SellerProductDetails</> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  // Worker-only routes
  const workerRoutesOnly = [
    {
      path: "/worker",
      element: (
        <RoleBasedRoute allowedRoles={["worker"]}>
          <WorkerLayout />
        </RoleBasedRoute>
      ),
      children: [
        { path: "dashboard", element: <>WorkerDashboard</> },
        { path: "fabrications", element: <>WorkerFabrications</> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  // Admin-only routes
  const adminRoutesOnly = [
    {
      path: "/admin",
      element: (
        <RoleBasedRoute allowedRoles={["admin"]}>
          <AdminLayout />
        </RoleBasedRoute>
      ),
      children: [
        { path: "/dashboard", element: <>AdminDashboard</> },
        { path: "manage-users", element: <>manage users</> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  // Final router
  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? noAuthRoutesOnly : []),
    ...(token ? authRoutesOnly : []),
    ...(user?.role === "admin" ? adminRoutesOnly : []),
    ...(user?.role === "worker" ? workerRoutesOnly : []),
    ...(user?.role === "seller" ? sellerRoutesOnly : []),
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
