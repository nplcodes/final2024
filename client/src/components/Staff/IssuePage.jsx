import React from 'react'
import { BsDot, BsEye, BsListTask } from "react-icons/bs";
import { BiMessage, BiCommentEdit } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


function IssuePageStaff() {
  return (
    <div className='p-20 gap-20 w-full  grid grid-cols-6'>
        <div className='pt-10 flex flex-col p-10 gap-3 col-span-1'>
            <div  className='p-5 text-2xl bg-blue-400 text-white cursor-pointer'><BsListTask /></div>
            {/* <div className='p-5 text-2xl hover:bg-blue-400 hover:text-white cursor-pointer'><AiOutlineProfile /></div> */}
        </div>
        {/* Main part with IssuePageStaff   */}
        <div className='col-span-5'>
            <div className='pb-10'>
                <p className='text-blue-500'>Admin Issues Page </p>
            </div>
            <p className='pb-3 font-bold'>New</p>
            {/* Notification card */}
                        <Link to="/Home/manage-issue">
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <div className='text-red-500 text-4xl'><BsDot/></div>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1690&q=80" alt="" />
                                <div>
                                    <p className='text-xl pb-2 font-semibold  italic'>Personal </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Amin Yazid</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:00 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <BiMessage />Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Link to="/Home/manage-issue">
                                   <p className='cursor-pointer'><BsEye /></p>
                                </Link>
                                <Link to="/Home/update-issue">
                                    <p className='cursor-pointer'><BiCommentEdit /></p>
                                </Link>
                              <p className='text-red-500 cursor-pointer'><TiDeleteOutline /></p>

                            </div>
                        </div>
                        </Link>
                        {/* today 2 */}
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <div className='text-red-500 text-4xl'><BsDot/></div>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                                <div>
                                    <p className='text-xl font-semibold  italic pb-2'>Want to go home </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Berwa Emma</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />12:25 p.m</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <BiMessage />Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                              <p className='cursor-pointer'><BsEye /></p>
                              <p className='cursor-pointer'><BiCommentEdit /></p>
                              <p className='text-red-500 cursor-pointer'><TiDeleteOutline /></p>

                            </div>
                        </div>
                        {/* Issue card   */}
                        
                        {/* Yestarday */}
                        <p className='pb-3 font-bold'>Recents</p>
                        {/* Issue card */}
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <div className='text-blue-500 text-4xl'><BsDot/></div>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                <div>
                                    <p className='text-xl pb-2 font-semibold  italic'>Uniform are just getting old </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Ariane Putri</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />8:01 a.m</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <BiMessage />Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                              <p className='cursor-pointer'><BsEye /></p>
                              <p className='cursor-pointer'><BiCommentEdit /></p>
                              <p className='text-red-500 cursor-pointer'><TiDeleteOutline /></p>

                            </div>
                        </div>
        </div>
    </div>
  )
}

export default IssuePageStaff