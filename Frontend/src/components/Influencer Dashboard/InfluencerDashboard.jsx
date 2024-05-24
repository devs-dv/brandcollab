import React from "react";
import InfDashAbout from "../../pages/InfDash Cards/InfDashAbout";
import InfDashSocials from "../../pages/InfDash Cards/InfDashSocials";
import TopNav from "../navigation/TopNav";
import SideNav from "../navigation/SideNav";
import InfNavigation from "../../pages/InfDash Cards/InfNavigation";
import ChangePassword from "../../pages/InfDash Cards/ChangePassword";

const InfluencerDashboard = () => {
  return (
    <div className="bg-gray-100 ">
      <TopNav />
      <div className="flex flex-col md:flex-row">
        <div className=" sticky top-0 md:left-0 md:h-screen ">
          <InfNavigation />
        </div>
        <div className="flex-1">
          <InfDashAbout />
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
