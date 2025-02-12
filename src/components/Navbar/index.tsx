"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import Next.js router
import { FaBell, FaShareAlt, FaGlobe, FaBars } from "react-icons/fa";
import { navbarItems, dropdownItems, LogoNavbar } from "../../utils/Navbar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const handleAccountClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard"); // Redirect to dashboard if token exists
    } else {
      router.push("/login"); // Redirect to login if no token
    }
  };

  return (
    <nav className="w-full z-[100] sticky top-0 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Side: Logo & Nav Items */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Image
            src={LogoNavbar}
            alt="Website Logo"
            className="w-[7rem] h-auto object-contain"
            width={120}
            height={40}
          />

          {/* Desktop & Mobile Nav Links */}
          <div className="hidden lg:flex space-x-6">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Search & Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer w-6 h-6 sm:w-5 sm:h-5" />
          <FaShareAlt className="text-gray-600 hover:text-blue-600 cursor-pointer w-6 h-6 sm:w-5 sm:h-5" />
          <FaGlobe className="text-gray-600 hover:text-blue-600 cursor-pointer w-6 h-6 sm:w-5 sm:h-5" />

          {/* Dropdown Menu */}
          <div className="relative">
            <FaBars
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="cursor-pointer w-6 h-6 sm:w-5 sm:h-5"
            />

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
                {dropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.name === "Account" ? "#" : item.link} // Prevent default for Account
                    onClick={
                      item.name === "Account" ? handleAccountClick : undefined
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
