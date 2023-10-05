import React from 'react'
import { Link } from 'react-router-dom'
import { BsFileEarmarkPdf, BsFiletypeDocx, BsSend } from "react-icons/bs";

function ManageIssue() {
  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-4 min-h-screen p-10'>
        <div className='p-10 '>
            <div className='pb-5'>Me/ Admin</div>
            <div className='pb-10'><p className='text-2xl italic'>Class window have already broken, recently</p></div>
            <div className=''>
                <p>
                placeholder text commonly used to demonstrate the visual form of a document or a typefac
                </p>
                <div className='flex p-2'>
                    <p className='cursor-pointer'> &#128512; &#128516;</p>
                    </div>
            </div>
            <div className='pt-3'>Assigned to: </div>
            <div className='pb-5 pt-3'>
                <input type="file" />
            </div>
            <div>
            <div>
                <Link to="#">
               <button
              className="
                bg-blue-500
                hover:border-none
                text-white
                py-1
                px-3
                sm
                rounded-md focus:border-transparent focus:outline-none focus:shadow-outline-none
              "
            >
              Attach file
            </button>
            </Link>
               </div>
            </div>
        </div>
        <div className='bg-gray-100'>
            <div className='p-10'>
                <p className='pb-10'>Attached Documents.... </p>
                    <div className="grid grid-cols-4 gap-2 pb-10">
                        <div className='cursor-pointer w-20 h-20 bg-white flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'><BsFiletypeDocx className='text-6xl'  /></div>
                        <div className='cursor-pointer w-20 h-20 bg-white flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'><BsFileEarmarkPdf className='text-6xl' /></div>
                        <div className='cursor-pointer w-20 h-20 bg-white flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'></div>
                        <div className='cursor-pointer w-20 h-20 bg-white flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'></div>
                    </div>
                    <div className=''>
                
                        <div>
                           <textarea name="comments" id="" className='w-full  rounded-md focus:outline-none p-3 bg-transparent' placeholder='Type your comment ....'></textarea>
                        </div>
                        <div className='pt-5'>
                            <button
                            className="
                                bg-blue-500
                                hover:bg-blue-700
                                text-white
                                py-1
                                px-3
                                sm
                                rounded-md focus:border-transparent focus:outline-none focus:shadow-outline-none
                            "
                            >
                            <BsSend />
                            </button>
                            </div>
                        <div class=" max-w-sm flex flex-col space-y-4 pt-10">
                        <p>
                           3 Comments ... <span className='italic underline text-blue-500 cursor-pointer'>see all</span>
                        </p>
                        <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                            <div class="flex items-center space-x-4">
                            <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full" />
                            </div>
                            <div class="flex-grow p-3">
                            <div class="font-semibold text-gray-700">
                                Antério Vieira da Silva Lima
                            </div>
                            <div class="text-sm text-gray-500">
                                You: Thanks, sounds good! . 8hr
                            </div>
                            </div>
                            <div class="p-2">
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1" />
                            </div>
                        </div>
                        
                        <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                            <div class="relative flex items-center space-x-4">
                            <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full" />
                            <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                            </div>
                            <div class="flex-grow p-3">
                            <div class="font-semibold text-gray-700">
                                Antério Vieira da Silva Lima
                            </div>
                            <div class="text-sm text-gray-500">
                                @ktquez sent a image . 2hr
                            </div>
                            </div>
                            <div class="p-2">
                            <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                            </div>
                        </div>
                        </div>
                    </div>
    
            </div>
        </div>
    </div>
  )
}

export default ManageIssue