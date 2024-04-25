import React from 'react'
import TopNav from '../navigation/TopNav';
import BranNavigation from '../../pages/BranDash Cards/BranNavigation';
import BranCreatePost from '../../pages/BranDash Cards/BranCreatePost';

const BrandCreatePost = () => {
  return (
    <div className="bg-gray-100 ">
      <TopNav />
      <div className="flex flex-col md:flex-row">
        <div className=" sticky top-0 md:left-0 md:h-screen ">
          <BranNavigation />
        </div>
        <div className="flex-1">
          <BranCreatePost />
        </div>
      </div>
    </div>
  );
}

export default BrandCreatePost