import { GrUserSettings } from "react-icons/gr";
import { BsInfoCircle, BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { PiNewspaperClipping, PiNotionLogoThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { IoCreateOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiAnnouncement } from "react-icons/tfi";


const Sidebar = ({ isSidebarOpen }) => {
  const userInfo = useSelector((state)=> state.auth.user);

  const [link, setLink] = useState(null);

  useEffect(() => {
    if (userInfo && userInfo.role) {
      if (userInfo.role === 'Student') {
        setLink('/Home/issue-page');
      } else if (userInfo.role === 'Admin') {
        setLink('/Home/admin/manage');
      } else {
        setLink('/Home/staff-home');
      }
    }
  }, [userInfo]);
  

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

        {userInfo.role === 'Student' && (
        <Link to="/Home/staff" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <BsPeople className="text-xl" />
        </div>
        </Link>
        )}

        {userInfo.role === 'Student' && (
        <Link to="/Home/notifications" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <TfiAnnouncement className="text-xl" />
          </div>
        </Link>
        )}

        <Link to="/Home/general-board" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <PiNewspaperClipping className="text-xl" />
          </div>
        </Link>
        {userInfo.role === 'Staff' && (
        <Link to="/Home/staf-post" className="text-gray-500">
        <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
            <IoCreateOutline className="text-xl" />
          </div>
        </Link>
        )}

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
        {userInfo.role === 'Admin' && (
            <Link to="/Home/admin/manage" className="text-gray-500">
                    <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
                      <RxDashboard className="text-xl" />
                    </div>
            </Link>
        )}
                {userInfo.role === 'Staff' && (
            <Link to="/Home/board-issues" className="text-gray-500">
                    <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white'>
                      Board Chat
                    </div>
            </Link>
        )}
      </div>
    </div>
  );
};
export default Sidebar;