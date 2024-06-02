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

  return (
    <div className="bg-gray-100">
      <BrandSideNav />
      <div className="content ml-16 transition-all ease-in-out duration-500">
        <div className="h-16" />
        This is brand post landing
      </div>
    </div>
  );
};

export default BrandPostLanding;
