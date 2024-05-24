import React from "react";
import TopNav from "../navigation/TopNav";
import InfNavigation from "../../pages/InfDash Cards/InfNavigation";
import ChangePassword from "../../pages/InfDash Cards/ChangePassword";

const InfluencerChangePassword = () => {
  return (
    <div className="bg-gray-100 ">
      <TopNav />
      <div className="flex flex-col md:flex-row">
        <div className=" sticky top-0 md:left-0 md:h-screen ">
          <InfNavigation />
        </div>
        <div className="flex-1">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default InfluencerChangePassword;
