import React from 'react'
import {  AiOutlineStar } from 'react-icons/ai'
import { SlCalender } from "react-icons/sl";
import { BiMessageAltEdit } from "react-icons/bi";


function TimeSlots() {
  return (
    <div className='p-10'>
        <div>
            <p className='text-blue-500 text-2xl'>Time Slots</p> 
            </div>
        {/* Booking left part */}
        {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        <div className='w-full flex p-10'>
            <div className='bg-gray-200 min-w-[5%] h-auto flex flex-col items-center gap-2 justify-center'>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><AiOutlineStar /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <SlCalender /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <BiMessageAltEdit /></p>
            </div>
            <div className='w-[95%] h-auto grid grid-cols-6'>
                <div className='grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    {/* codes here */}
                    <div className='p-5'>
                        <div>
                            Create Time Slots
                        </div>
                    </div>                    
                </div>
                </div>
            </div>
        </div>
  )
}

export default TimeSlots