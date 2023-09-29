import React from 'react'
import { BsDot } from "react-icons/bs";
import { PiNotificationThin } from "react-icons/pi";
import { RiChatSettingsLine } from "react-icons/ri";
import { AiOutlineProfile, AiOutlineInfoCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";


function Users() {
  return (
    <div className='flex p-20 gap-20'>
        <div className='pt-10 flex flex-col p-10 gap-3'>
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'><PiNotificationThin /></div>
            <div  className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'><RiChatSettingsLine /></div>
            <div className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'><AiOutlineProfile /></div>
        </div>
        {/* Main part with Users   */}
        <div>
            <div className='pb-10'>
                <p className='text-blue-500 text-2xl'>Users List</p>
            </div>
            <p className='pb-3 font-bold'>New</p>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-red-500 text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Amin Yazid</div>
                    <div className='text-slate-400'>your issue escaled o high level</div>
                </div>
                <p className='text-slate-400'>9:45 a.m</p> 
            </div>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-red-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                <p className='text-slate-400'>10:30 p.m</p>           
            </div>
            {/* Yestarday */}
            <p className='pb-3 font-bold'>Recently approved</p>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-blue-500 text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" /></div>
                    <div>Megan Keza</div>
                    <div className='text-slate-400'>Comment on #topic</div>
                </div>
                <p className='text-slate-400'>1:45 a.m</p>
            </div>
        </div>
        <div className='max-w-full h-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5'>
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