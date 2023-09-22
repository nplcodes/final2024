import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { BsPeople } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`bg-white text-white h-screen w-40  border border-r-1${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <span className="text-lg font-semibold text-black">DasbBord</span>
      </div>
      <nav className="mt-6">
        <a
          href="w"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaHome className="mr-2" />
          Home
        </a>
        <a
          href="g"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaUser className="mr-2" />
          Issues
        </a>
        <Link to="/Home/staff">
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <BsPeople className="mr-2" />
          Staff
        </a>
        </Link>

        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaCog className="mr-2" />
          Appointment
        </a>
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaCog className="mr-2" />
          Report
        </a>
        <Link
                to="/Home/general-board"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Board
              </Link>
        <Link
                to="/Home/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Settings
              </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
