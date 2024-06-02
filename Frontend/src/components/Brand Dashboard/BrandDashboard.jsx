import React from "react";
import TopNav from "../navigation/BrandSideNav";
import BrandSideNav from "../navigation/BrandSideNav";
import BranDashAbout from "../../pages/BranDash Cards/BranDashAbout";
import BranNavigation from "../../pages/BranDash Cards/BranNavigation";

const BrandDashboard = () => {
  return (
    <>
      <div className="bg-gray-100">
        <BrandSideNav />
        <div className="content ml-16 transition-all ease-in-out duration-500">
          <div className="h-16" />
          <div className="flex flex-col md:flex-row ">
            <div className=" md:h-screen">
              <BranNavigation />
            </div>
            <div className="flex-1">
              <BranDashAbout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandDashboard;
