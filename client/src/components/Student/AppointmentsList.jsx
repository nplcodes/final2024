import React, { useState } from 'react'
import { AiOutlineClockCircle, AiOutlineUnorderedList } from 'react-icons/ai'
import { SlCalender } from "react-icons/sl";
import { BiMessageAltEdit } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { PiNumberCircleOneThin } from "react-icons/pi";
import { BsEye } from "react-icons/bs";
import AppointmentsForSingleLeader from './Appointents/AppointmentsForSingleLeader';
import AllAppointments from './Appointents/AllAppointments';
import MakeAppointment from './Appointents/MakeAppointment';
import EditeAppointment from './Appointents/EditeAppointment';

function AppointmentsList() {
    const [selectedSetting, setSelectedSetting] = useState('single-leader-appointments');

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };
  const renderSettingContent = () => {
    switch (selectedSetting) {
      case 'single-leader-appointments':
        return <AppointmentsForSingleLeader />;
      case 'all-appointments':
        return <AllAppointments />;
      case 'make-appointment':
        return <MakeAppointment />;
        case 'edit-appointment':
            return <EditeAppointment />;
      default:
        return null;
    }
  };
  return (
    <div className='p-10'>
        <div>Appointment Page </div>
        {/* Booking left part */}
        <div className='w-full flex p-10'>
            <div className='bg-gray-200 min-w-[10%] h-auto flex flex-col items-center pt-10 gap-2'>
            <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white bg-blue-500 text-white' onClick={() => handleSettingClick('single-leader-appointments')}><PiNumberCircleOneThin /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'  onClick={() => handleSettingClick('all-appointments')}><AiOutlineUnorderedList /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'  onClick={() => handleSettingClick('make-appointment')}> <SlCalender /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'  onClick={() => handleSettingClick('edit-appointment')}> <BiMessageAltEdit /></p>
            </div>
            <div className='w-[90%] h-auto grid grid-cols-6'>
                <div className='grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5'>
                    {/* codes here */}
                    {renderSettingContent()}

                </div>
                </div>
            </div>
        </div>
  )
}

export default AppointmentsList