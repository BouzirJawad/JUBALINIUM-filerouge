import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { useAuth } from "../provider/AuthProvider";

function Navbar({ showCart = true }) {
  const { token, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1e3a8a]">
              JUBALINIUM
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              to="/store"
              className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
            >
              Store
            </Link>
            <Link
              to="/fabrication"
              className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
            >
              Fabrication
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
            >
              Contact
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
            >
              Work With Us
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart (only if showCart) */}
            {showCart && (
              <Link
                to="/cart"
                className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="text-sm font-medium">Cart</span>
              </Link>
            )}

            {/* Auth buttons / Profile */}
            {!token ? (
              <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 text-sm lg:text-base px-3 lg:px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm lg:text-base px-3 lg:px-6 py-2 rounded-md"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
                >
                  <User className="w-6 h-6" />
                  <span className="text-sm font-medium">Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
                >
                  <LogOut className="w-6 h-6" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#2563eb] text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/fabrication"
              className="text-gray-700 hover:text-[#2563eb] text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Fabrication
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#2563eb] text-sm"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#2563eb] text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-[#2563eb] text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Work With Us
            </Link>

            {/* Cart in mobile */}
            {showCart && (
              <Link
                to="/cart"
                className="flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
                onClick={() => setMobileOpen(false)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm">Cart</span>
              </Link>
            )}

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-[#2563eb] text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-[#2563eb] text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm">Profile</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#2563eb]"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Logout</span>
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
