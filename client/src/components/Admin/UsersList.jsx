import React, { useState } from 'react'
import { PiNotificationThin } from "react-icons/pi";
import { RiChatSettingsLine } from "react-icons/ri";
import { AiOutlineProfile, AiOutlineInfoCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import PendingUsers from './users/PendingUsers';
import RecentAproved from './users/RecentAproved';
import AllUsers from './users/AllUsers';


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
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('pending-users')}><PiNotificationThin /></div>
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('recent-aproved-users')}><RiChatSettingsLine /></div>
            <div className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'  onClick={() => handleSettingClick('manage-users')}><AiOutlineProfile /></div>
        </div>

        {/* Main part with Users   */}
        <div className='col-span-5'>
           {renderSettingContent()}
        </div>
        <div className='max-w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 col-span-5'>
            <p className='pb-5'>User Details</p>
            <div className='grid grid-cols-4 grid-rows-1 gap-2'>
                {/* Left part */}
                <div className='col-span-1'>
                    <img  className="w-32 h-32 rounded-md" src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="" />
                    <div className='flex items-center justify-center pt-2 italic'>Student</div>
                </div>
                {/* Right part */}
                <div className='col-span-3 pl-5'>
                    <div className='top'>
                        <div className='text-2xl font-bold'>Amin Yazid</div>
                        <div className='pl-5 italic'>Student</div>
                    </div>
                    <div className='pt-5 flex items-center gap-2'>
                        <GrGroup className='text-2xl'/>
                        <div>
                            <div>Faculty: I.C.T</div>
                            <div>Level 4</div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className='flex gap-2 items-center'>
                            <AiOutlineInfoCircle />
                            <p>Personal info</p>
                        </div>
                        <div className='pt-3 flex flex-col gap-2'>
                            <div className='flex gap-6'>
                                <p>Phone</p>
                                <p>0780922562</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Address</p>
                                <p>manzi12@gmail.com</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Birthday</p>
                                <p>12 jun 2000</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Gender</p>
                                <p>Male</p>
                            </div>
                            <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-3 rounded-sm"> Aprove
                            </button>
                            <button className="bg-red-500 ml-3 text-white p-2 mt-3 rounded-sm"> Reject
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users