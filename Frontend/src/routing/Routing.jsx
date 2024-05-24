import React from "react";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import { AuthLayout } from "../auth/AuthLayout";
import MailVerify from "../auth/MailVerify";
import PreLanding from "../components/PreLanding";
import PostLanding from "../components/PostLanding";
import TopNav from "../components/navigation/TopNav";
import SideNav from "../components/navigation/SideNav";
import ChatPage from "../components/ChatPage";
import InfluencerDashboard from "../components/Influencer Dashboard/InfluencerDashboard";
import BrandDashboard from "../components/Brand Dashboard/BrandDashboard";
import InfDashAbout from "../pages/InfDash Cards/InfDashAbout";
import InfDashSocials from "../pages/InfDash Cards/InfDashSocials";
import ChangePassword from "../pages/InfDash Cards/ChangePassword";
import InfluencerChangePassword from "../components/Influencer Dashboard/InfluencerChangePassword";
import InfluencerSocials from "../components/Influencer Dashboard/InfluencerSocials";
import BranCreatePost from "../pages/BranDash Cards/BranCreatePost";
import BrandCreatePost from "../components/Brand Dashboard/BrandCreatePost";
import BrandPostLanding from "../components/BrandPostLanding";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/layout" element={<AuthLayout />} />
      <Route path="/verify" element={<MailVerify />} />
      <Route path="/prelanding" element={<PreLanding />} />
      <Route path="/postlanding" element={<PostLanding />} />
      <Route path='/BrandPostLanding' element={<BrandPostLanding/>} />
      <Route path="/topnav" element={<TopNav />} />
      <Route path="/sidenav" element={<SideNav />} />
      <Route path="/infdash">
        <Route index={true} element={<InfluencerDashboard />} />
        <Route path="/infdash/socials" element={<InfluencerSocials />} />
        <Route
          path="/infdash/changePassword"
          element={<InfluencerChangePassword />}
        />
      </Route>
      <Route path="/brandash" >
        <Route index={true} element={<BrandDashboard />}/>
        <Route path="/brandash/post" element={<BrandCreatePost/>} />
      </Route>
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/changePassword" element={<ChangePassword />} />
    </Routes>
  );
};

export default Routing;
