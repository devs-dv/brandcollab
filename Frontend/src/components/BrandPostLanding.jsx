import React, { useEffect, useState } from "react";
import BrandSideNav from "../components/navigation/BrandSideNav";

const BrandPostLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const setDark = (val) => {
      if (val === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initially set the theme based on the state
    setDark(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleDarkModeToggle = (mode) => {
    setIsDarkMode(mode === "dark");
  };

    const [showCard, setShowCard] = useState(true);
    const [showLetsTalk, setShowLetsTalk] = useState(false);

    const handleApprove = () => {
      setShowLetsTalk(true);
    };

    const handleDeny = () => {
      setShowCard(false);
    };

    if (!showCard) return null;

  return (
    <div className="bg-gray-100">
      <BrandSideNav />
      <div className="content ml-16 transition-all ease-in-out duration-500">
        <div className="h-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-8 ">
          {/* Card start */}
          <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="border-b px-4 pb-6">
              <div className="text-center my-4">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt="Photo Of Influencer"
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                    Influencer name
                  </h3>
                  <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        className=""
                        d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                      />
                    </svg>
                    Followers:
                  </div>
                </div>
              </div>
              <div className="flex gap-2 px-2">
                <button
                  onClick={handleApprove}
                  className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
                >
                  Approve
                </button>
                <button
                  onClick={handleDeny}
                  className="flex-1 rounded-full bg-red-600 dark:bg-red-800 font-semibold text-white dark:text-white px-4 py-2"
                >
                  Deny
                </button>
              </div>
            </div>
            {showLetsTalk && (
              <div className="px-4 py-4">
                <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                  <a
                    // here we have to give link of the direct chat
                    href="#"
                    className="mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            )}

            {/* here the card is ending  */}           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrandPostLanding;
