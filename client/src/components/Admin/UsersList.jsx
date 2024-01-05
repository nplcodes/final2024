import React, { useState } from 'react'
import { PiNotificationThin } from "react-icons/pi";
import PendingUsers from './users/PendingUsers';
import RecentAproved from './users/RecentAproved';
import AllUsers from './users/AllUsers';
import { MdOutlineAirplanemodeActive, MdOutlineAirplanemodeInactive } from 'react-icons/md';


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
<div className="grid grid-cols-12 grid-rows-1 gap-4 h-screen">
  {/* Sidebar with tabs */}
  <div className="col-span-2 p-10 bg-gray-200">
    <div
      className={`p-5 text-black rounded-md cursor-pointer ${
        selectedSetting === "pending-users"
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-400 hover:text-white"
      }`}
      onClick={() => handleSettingClick("pending-users")}
    >
      Pending
    </div>
    <div
      className={`p-5 text-black rounded-md cursor-pointer ${
        selectedSetting === "recent-aproved-users"
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-400 hover:text-white"
      }`}
      onClick={() => handleSettingClick("recent-aproved-users")}
    >
      Inactive
    </div>
    <div
      className={`p-5 text-black rounded-md cursor-pointer ${
        selectedSetting === "manage-users"
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-400 hover:text-white"
      }`}
      onClick={() => handleSettingClick("manage-users")}
    >
      Active
    </div>
  </div>

  {/* Main part with Users */}
  <div className="col-span-10 p-10 bg-white">
    {renderSettingContent()}
  </div>
</div>

  )
}

export default Users