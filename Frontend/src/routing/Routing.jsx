import React from "react";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import {AuthLayout} from "../auth/AuthLayout";
import MailVerify from "../auth/MailVerify";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/layout" element={<AuthLayout />} />
      <Route path='/verify' element={<MailVerify/>} />
    </Routes>
  );
};

export default Routing;
