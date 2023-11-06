import React, { useState } from 'react'
import { PiNotificationThin } from "react-icons/pi";
import PendingUsers from './users/PendingUsers';
import RecentAproved from './users/RecentAproved';
import AllUsers from './users/AllUsers';
import { MdOutlineAirplanemodeActive, MdOutlineAirplanemodeInactive } from 'react-icons/md';
import UserListDetails from './users/UserListDetails';


function Users() {
    const [selectedSetting, setSelectedSetting] = useState('pending-users');

    const handleSettingClick = (setting) => {
      setSelectedSetting(setting);
    };
    const renderSettingContent = () => {
      switch (selectedSetting) {
        case 'pending-users':
          return <PendingUsers />;
        case 'recent-aproved-users':
          return <RecentAproved />;
        case 'manage-users':
          return <AllUsers />;
        default:
          return null;
      }
    };
  return (
    <div className='grid grid-cols-12 grid-rows-1 p-20 gap-20'>
        <div className='pt-10 col-span-2 p-10 gap-3'>
            <div  className='p-5 bg-blue-500 text-white text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('pending-users')}><PiNotificationThin /></div>
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('recent-aproved-users')}><MdOutlineAirplanemodeInactive /></div>
            <div className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('manage-users')}><MdOutlineAirplanemodeActive /></div>
        </div>

        {/* Main part with Users   */}
        <div className='col-span-5'>
           {renderSettingContent()}
        </div>
        <UserListDetails />
    </div>
  )
}

export default Users