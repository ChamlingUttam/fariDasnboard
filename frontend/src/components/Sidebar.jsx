import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdPerson, MdSettings } from "react-icons/md";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`h-screen bg-gray-900 text-white fixed top-0 left-0 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>

      <div className={`h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700 transition-all duration-300`}>
        {isOpen && "Dashboard"}
      </div>

      <aside className="mt-4 flex flex-col gap-2 px-2">
        <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700">
          <MdHome size={24} />
          {isOpen && <span>Home</span>}
        </Link>

        <Link to="/profiles" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700">
          <MdPerson size={24} />
          {isOpen && <span>Profiles</span>}
        </Link>

        <Link to="/settings" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700">
          <MdSettings size={24} />
          {isOpen && <span>Settings</span>}
        </Link>
      </aside>
    </div>
  );
};

export default Sidebar;
