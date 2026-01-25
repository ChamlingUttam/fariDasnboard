import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6 fixed top-0 left-64 right-0">
      {/* Left */}
      <h1 className="text-lg font-semibold">Dashboard</h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, Admin</span>
        <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
