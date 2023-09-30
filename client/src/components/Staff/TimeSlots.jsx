import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BiMessageAltEdit } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

function TimeSlots() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSave = () => {
    // Add your save logic here
    // This is where you would save the time slot
    // For demonstration, we'll just log a message
    console.log('Time slot saved!');
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-blue-500 text-2xl">Time Slots</p>
      </div>

      <div className="flex pt-20">
        <div className="bg-gray-200 w-32 flex flex-col items-center gap-2 pt-10 ">
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white">
            <AiOutlineStar />
          </p>
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white">
            <SlCalender />
          </p>
          <p className="text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white">
            <BiMessageAltEdit />
          </p>
        </div>

        <div className="w-full ml-4">
          <div className="grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="p-10">
              <button
                onClick={toggleForm}
                className="mb-4 p-2 flex justify-center items-center rounded-md gap-1 bg-blue-400 text-white"
              >
                <BsPlus className="text-xl" />
                New
              </button>

              {showForm && (
                <div>
                  <div className="pb-4">
                    <div>
                      <input type="radio" name="noon" /> Before Noon
                    </div>
                    <div>
                      <input type="radio" name="noon" /> After Noon
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block mb-3 font-bold text-gray-700">Select Day of the Week:</label>
                    <select className="px-4 py-2 border rounded-lg w-full">
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <label className="block mb-2 font-bold text-gray-700">Start Time:</label>
                      <input type="time" className="border rounded-md w-full" />
                    </div>
                    <div>
                      <label className="block mb-2 font-bold text-gray-700">End Time:</label>
                      <input type="time" className="border rounded-md w-full" />
                    </div>
                  </div>
                  <button
                    onClick={handleSave}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Schedule
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlots;
