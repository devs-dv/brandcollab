import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SideNav = () => {
  return (
    <>
      <div className="bg-gray-800 text-white h-screen flex flex-col w-20 items-center gap-8 max-md:hidden">
        <div className=" flex flex-col items-center">
          <IoHomeOutline className="w-8 h-8 mt-5" />
          <p className="text-xs">Home</p>
        </div>
        <div className=" flex flex-col items-center">
          <CgProfile className="w-8 h-8" />
          <p className="text-xs">Profile</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoHomeOutline className="w-8 h-8" />
          <p className="text-xs">Home</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoHomeOutline className="w-8 h-8" />
          <p className="text-xs">Home</p>
        </div>
      </div>
      <div className="bg-gray-800 text-white fixed bottom-0 w-screen flex flex-row items-center justify-between md:hidden p-2">
        <div className=" flex flex-col items-center ml-5">
          <IoHomeOutline className="w-8 h-8" />
          <p className=" text-xs">Home</p>
        </div>
        <div className=" flex flex-col items-center">
          <CgProfile className="w-8 h-8" />
          <p className=" text-xs">Home</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoHomeOutline className="w-8 h-8" />
          <p className=" text-xs">Home</p>
        </div>
        <div className=" flex flex-col items-center mr-5">
          <IoHomeOutline className="w-8 h-8" />
          <p className=" text-xs">Home</p>
        </div>
      </div>
    </>
  );
};

export default SideNav;
