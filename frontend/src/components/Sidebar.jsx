import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu */}
      <ul className="mt-4 space-y-2 px-4">
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Dashboard
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Users
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Employees
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
