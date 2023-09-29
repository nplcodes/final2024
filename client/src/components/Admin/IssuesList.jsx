import React from 'react'
import { BsDot } from "react-icons/bs";


function IssuesToAssign() {
  return (
    <div className='flex p-20 gap-20'>
        
        {/* Main part with IssuesToAssign   */}
        <div className='flex flex-col mx-auto justify-center'>
        <p className='text-blue-500'>Assign Issue To Leader</p>
            <div className='pb-10'>
            </div>
            <p className='pb-3 font-bold'>Today</p>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4 mb-3  cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-red-500 text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Amin Yazid</div>
                    <div className='text-slate-400'>your issue escaled o high level</div>
                </div>
                    <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 mt-3 rounded-sm"> Assign</button>
                </div>            
               </div>
            {/* today 2 */}
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4  mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-red-500 text-4xl'><BsDot/></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div>Ketty Bashabe</div>
                    <div className='text-slate-400'>Admin posted on Board</div>
                </div>
                    <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 mt-3 rounded-sm"> Assign</button>
                </div>            
               </div>
            {/* Yestarday */}
            <p className='pb-3 font-bold'>Yestarday</p>
            {/* Notification card */}
            <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                {/* eft contents */}
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-blue-500 text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" /></div>
                    <div>Megan Keza</div>
                    <div className='text-slate-400'>Comment on #topic</div>
                </div>
               <div>
                 <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 mt-3 rounded-sm"> Assign</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default IssuesToAssign