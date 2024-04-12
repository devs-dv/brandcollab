import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              My Website
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto w-full ${
              isOpen
                ? "flex flex-col absolute top-14 w-screen h-[90vh] text-lg items-center right-0 bg-gray-800 transition-all duration-500"
                : "hidden"
            }`}
          >
            <div className="flex flex-col items-end lg:flex-row">
              <Link
                to="/signup"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
