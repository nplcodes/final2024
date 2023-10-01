import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs';

function CreateNewSlot() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const handleSave = () => {
      console.log('Time slot saved!');
    };
  return (
    <div className='p-10'>
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
                    Set slot
                  </button>
                </div>
              )}
    </div>
  )
}
export default CreateNewSlot