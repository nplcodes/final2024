import React from 'react'
import { FcCancel } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function MyTimeSlots() {
  return (
    <div>
        <div>
        <div className='flex flex-row gap-2 w-full justify-between'>
            {/* time slots */}
            <div className='flex gap-2 pl-3'>
              <div className='flex gap-3'>
                <p>12:00 p.m</p>
                <p>-</p>
              </div>
              <p>1:30 p.m</p>
            </div>
            <div className='ml-4'>
            <Link to="#">
               <button className='pl-3 pr-3 text-white'>
                 <FcCancel />
               </button>
              </Link>            
              </div>
          </div>
        </div>
    </div>
  )
}

export default MyTimeSlots