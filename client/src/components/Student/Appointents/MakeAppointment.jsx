import React from 'react'
import { Link } from 'react-router-dom'

function MakeAppointment() {
  return (
    <div className='pl-10'>
      <div className='flex p-5'>
        <div>
          <img  className="w-32 h-32 rounded-md" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            {/* time slots */}
            <div className='flex gap-2 pl-3'>
              <div className='flex gap-3'>
                <p>12:00 p.m</p>
                <p>-</p>
              </div>
              <p>1:30 p.m</p>
            </div>
            <div className='ml-4'>
              <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
            </div>
          </div>
          {/* Two- 2 */}
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
            <Link to="/Home/book">
               <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
              </Link>            
              </div>
          </div>
        </div>
      </div>


      <div className='flex p-5'>
        <div>
          <img  className="w-32 h-32 rounded-md" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            {/* time slots */}
            <div className='flex gap-2 pl-3'>
              <div className='flex gap-3'>
                <p>12:00 p.m</p>
                <p>-</p>
              </div>
              <p>1:30 p.m</p>
            </div>
            <div className='ml-4'>
              <Link to="/Home/book">
               <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
              </Link>
            </div>
          </div>
          {/* Two- 2 */}
          <div className='flex flex-row gap-2 w-full'>
            {/* time slots */}
            <div className='flex gap-2 pl-3'>
              <div className='flex gap-3'>
                <p>12:00 p.m</p>
                <p>-</p>
              </div>
              <p>1:30 p.m</p>
            </div>
            <div className='ml-4'>
            <Link to="/Home/book">
               <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
              </Link>          
            </div>
          </div>
        </div>
      </div>


      <div className='flex p-5'>
        <div>
          <img  className="w-32 h-32 rounded-md" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            {/* time slots */}
            <div className='flex gap-2 pl-3'>
              <div className='flex gap-3'>
                <p>12:00 p.m</p>
                <p>-</p>
              </div>
              <p>1:30 p.m</p>
            </div>
            <div className='ml-4'>
            <Link to="/Home/book">
               <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
              </Link>            
            </div>
          </div>
          {/* Two- 2 */}
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
            <Link to="/Home/book">
               <button className='bg-blue-500 pl-3 pr-3 text-white'>+</button>
              </Link>
             </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MakeAppointment