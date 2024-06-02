import React from "react";
import TopNav from "../navigation/BrandSideNav";
import BranNavigation from "../../pages/BranDash Cards/BranNavigation";
import BranCreatePost from "../../pages/BranDash Cards/BranCreatePost";
import BrandSideNav from '../navigation/BrandSideNav'

const BrandCreatePost = () => {
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
              <BranCreatePost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCreatePost;
