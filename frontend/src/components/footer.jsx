import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
              AluMarket
            </h5>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0">
              Modern solutions for aluminum enthusiasts, builders, and
              designers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h5>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Fabrication
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
              Contact Info
            </h5>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>Email: support@alumarker.com</li>
              <li>Phone: +212 600-000-000</li>
              <li>Location: Beni-Mellal, Morocco</li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
              Social
            </h5>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2025 AluMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
