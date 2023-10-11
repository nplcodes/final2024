import React, { useContext } from 'react'
import { FaBell } from 'react-icons/fa';
import NotificationBadge from './notification/UseableNotifactionIcon';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function StaffHomePage() {
    const user = useContext(UserContext);

    const notificationCount = 5; // Example notification count

  return (
    <div className=''>
        <div className='bg-slate-200 p-5'>
            <p>Welcome Mr. Staff {user.state.user.fullName}</p>
        </div>
        {/* Three cards ........ */}

        <div className="grid grid-cols-3 grid-rows-1 gap-4 p-32">
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <Link to="/Home/staff-issue-page">
                    <p className='text-4xl'>2</p>
                    <div className='text-2xl text-red-500'>New Issues</div>
                </Link>
            </div>
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <Link to="/Home/staff-book-list">
                <div className="relative inline-block">
                    <AiOutlineCalendar className="text-4xl text-blue-500" />
                    {notificationCount > 0 && <NotificationBadge count={notificationCount} />}
                </div>
            </Link>
            </div>
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <Link to="/Home/staff-notifications">
                <div className="relative inline-block">
                    <FaBell className="text-4xl text-blue-500" />
                    {notificationCount > 0 && <NotificationBadge count={notificationCount} />}
                </div>
                </Link>
                </div>       
         </div>
    </div>
  )
}

export default StaffHomePage