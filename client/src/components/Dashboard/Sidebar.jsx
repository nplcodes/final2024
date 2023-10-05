import React from 'react';
import { GrAlarm } from "react-icons/gr";
import { LuCalendarClock } from "react-icons/lu";
import { BsInfoCircle, BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { PiNewspaperClipping, PiNotionLogoThin } from "react-icons/pi";

import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from "react-icons/io5";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`bg-white text-white h-screen w-40 border border-r-1${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <Link to="/Home/issue-page">
        <div className="p-3">
          <p className='text-black text-4xl font-bold'><PiNotionLogoThin className='text-4xl'/></p>
        </div>
        </Link>
      </div>
      <div className="mt-6 flex flex-col items-center gap-2 justify-center">
        <Link
          to="/Home/issue-page"
          className="text-gray-500"
        >
          <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <AiOutlineHome className="text-xl" />
          </div>
        </Link>
        
        <Link to="/Home/staff" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <BsPeople className="text-xl" />
          </div>
        </Link>

        <Link to="/Home/book" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <LuCalendarClock className="text-xl" />
          </div>
        </Link>


        <Link to="/Home/notifications" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <IoNotificationsOutline className="text-xl" />
          </div>
        </Link>

        <Link to="/Home/general-board" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <PiNewspaperClipping className="text-xl" />
          </div>
        </Link>

        <Link to="/Home/settings" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <BsInfoCircle className="text-xl" />
          </div>
        </Link>

        <Link to="/Home/timeslots" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <GrAlarm className="text-xl" />
          </div>
        </Link>
      </div>
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
                  to="/Home/staf-post"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Post
              </Link>
              <Link
                  to="/Home/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Settings
              </Link>
              <div className='text-black'>Admin Menus</div>
              <Link
                  to="/Home/admin/manage"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Manage
              </Link>
              <Link
                  to="/Home/admin/setting"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                 Settings
              </Link>
    </div>
  );
};
export default Sidebar;
