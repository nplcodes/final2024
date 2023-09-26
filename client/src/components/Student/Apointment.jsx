import React from 'react'
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'
import { SlCalender } from "react-icons/sl";
import { BiMessageAltEdit } from "react-icons/bi";

function Apointment() {
  return (
    <div className='p-10'>
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
                    <div className="flex z-10">
                    <div className="p-12 bg-white mx-auto w-100 ">
                        <div className='pb-7'>
                        <p className='text-2xl pt-5'>Request Appointment</p>
                        </div>
                        <form className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="We want to see you"
                                name="title"
                            />
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">Priority</label>
                            <select
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                name="role"
                            >
                                <option value=" ">Select priority</option>
                                <option value="Low">Low</option>
                                <option value="High">High</option>
                                <option value="Urgency">Urgency</option>

                            </select>
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">Reasons</label>
                            <input
                                type="text"
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Your username"
                                name="username"
                            />
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">how long does it started?</label>
                            <input
                                type="text"
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Your full name"
                                name="fullName"
                            />
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">Role</label>
                            <select
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                name="role"
                            >
                                <option value=" ">Select role</option>
                                <option value="student">Student</option>
                                <option value="staff">Staff</option>
                            </select>
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Enter issue description"
                                name="description"
                            ></textarea>
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                name="category"
                            >
                                <option value="">Select category</option>
                                <option value="Welfare">Welfare</option>
                                <option value="Academic">Academic</option>
                                <option value="Rogistics">Rogistics</option>
                                <option value="Personal">Personal</option>
                            </select>
                            </div>
                            <input type="file" name="file" className="border rounded p-2" />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 w-32 rounded-md hover:bg-black text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                        >
                            Book
                        </button>
                        <p>
                        </p>
                        </form>
                    </div>
                    </div>
      </div>
                </div>
            </div>
        </div>
  )
}

export default Apointment