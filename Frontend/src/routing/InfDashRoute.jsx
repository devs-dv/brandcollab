import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InfDashAbout from '../pages/InfDash Cards/InfDashAbout'
import InfDashSocials from "../pages/InfDash Cards/InfDashSocials";

const InfDashRoute = () => {
  return (
    <div>
      <Routes path="/*">
        <Route path="about" element={<InfDashAbout />} />
        <Route path="/infdash/socials" element={<InfDashSocials />} />
      </Routes>
    </div>
  );
}

export default InfDashRoute