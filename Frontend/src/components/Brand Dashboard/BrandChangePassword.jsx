import React from 'react'
import BranNavigation from "../../pages/BranDash Cards/BranNavigation";
import SideNav from "../navigation/BrandSideNav";
import ChangePassword from "../../pages/InfDash Cards/ChangePassword";


const BrandChangePassword = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <SideNav />
        <div className="content ml-16 transition-all ease-in-out duration-500">
          <div className="h-16" />
          <div className="flex flex-col md:flex-row ">
            <div className=" md:h-screen">
              <BranNavigation />
            </div>
            <div className="flex-1">
              <ChangePassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandChangePassword