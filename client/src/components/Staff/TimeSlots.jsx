import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import CreateNewSlot from './timeslots/CreateNewSlot';
import MyTimeSlots from './timeslots/MyTimeSlots';

function TimeSlots() {
  const [selectedSetting, setSelectedSetting] = useState('my-slots');

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };
  const renderSettingContent = () => {
    switch (selectedSetting) {
      case 'create-new-slot':
        return <CreateNewSlot />;
      case 'my-slots':
        return <MyTimeSlots />;

      default:
        return null;
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-blue-500 text-2xl">Time Slots</p>
      </div>
      <div className="flex pt-10">
        <div className="w-32 flex flex-col items-center gap-2 pt-10 ">
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 text-white bg-blue-500 hover:text-white" onClick={() => handleSettingClick('my-slots')}>
            <AiOutlineStar />
          </p>
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white" onClick={() => handleSettingClick('create-new-slot')}>
            <SlCalender />
          </p>
        </div>
        <div className="w-full ml-4">
          <div className="grid col-span-5">
            <div className="p-10">
              {renderSettingContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlots;
