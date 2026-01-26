import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const PageLayouts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // open by default

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Navbar */}
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Page Content */}
        <div className="p-6 flex-1 bg-gray-100 transition-all duration-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageLayouts;
