import React from 'react'
import { AiOutlineIssuesClose } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'

function ManageSystem() {
  return (
    <div className='p-32 bg-gray-100'>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><FiUsers className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>100</p>
            <p className='text-2xl'>Users</p>          
          </div>
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><AiOutlineIssuesClose className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>7</p>
            <p className='text-2xl'>Issues</p>          
          </div>
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><IoNotificationsOutline className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>77</p>
            <p className='text-2xl'>Notifications</p>          
          </div>
      </div>
    </div>
  )
}

export default ManageSystem