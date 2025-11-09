import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const DashBoardLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 🌌 Background gradient (from ChoseUs component) */}
      <div className="absolute inset-0 bg-[#041d16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.7)_0%,_rgba(5,45,31,0.95)_60%,_rgba(2,20,15,1)_100%)]"></div>
      </div>

      {/* Navbar */}
      

      {/* Content area */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full ">
        {/* Sidebar */}
        <div className="p-4 text-white mb-12">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 bg-[#0c3b2b]/40 backdrop-blur-md p-6 rounded-xl border border-green-900/20 shadow-lg text-gray-100">
         
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
