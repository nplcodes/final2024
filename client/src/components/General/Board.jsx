import React from 'react'
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { RxShare2 } from "react-icons/rx";
import { BsSend } from "react-icons/bs";
function Board() {
  return (
    <div className='Wrapper flex justify-center pt-10'>
        <div className='grid grid-cols-10 max-w-[70%] '>
        <div className='grid col-span-6 '>
            <div className='flex justify-between p-2'>
                <div className='flex items-center gap-3'>
                    <img  className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?s=2048x2048&w=is&k=20&c=GAKRAkeiut6MTnyYbrIhwSyq_bPbq49YqgpK7JWpvno=" alt="poster" />
                    <p>Luis 2min</p>
                </div>
                <div>
                    <span className='cursor-pointer'><PiDotsThreeOutlineThin /></span>
                </div>
            </div>
            <div className='rounded-md'>
                <img  className=" flex pt-3 w-[80%]  h-[400px] object-fit" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="body" />
            </div>
            <div className='footer'>
                <div className='flex gap-3 text-xl pt-2 pb-2'>
                    <span className='cursor-pointer'><AiOutlineHeart /></span>
                    <span className='cursor-pointer'><GoCommentDiscussion /></span>
                    <span className='cursor-pointer'><RxShare2 /></span>
                </div>
                <div className='flex gap-1'>
                    <p>20 likes</p>
                    <div>10 comments</div>
                </div>
                <div className='relative'>
                    <input className='bg-transparent border-none focus:border-none border-b-1 pb-2 w-full ' type="text" placeholder='type comment ....' />
                    <button className='absolute  right-2 my-1 hover:bg-blue-500 p-1 hover:rounded-md hover:text-white '><BsSend /></button>
                </div>
                
            </div>
        </div>
        <div className='grid col-span-4'>
            <div>
               <p>Notifications</p>
            </div>
            {/* Notificatins */}
            <div class="flex flex-col space-y-2 ">
                <div class="flex justify-between py-6 px-4 bg-white/30 ">
                    <div class="flex items-center space-x-4">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-14 w-14" alt="" />
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">Leonard Krashner</span>
                            <span class="text-sm">Yeah same question here too 🔥</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        17m ago
                    </div>
                </div>
               
                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" class="rounded-full h-14 w-14" alt="" />
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">Naomie Queen</span>
                            <span class="text-sm">Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        40m ago
                    </div>
                </div>

                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" class="rounded-full h-14 w-14" alt="" />
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">Lesine</span>
                            <span class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, provident</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        50m ago
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Board