import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`bg-white text-white h-screen w-64 ${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <img
          className="rounded-full w-10 h-10 object-cover mb-4"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <span className="text-lg font-semibold text-black">Username</span>
      </div>
      <nav className="mt-6">
        <a
          href="w"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaHome className="mr-2" />
          Dashboard
        </a>
        <a
          href="g"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaUser className="mr-2" />
          Profile
        </a>
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaCog className="mr-2" />
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
