'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex shrink-0 items-center">

                <div className="bg-gray-300 h-12 w-24">
                  Logo
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-end">
                <Link
                  href="/"
                  className="px-3 py-2 text-md font-medium text-gray-400 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-3 py-2 text-md font-medium text-gray-400 hover:text-gray-700"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 text-md font-medium text-gray-400 hover:text-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden fixed inset-0 bg-gray-50 z-50`}
        id="mobile-menu">
        {/* Close Button (X) */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-blue-500 hover:text-blue-300 text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6 px-6 py-8">
            <Link
              href="/"
              className="text-black font-semibold text-xl tracking-widest py-3 px-4 rounded-md hover:scale-125 transition duration-200 ease-in-out"
            >
              Home
            </Link>
            <div className="w-full border-t border-gray-300"></div> {/* Horizontal line between links */}

            <Link
              href="/services"
              className="text-black font-semibold text-xl tracking-widest py-3 px-4 rounded-md hover:scale-125 transition duration-200 ease-in-out"
            >
              Services
            </Link>
            <div className="w-full border-t border-gray-300"></div> {/* Horizontal line between links */}

            <Link
              href="/contact"
              className="text-black font-semibold text-xl tracking-widest py-3 px-4 rounded-md hover:scale-125 transition duration-200 ease-in-out"
            >
              Contact
            </Link>
          </div>
      </div>
    </div>
  );
}
