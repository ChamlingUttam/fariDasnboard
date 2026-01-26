import React from "react";
import { useAuthStore } from "../stores/auth.store";
import { MdMenuOpen, MdMenu } from "react-icons/md";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const { logout, authUser } = useAuthStore();

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-300">
      <div>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdMenuOpen className="cursor-pointer" fontSize={30} />
          ) : (
            <MdMenu className="cursor-pointer" fontSize={30} />
          )}
        </button>
      </div>

      <div className="flex justify-between w-full max-w-3xl ml-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-400">Welcome, 👋</h1>
          <span className="text-xl font-bold">{authUser.fullname}</span>
        </div>

        <button
          onClick={logout}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
