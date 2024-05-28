import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className=" flex gap-10">
        <Link to="/layout">Layout</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/verify">Verification</Link>
        <Link to="/prelanding"> Pre Landing </Link>
        <Link to="/postlanding"> Post Landing </Link>
        <Link to="/topnav">Top Nav</Link>
        <Link to="/sidenav">Side Nav</Link>
        <Link to="/infdash">Influecer Dashboard</Link>
        <Link to="/brandash">Brand Dashboard</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/BrandPostLanding">Brand Post Landing</Link>
        <Link to="/Joblisting">Job Listing</Link>
        <Link to="/StatsDashboardInfluencer">Stats Dashboard </Link>
      </div>
    </div>
  );
}

export default Home