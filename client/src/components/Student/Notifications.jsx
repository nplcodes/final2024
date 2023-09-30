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
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer' onClick={() => handleSettingClick('new')}><PiNotificationThin /></div>
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer' onClick={() => handleSettingClick('recent')}><AiOutlineProfile  /></div>
            <div className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer' onClick={() => handleSettingClick('unknown')}><RiChatSettingsLine /></div>
        </div>
        {/* Main part with Notifications   */}
         {renderSettingContent()}

    </div>
  )
}

export default Notifications