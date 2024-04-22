import React from "react";
import InfDashAbout from "../pages/InfDash Cards/InfDashAbout";
import InfDashSocials from "../pages/InfDash Cards/InfDashSocials";
import TopNav from "./navigation/TopNav";
import SideNav from "./navigation/SideNav";
import InfDashRoute from "../routing/InfDashRoute";

const InfluencerDashboard = () => {
  return (
    <div className="bg-gray-100 ">
      <TopNav />
      <div className="flex flex-col md:flex-row">
        <div className=" md:sticky md:top-0 md:left-0 md:h-screen bg-gray-800 text-white">
          <SideNav />
        </div>
        <div className="flex-1">
          <InfDashAbout/>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
