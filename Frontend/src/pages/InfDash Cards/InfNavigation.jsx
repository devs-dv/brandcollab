import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePassword } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const InfNavigation = () => {
  return (
    <div className="w-full p-6 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6 md:grid-rows-3 grid max-md:grid-cols-3 gap-4 relative">
        <Link to="/infdash" className="flex flex-col items-center  space-y-2 border-b">
          <CgProfile className="lg:text-3xl text-4xl" />
          <p className="text-xs">About</p>
        </Link>
        <Link
          to="/infdash/socials"
          className="flex flex-col items-center  space-y-2 border-b"
        >
          <TiSocialInstagram className="lg:text-3xl text-4xl" />
          <p className="text-xs">Socials</p>
        </Link>
        <Link
          to="/infdash/changePassword"
          className="flex flex-col items-center  space-y-2"
        >
          <MdOutlinePassword className="lg:text-3xl text-4xl" />
          <p className="text-xs">
            Change
            <br />
            Password
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InfNavigation;
