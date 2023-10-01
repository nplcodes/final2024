import React, { useState } from 'react';
import { GoImage } from 'react-icons/go';
import { PiPasswordLight } from 'react-icons/pi';
import { BiSolidUserDetail } from 'react-icons/bi';
import UserDetailComponent from './UserDetailComponent'
import PasswordComponent from './PasswordComponent'
import ImageComponent from './ImageComponent'

// Separate components for each setting

function AccountSettingsAdmin() {
  const [selectedSetting, setSelectedSetting] = useState('user-detail');

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };

  const renderSettingContent = () => {
    switch (selectedSetting) {
      case 'user-detail':
        return <UserDetailComponent />;
      case 'image':
        return <ImageComponent />;
      case 'password':
        return <PasswordComponent />;
      default:
        return null;
    }
  };

  return (
    <div className='p-10'>
      <div>
        <p className='text-blue-500 text-2xl'>Account Settings</p>
      </div>

      <div className='w-full flex p-10'>
        <div className='min-w-[20%] h-full flex flex-col items-center pt-10 gap-2'>
          <p
            className='text-3xl cursor-pointer bg-blue-500 text-white p-2 hover:bg-blue-500 hover:text-white'
            onClick={() => handleSettingClick('user-detail')}
          >
            <BiSolidUserDetail />
          </p>
          <p
            className='text-3xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'
            onClick={() => handleSettingClick('image')}
          >
            <GoImage />
          </p>
          <p
            className='text-3xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'
            onClick={() => handleSettingClick('password')}
          >
            <PiPasswordLight />
          </p>
        </div>

        <div className='w-[80%] h-auto bg-white border p-4'>
          {renderSettingContent()}
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsAdmin;
