"use client";
import React, { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          hasScrolled ? "bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/takapay.svg"
                  alt="Logo"
                  className="h-20 w-20 rounded-full bg-tranparent"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="#home"
                  className="text-white hover:bg-green-600 rounded-lg px-4 py-1 font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:bg-green-600 rounded-lg px-4 py-1 font-medium"
                >
                  About
                </a>
                <a
                  href="#service"
                  className="text-white hover:bg-green-600 rounded-lg px-4 py-1 font-medium"
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="text-white hover:bg-green-600 rounded-lg px-4 py-1 font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-white hover:bg-green-600 rounded-lg px-4 py-1 font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div
            ref={menuRef}
            className="md:hidden absolute bg-gray-900 right-0 w-1/2"
            id="navbar"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-white block hover:bg-green-600 rounded-lg px-4 py-2 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white block hover:bg-green-600 rounded-lg px-4 py-2 font-medium"
              >
                About
              </a>
              <a
                href="#service"
                className="text-white block hover:bg-green-600 rounded-lg px-4 py-2 font-medium"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-white block hover:bg-green-600 rounded-lg px-4 py-2 font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-white block hover:bg-green-600 rounded-lg px-4 py-2 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
