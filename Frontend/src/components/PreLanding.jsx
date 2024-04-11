import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../customComponents/Button';

const PreLanding = () => {
  return (
    <div>
      <div>
        <div className="bg-black text-white h-screen">
          <nav className="flex justify-between items-center py-4 px-8">
            <span className="text-xl font-bold">BrandCollab</span>
            <div className="flex space-x-4">
              <Link className="hover:text-gray-300" href="#">
                About Us
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Pricing
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Contact Us
              </Link>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Start now
              </Button>
            </div>
          </nav>
          <header className="flex flex-col items-center justify-center text-center space-y-6 py-24 px-8">
            <h1 className="text-6xl font-bold leading-tight">
              Connect with Influencers
              <br />
              in 28 days
            </h1>
            <p className="text-xl">
              A platform dedicated to bridging the gap between brands and
              influencers.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Get Started Now
            </Button>
          </header>
          <div className="absolute bottom-0 right-0 p-8">
            <Button className="bg-white text-black hover:bg-gray-100">
              Book my Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLanding