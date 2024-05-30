import React from "react";
import InfDashAbout from "../../pages/InfDash Cards/InfDashAbout";
import InfDashSocials from "../../pages/InfDash Cards/InfDashSocials";
import TopNav from "../navigation/TopNav";
import SideNav from "../navigation/SideNav";
import InfNavigation from "../../pages/InfDash Cards/InfNavigation";
import ChangePassword from "../../pages/InfDash Cards/ChangePassword";

const InfluencerDashboard = () => {
  return (
    <div className="bg-gray-100">
      <SideNav />
      <div className="content ml-16 transition-all ease-in-out duration-500">
        <div className="h-16" />
        <div className="flex flex-col md:flex-row ">
          <div className=" md:h-screen">
            <InfNavigation />
          </div>
          <div className="flex-1">
            <InfDashAbout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
