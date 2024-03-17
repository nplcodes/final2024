import React, { useState } from 'react';
import { CiChat2 } from 'react-icons/ci';
import MyTimeSlots from './timeslots/MyTimeSlots';
import SingleFeedback from './timeslots/SingleFeedback';

function TimeSlots() {
  const [selectedSetting, setSelectedSetting] = useState('my-slots');

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };
  const renderSettingContent = () => {
    switch (selectedSetting) {
      case 'my-slots':
        return <MyTimeSlots />;
      case 'feedback':
          return <SingleFeedback />;
      default:
        return null;
    }
  };

  return (
    <div className="p-5">
      <div className="flex pt-3">
        <div className="w-[10%] flex flex-col items-center gap-2 pt-5">
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 text-white bg-blue-500 hover:text-white" onClick={() => handleSettingClick('my-slots')}>
            <CiChat2 />
          </p>
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 text-white bg-blue-500 hover:text-white" onClick={() => handleSettingClick('feedback')}>
            Feedback
          </p>
        </div>
        <div className="w-[90%] ml-4">
          <div className=" ">
            <div className="p-5 relative">
              {renderSettingContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlots;
