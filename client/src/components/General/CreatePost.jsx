import React from 'react'
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'

function CreatePost() {
  return (
    <div className='grid grid-cols-2 grid-rows-1 p-10 gap-10'>
        <div className='p-32 pt-10'>
            <div className='flex flex-col gap-2'>
                <label>Post Title</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex flex-col gap-2'>
                <label>Post Content</label>
                <textarea rows="10" cols="60" placeholder='Text ...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className=''>
            <div class="flex  w-full items-center pt-5">
                <div class="rounded-md border border-gray-100 bg-white p-4 shadow-md">
                    <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="text-gray-600 font-medium">Upload file</span>
                    </label>
                    <input id="upload" type="file" class="hidden" />
                </div>
                </div>
            </div>
            <div className=' pt-5'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-md">
                Post
            </button>            
        </div>
        </div>
        <div className='bg-gray-100 p-10 '>
            {/* Search */}
            <div className='pb-10'>
                <input type="text" placeholder='search...' className=' rounded-md focus: border-none focus:outline-0' />
            </div>
            {/* card */}
            <div className='bg-white w-[70%] rounded-md p-5'>
                <div className='flex gap-3'>
                    <img  className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    <div>
                        <p className='font-bold'>We are hiring Devs</p>
                        <p className='text-sm text-gray-400 pl-5'>9 min ago</p>
                    </div>
                </div>
                <div className='flex gap-5 p-7 pb-3'>
                    <div><BiMessageRounded className='text-xl'/></div>
                    <div><FiEdit className='text-xl' /></div>
                    <div><AiOutlineHeart className='text-xl'/></div>
                    <div><AiOutlineDelete className='text-red-500 text-xl' /></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost