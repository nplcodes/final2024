import { GrUserSettings } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { GiConvergenceTarget } from "react-icons/gi";
import { CiFolderOn } from "react-icons/ci";
import { PiStudentLight } from "react-icons/pi";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";





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
      className={`bg-white text-white h-screen w-48 border border-r-1${
        isSidebarOpen ? 'block' : 'hidden md:block'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <Link to="#">
        <div className="p-3 border-b border-1">
          <div className='text-black text-4xl font-bold'><img src="data:image/jpeg;base64,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" alt="" className='w-10 h-10'/></div>
        </div>
        </Link>
      </div>
      <div className="mt-6 flex flex-col gap-2 justify-center">
        <Link
          to={link}
          className="text-gray-500"
        >
          <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
            <AiOutlineHome className="text-xl" />Home
          </div>
        </Link>

        {userInfo.role === 'Staff' && (
            <Link to="/Home/board-issues" className="text-gray-500">
                    <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
                      <GiConvergenceTarget className="text-xl" />Chat Room
                    </div>
            </Link>
        )}

        <Link to="/Home/settings" className="text-gray-500">
          <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
            <BsInfoCircle className="text-xl" /> Info
          </div>
          
          {userInfo.role === 'Admin' && (
          <Link to="/Home/school" className="text-gray-500">
            <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
              <PiStudentLight className="text-xl" /> Students
            </div>
          </Link>

          )}
          
          {userInfo.role === 'Admin' && (
          <Link to="/Home/school/staff" className="text-gray-500">
            <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
              <FaPersonMilitaryToPerson  className="text-xl" /> Staffs
            </div>
          </Link>
          )}

        </Link>
        <Link to="/Home/admin/setting" className="text-gray-500">
              <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
                  <GrUserSettings className="text-xl" />Settings
              </div>
        </Link>
        {userInfo.role === 'Staff' && (
            <Link to="/Home/staff-report" className="text-gray-500">
                    <div className='p-3  rounded-md hover:bg-blue-300 hover:text-white flex gap-2 items-center'>
                      <CiFolderOn  className="text-xl" />Report
                    </div>
            </Link>
        )}

      </div>
    </div>
  );
};
export default Sidebar;