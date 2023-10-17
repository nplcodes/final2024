import { GrAlarm, GrUserSettings } from "react-icons/gr";
import { BsInfoCircle, BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { PiNewspaperClipping, PiNotionLogoThin } from "react-icons/pi";

import { Link } from 'react-router-dom';
import { IoCreateOutline, IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({ isSidebarOpen }) => {
  const [link] = useState(null);

  return (
    <div
      className={`bg-white text-white h-screen w-40 border border-r-1${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <Link to="#">
        <div className="p-3 border-b border-1">
          <p className='text-black text-4xl font-bold'><PiNotionLogoThin className='text-4xl'/></p>
        </div>
        </Link>
      </div>
      <div className="mt-6 flex flex-col items-center gap-2 justify-center">
        <Link
          to={link}
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
        <Link to="/Home/staf-post" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <IoCreateOutline className="text-xl" />
          </div>
        </Link>

        <Link to="/Home/settings" className="text-gray-500">
          <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <BsInfoCircle className="text-xl" />
          </div>
        </Link>
        <Link to="/Home/admin/setting" className="text-gray-500">
              <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
                  <GrUserSettings className="text-xl" />
              </div>
        </Link>
        <Link to="/Home/timeslots" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <GrAlarm className="text-xl" />
          </div>
        </Link>
            <Link to="/Home/admin/manage" className="text-gray-500">
                    <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
                      <RxDashboard className="text-xl" />
                    </div>
            </Link>
      </div>
    </div>
  );
};
export default Sidebar;