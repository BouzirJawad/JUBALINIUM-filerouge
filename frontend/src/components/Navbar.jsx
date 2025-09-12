import React from 'react'

function Navbar() {
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
              <a
                href="#"
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
              >
                Fabrication
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-sm xl:text-base"
              >
                Work With Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2">
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

            {/* Auth buttons - Desktop */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              <button className="text-gray-700 text-sm lg:text-base px-3 lg:px-4 py-2 rounded-md hover:bg-gray-100">
                Login
              </button>
              <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm lg:text-base px-3 lg:px-6 py-2 rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar