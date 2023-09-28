// import { GoImage } from "react-icons/go";
// import { PiPasswordLight } from "react-icons/pi";
// import { BiSolidUserDetail } from "react-icons/bi";

// import { Link } from 'react-router-dom';

// function AccountSettingsAdmin() {
//   return (
//     <div className='p-10'>
//         <div>
//             <p className='text-blue-500 text-2xl'>Account Settings</p> 
//             </div>
//         {/* Booking left part */}
//         <div className='w-full flex p-10'>
//             <div className='bg-gray-200 min-w-[20%] h-auto flex flex-col items-center gap-2 justify-center'>
//                 <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><BiSolidUserDetail /></p>
//                 <Link to="#">
//                 <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <GoImage /></p>
//                 </Link>
//                 <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <PiPasswordLight /></p>
//             </div>
//             <div className='w-[80%] h-auto grid grid-cols-6'>
//                 <div className='grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
//                     here
//                 </div>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default AccountSettingsAdmin

import React, { useState } from 'react';
import { GoImage } from 'react-icons/go';
import { PiPasswordLight } from 'react-icons/pi';
import { BiSolidUserDetail } from 'react-icons/bi';

// Separate components for each setting
function UserDetailComponent() {
  return <div>User Detail Component Content</div>;
}

function ImageComponent() {
  return <div>Image Component Content</div>;
}

function PasswordComponent() {
  return <div>Password Component Content</div>;
}

function AccountSettingsAdmin() {
  const [selectedSetting, setSelectedSetting] = useState(null);

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
        <div className='bg-gray-200 min-w-[20%] h-auto flex flex-col items-center gap-2 justify-center'>
          <p
            className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'
            onClick={() => handleSettingClick('user-detail')}
          >
            <BiSolidUserDetail />
          </p>
          <p
            className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'
            onClick={() => handleSettingClick('image')}
          >
            <GoImage />
          </p>
          <p
            className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'
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
