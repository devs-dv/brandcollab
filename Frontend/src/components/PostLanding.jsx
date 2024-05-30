import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import StatsDashboardInfluencer from "./StatsDashboardInfluencer";
import ChatPage from "./ChatPage";
import CollabComplete from "./CollabComplete";
import InfluencerDashboard from "./Influencer Dashboard/InfluencerDashboard";
import SideNav from "./navigation/SideNav";

const PostLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");

  useEffect(() => {
    const setDark = (val) => {
      if (val === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initially set the theme based on the state
    // hi this is dv
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

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to render main content based on selected option
  const renderMainContent = () => {
    switch (selectedOption) {
      case "Home":
        return <div> <StatsDashboardInfluencer /> </div>;
      case "Search":
        return <div> <JobListing /> </div>;
      case "Message":
        return <div> < ChatPage/> </div>;
      case "OngoingCollab":
        return <div>Ongoing Collaboration Content</div>;
      case "CompletedCollab":
        return <div> <CollabComplete /> </div>;
      case "Setup":
        return <div> <InfluencerDashboard /> </div>;
      default:
        return (
          <div>
            <StatsDashboardInfluencer />
          </div>
        );
    }
  };

  return (
    <div>
      {/* <SideNav/>
      {/* <main className="content ml-12 transition-all ease-in-out duration-500 ">
        <div className="h-16" />
        {/* Your main content starts here */}
        {renderMainContent()}

        {/* Your main content ends here */}
      {/* </main> */} 
    </div>
  );
};

export default PostLanding;
