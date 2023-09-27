import React from 'react'
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'
import { SlCalender } from "react-icons/sl";
import { BiMessageAltEdit } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsEye } from "react-icons/bs";

function AppointmentsList() {
  return (
    <div className='p-10'>
        <div>Recents Appointments </div>
        {/* Booking left part */}
        {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        <div className='w-full flex p-10'>
            <div className='bg-gray-200 min-w-[5%] h-auto flex flex-col items-center gap-2 justify-center'>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><AiOutlineStar /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <SlCalender /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <BiMessageAltEdit /></p>
            </div>
            <div className='w-[95%] h-auto grid grid-cols-6'>
                {/* Leaders info left part */}
                {/* ...................................... */}
                <div className='h-auto bg-slate-100 col-span-1 flex flex-col p-5'>
                    <img className='w-32 h-32 rounded-md'src="https://police.gov.rw/fileadmin/user_upload/KANYA2.png" alt="div" />
                    <p className='self-center text-md'>Admin</p>
                    <div className='bg-white mt-3'>
                        <div className='p-2 bg-blue-500 mb-1 flex justify-between items-center'>
                            <p>Book </p>
                            <AiOutlineClockCircle />
                        </div>
                        <div className=''>
                            <div className='bg-slate-300 p-1 mb-1 cursor-pointer'>
                                <p>1:00-2:00</p>
                            </div>
                            <div className='bg-slate-300 p-1 mb-1 cursor-pointer'>
                            <p>2:00-3:00</p>
                            </div>
                            <div className='bg-slate-300 p-1  cursor-pointer'>
                            <p>4:00-5:00</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    {/* codes here */}
                    <div className='p-5'>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1690&q=80" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Advice</p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Amin Yazid</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:00 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />Conference hall</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                              <p><BsEye /></p>
                            </div>
                        </div>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://media.istockphoto.com/id/1127788799/photo/young-woman-wearing-casual-red-sweater-over-isolated-background-looking-away-to-side-with.jpg?s=2048x2048&w=is&k=20&c=6HeGt3gJPJaJ1v6SQNRo70WyuZrE0z0U3m5s_0zmtj4=" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Personal </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Kety Bozz</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:45 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />Office </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                              <p className='cursor-pointer'><BsEye /></p>
                            </div>
                        </div>
                    </div>                    
                </div>
                </div>
            </div>
        </div>
  )
}

export default AppointmentsList