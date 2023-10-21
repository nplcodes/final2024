import React, { useState } from 'react'
import { PiNotificationThin } from "react-icons/pi";
import { RiChatSettingsLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import NewNotifications from './notifications/NewNotifications';
import RecentNotifications from './notifications/RecentNotification';
import Unknown from './notifications/Unknown';


function Notifications() {
  const [selectedSetting, setSelectedSetting] = useState('new');

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };
  const renderSettingContent = () => {
    switch (selectedSetting) {
      case 'new':
        return <NewNotifications />;
      case 'recent':
        return <RecentNotifications />;
      case 'unknown':
        return <Unknown />;
      default:
        return null;
    }
  };
  return (
    <div className='flex p-20 gap-20'>
        <div className='pt-10 flex flex-col p-10 gap-3'>
            <div  className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'new' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('new')}><PiNotificationThin /></div>
            <div  className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'recent' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('recent')}><AiOutlineProfile  /></div>
            <div className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'unknown' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('unknown')}><RiChatSettingsLine /></div>
        </div>
         {renderSettingContent()}

    </div>
  )
}

export default Notifications