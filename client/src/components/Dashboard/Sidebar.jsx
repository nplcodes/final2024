import React from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
import { BsPeople } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from "react-icons/io5";

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
        <Link
          to="/Home/issue-page"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaHome className="mr-2" />
          Home
        </Link>
        
        <Link to="/Home/staff">
        <a
          href="f"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <BsPeople className="mr-2" />
          Staff
        </a>
        </Link>

        <Link
          to="/Home/book"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaCog className="mr-2" />
          Book
        </Link>
        <Link
          to="/Home/book-list"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <FaCog className="mr-2" />
          Book Lists
        </Link>
        <Link
          to="/Home/notifications"
          className="flex items-center py-2 px-4 text-black hover:bg-blue-500 hover:text-white"
        >
          <IoNotificationsOutline className="mr-2" />
          Notifications
        </Link>
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
      <div>Staff</div>
              <Link
                  to="/Home/staff-home"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                Home-staff
              </Link>
              <Link
                  to="/Home/timeslots"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Timeslots
              </Link>
              <Link
                  to=""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Settings
              </Link>
              <div className='text-black'>Admin Menus</div>
              <Link
                  to="/Home/staff/manage"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Manage
              </Link>
              <Link
                  to="/Home/staff/setting"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Settings
              </Link>
    </div>
  );
};

export default Sidebar;
