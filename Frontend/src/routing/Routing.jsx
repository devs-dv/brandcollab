import React from "react";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import {AuthLayout} from "../auth/AuthLayout";
import MailVerify from "../auth/MailVerify";
import PreLanding from "../components/PreLanding";
import PostLanding from "../components/PostLanding";
import TopNav from '../components/navigation/TopNav';
import SideNav from '../components/navigation/SideNav'
import InfluencerDashboard from '../components/InfluencerDashboard'
import Chat from "../components/Chat";
import BrandDashboard from "../components/BrandDashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/layout" element={<AuthLayout />} />
      <Route path='/verify' element={<MailVerify/>} />
      <Route path='/prelanding' element={<PreLanding/>} />
      <Route path="/postlanding" element={<PostLanding/>} />
      <Route path='/topnav' element={<TopNav/>} />
      <Route path="/sidenav" element={<SideNav/>} />
      <Route path='/infdash' element={<InfluencerDashboard/>} />
      <Route path='/brandash' element={<BrandDashboard/>} />
      <Route path='/chat' element={<Chat/>} />
    </Routes>
  );
};

export default Routing;
