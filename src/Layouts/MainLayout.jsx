import React from "react";
import Navbar from "../components/Navbars/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer bg={"bg-[#F3F3F3]"}></Footer>
    </>
  );
};

export default MainLayout;
