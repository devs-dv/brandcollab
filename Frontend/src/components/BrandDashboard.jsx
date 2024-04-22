import React from 'react'
import TopNav from './navigation/TopNav';
import SideNav from './navigation/SideNav';
import BranDashAbout from '../pages/BranDash Cards/BranDashAbout';

const BrandDashboard = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <TopNav />
        <div className="flex flex-col md:flex-row">
          <div className=" md:sticky md:top-0 md:left-0 md:h-screen bg-gray-800 text-white">
            <SideNav />
          </div>
          <div className="flex-1">
            <BranDashAbout/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandDashboard