import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import { CiLocationOn } from 'react-icons/ci'

function AppointmentsForSingleLeader() {
  return (
        <div className=''>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://police.gov.rw/fileadmin/user_upload/jc-ujeneza.jpg" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Requesting new jungle boots </p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Rogistics Officer</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />1:00 pm</p>
                                        <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                        <p className='flex items-center gap-2 text-slate-500'> <CiLocationOn />Ishema hall</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                              <p><FcCancel /></p>
                            </div>
                        </div>
                        <div className= 'flex flex-row justify-between p-10 mb-1  border-b border-b-1'>
                            <div className='flex gap-5'>
                                <img className='w-10 h-10 rounded-full' src="https://police.gov.rw/fileadmin/user_upload/jc-ujeneza.jpg" alt="" />
                                <div>
                                    <p className='text-xl font-bold pb-2'>Personal matter</p>
                                    <div className='flex gap-2'>
                                        <p className='text-slate-500'>Rogistics Officer</p>
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
                    </div> 
  )
}

export default AppointmentsForSingleLeader

