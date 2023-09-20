import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`bg-white text-white h-screen w-40  border border-r-1${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <span className="text-lg font-semibold text-black">Username</span>
      </div>
      <nav className="mt-6">
        <a
          href="w"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaHome className="mr-2" />
          Home
        </a>
        <a
          href="g"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaUser className="mr-2" />
          Issues
        </a>
        <Link to="/Home/staff">
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaCog className="mr-2" />
          Staff
        </a>
        </Link>

        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaCog className="mr-2" />
          Appointment
        </a>
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaCog className="mr-2" />
          Report
        </a>
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-gray-700"
        >
          <FaCog className="mr-2" />
          Board
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
