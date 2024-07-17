import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
