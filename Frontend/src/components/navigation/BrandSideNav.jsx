import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TopNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");

  const dataString = localStorage.getItem("userData");
  const dataObject = dataString ? JSON.parse(dataString) : {};

  useEffect(() => {
    const setDark = (val) => {
      if (val === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setName(dataObject.firstName);
    };

    // Initially set the theme based on the state
    setDark(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleDarkModeToggle = (mode) => {
    setIsDarkMode(mode === "dark");
  };

  const handleNavToggle = () => {
    const sidebar = document.querySelector("aside");
    const maxSidebar = document.querySelector(".max");
    const miniSidebar = document.querySelector(".mini");
    const maxToolbar = document.querySelector(".max-toolbar");
    const logo = document.querySelector(".logo");
    const content = document.querySelector(".content");

    if (sidebar.classList.contains("-translate-x-48")) {
      // max sidebar
      sidebar.classList.remove("-translate-x-48");
      sidebar.classList.add("translate-x-none");
      maxSidebar.classList.remove("hidden");
      maxSidebar.classList.add("flex");
      miniSidebar.classList.remove("flex");
      miniSidebar.classList.add("hidden");
      maxToolbar.classList.add("translate-x-0");
      maxToolbar.classList.remove("translate-x-24", "scale-x-0");
      logo.classList.remove("ml-12");
      content.classList.remove("ml-12");
      content.classList.add("ml-12", "md:ml-60");
    } else {
      // mini sidebar
      sidebar.classList.add("-translate-x-48");
      sidebar.classList.remove("translate-x-none");
      maxSidebar.classList.add("hidden");
      maxSidebar.classList.remove("flex");
      miniSidebar.classList.add("flex");
      miniSidebar.classList.remove("hidden");
      maxToolbar.classList.add("translate-x-24", "scale-x-0");
      maxToolbar.classList.remove("translate-x-0");
      logo.classList.add("ml-12");
      content.classList.remove("ml-12", "md:ml-60");
      content.classList.add("ml-12");
    }
  };
  const handleOptionSelect = () => {};

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem('profilePicture')

    try {
      const response = await axios.get("http://localhost:8000/api/v1/logout");
      console.log("Logout successful:", response.data);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const pic = localStorage.getItem("profilePicture");

  return (
    <>
      <div>
        <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
          <div className="logo ml-12 dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
            BrandCollab
          </div>
          {/* SPACER */}
          <div className="grow h-full flex items-center justify-center" />
          <div className="flex-none h-full text-center flex items-center justify-center">
            <div className="flex space-x-3 items-center px-3">
              <div className="flex-none flex justify-center">
                <div className="w-8 h-8 flex ">
                  <img
                    src={pic}
                    alt="profile"
                    className="shadow rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
                {name}
              </div>
            </div>
          </div>
        </div>
        <aside className="w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] ">
          {/* open sidebar button */}
          <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B] absolute top-2 rounded-full h-12">
            <div className="flex pl-4 items-center space-x-2 ">
              <div>
                <div
                  onClick={() => handleDarkModeToggle("dark")}
                  className="moon text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => handleDarkModeToggle("light")}
                  className="sun hidden text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500 pl-10 pr-2 py-1 rounded-full text-white">
              <div className="transform ease-in-out duration-300 mr-12">
                BrandCollab
              </div>
            </div>
          </div>
          <div
            onClick={handleNavToggle}
            className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 rounded-full h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="text-white w-6 h-6 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
          {/* MAX SIDEBAR*/}
          <div className="max hidden flex-col h-full w-full">
            <div className="h-16" />

            <Link to="/BrandPostLanding">
              <div
                onClick={() => handleOptionSelect("Home")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div>Home</div>
              </div>
            </Link>
            <Link to="/brandash/post">
              <div
                onClick={() => handleOptionSelect("Search")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-5.192-5.192m-8.192 0A7.75 7.75 0 1119.243 6.75 7.75 7.75 0 0112 17.5zm0 0l-5.192-5.192"
                  />
                </svg>
                <div>Explore</div>
              </div>
            </Link>

            <Link to="/postlanding/chat">
              <div
                onClick={() => handleOptionSelect("Message")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10c0 5.523-4.477 10-10 10S1 15.523 1 10 5.477 0 11 0s10 4.477 10 10zm-3.25-1.625l-5.5-3.25-5.5 3.25M3.257 7.86L12 12.25l8.743-4.39"
                  />
                </svg>
                <div>Message</div>
              </div>
            </Link>

            <Link to="/BrandPostLanding/BrandCollabOngoing">
              <div
                onClick={() => handleOptionSelect("OngoingCollab")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 4h12M6 8h12m-6 4h6M4 4h1m0 8h1m0 8h1m2-16h10a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
                <div>On going Collab</div>
              </div>
            </Link>

            <Link to="/BrandPostLanding/BrandCollabComplete">
              <div
                onClick={() => handleOptionSelect("CompletedCollab")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>Completed Collab</div>
              </div>
            </Link>
            <div className="mb-80"></div>
            <Link to="/brandash">
              <div
                onClick={() => handleOptionSelect("Setup")}
                className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
                <div>Set Up</div>
              </div>
            </Link>
            <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Mini sidebar starts here  */}
          <div className="mini flex-col h-full w-full flex">
            <div className="h-16" />
            <Link to="/BrandPostLanding">
              <div
                onClick={() => handleOptionSelect("Home")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/brandash/post">
              <div
                onClick={() => handleOptionSelect("Search")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-5.192-5.192m-8.192 0A7.75 7.75 0 1119.243 6.75 7.75 7.75 0 0112 17.5zm0 0l-5.192-5.192"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/postlanding/chat">
              <div
                onClick={() => handleOptionSelect("Message")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 10c0 5.523-4.477 10-10 10S1 15.523 1 10 5.477 0 11 0s10 4.477 10 10zm-3.25-1.625l-5.5-3.25-5.5 3.25M3.257 7.86L12 12.25l8.743-4.39"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/BrandPostLanding/BrandCollabOngoing">
              <div
                onClick={() => handleOptionSelect("OngoingCollab")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 4h12M6 8h12m-6 4h6M4 4h1m0 8h1m0 8h1m2-16h10a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </div>
            </Link>

            <Link to="/BrandPostLanding/BrandCollabComplete">
              <div
                onClick={() => handleOptionSelect("CompletedCollab")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </Link>
            <div className="mb-80"></div>
            <Link to="/brandash">
              <div
                onClick={() => handleOptionSelect("Setup")}
                className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </Link>

            <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default TopNav;
