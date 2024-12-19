import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navButton, setNavButton] = useState(0); // Track the active button
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const handleButtonClick = (index) => {
    setNavButton(index);
    setIsMenuOpen(false); // Close menu on selection
  };

  const routes = ["/", "/products", "/cart", "/contact"];

  return (
    <div className="w-full fixed top-0 z-50 shadow-md bg-[#FF9000]">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 md:px-8 h-[50px] max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div>
          <img
            className="bg-[#C9F0FF] shadow-sm rounded-md w-[90px] h-[40px]"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 font-semibold text-black absolute md:static bg-[#FF9000] w-full md:w-auto left-0 top-[50px] md:top-auto`}
        >
          {["HOME", "PRODUCTS", "CART", "CONTACT"].map((label, index) => (
            <Link
              to={routes[index]}
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`block md:inline-block w-full md:w-auto px-4 py-2 md:px-6 rounded ${
                navButton === index
                  ? "text-xl"
                  : "text-black hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
