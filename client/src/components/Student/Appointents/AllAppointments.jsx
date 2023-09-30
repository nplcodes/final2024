import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import { CiLocationOn } from 'react-icons/ci'

function AllAppointments() {
  return (
        <div className=''>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Moving to Afos </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'> Academic</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:45 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />Academic Office</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                              <p><FcCancel /></p>
                            </div>
                        </div>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://police.gov.rw/fileadmin/user_upload/gumira.jpg" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Urgency querry</p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Field Officer</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:45 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />Office </p>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                              <p className='cursor-pointer'><FcCancel /></p>
                            </div>
                        </div>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Unsolved issues</p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>C.i </p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />10:45 a.m</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />C.i Office </p>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                              <p className='cursor-pointer'><FcCancel /></p>
                            </div>
                        </div>
                    </div> 
  )
}

export default AllAppointments

