import React from 'react'
import { BsDot } from 'react-icons/bs'

function AllUsers() {
  return (
          <div>
            <div className='pb-10'>
                <p className='text-blue-500 text-2xl'>Users List</p>
            </div>
            <p className='pb-3 font-bold'>All System's Users</p>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-green-500 text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Amin Yazid</div>
                    <div className='text-slate-400'>your issue escaled o high level</div>
                </div>
                <p className='text-slate-400'>9:45 a.m</p> 
            </div>
            {/* user card */}
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-green-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                <p className='text-slate-400'>10:30 p.m</p>           
            </div>
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-green-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                <p className='text-slate-400'>10:30 p.m</p>           
            </div>
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-green-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                <p className='text-slate-400'>10:30 p.m</p>           
            </div>
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-green-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                <p className='text-slate-400'>10:30 p.m</p>           
            </div>
    </div>
  )
}

export default AllUsers