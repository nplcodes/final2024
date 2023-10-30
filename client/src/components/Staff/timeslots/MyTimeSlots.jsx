import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'

function MyTimeSlots() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="border p-5">
          <p className="text-2xl font-bold pb-3">Stuff and Student conversation</p>
          <p className='text-xs'>And your feedback for mostafajur project by signing up or signing in</p>
        </div>
        <div className="p-4 border">
          {/* Existing comments */}
          <div className="flex gap-2 p-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
              alt=""
            />
            <div>
              <p className="font-bold">Madson Kenny <span className="text-gray-300 text-xs">Nov 24, 2023</span></p>
              <p className="text-xs text-gray-500">Amazing work :)</p>
            </div>
          </div>

          <div className="flex gap-2 p-2 pb-5">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=1641&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <p className="font-bold">Don Pacson <span className="text-gray-300 text-xs">Oct 10, 2023</span></p>
              <p className="text-xs text-gray-500">We are good!</p>
            </div>
          </div>

          {/* Comment Field */}
          <div className="flex gap-2 p-2">
            <div>
            <input
              type='text'
              placeholder='Add a comment...'
              className=' p-2 w-full focus:border-none border-none'
            />
              <AiOutlineSend />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="p-4 border flex gap-3 mb-5">
          <img className='w-20 h-20 rounded-md' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=" alt="" />
          <div>
            <p className='text-xl font-bold'>Leon Don</p>
            <p className='text-xs text-gray-500'>Student</p>
            <button className='text-white bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover:bg-black'>More info</button>
          </div>
        </div>
        {/* Additional information */}
        <div className="p-4 border flex gap-3">
          <img className='w-20 h-20 rounded-md' src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=2048x2048&w=is&k=20&c=dfjN29cr1CyEzhR0RgRjCWSNMpSrLAKsZzMn_K9Aalo=" alt="" />
          <div>
            <p className='text-xl font-bold'> Muneza John</p>
            <p className='text-xs text-gray-500'> Admin - Staff</p>
              <button className='text-white bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover:bg-black'>More info</button>
          </div>
          <div>
          </div>
        </div>
        <div className="p-4 border">
          <p className='pb-3'>Attachments or files</p>
          <div className=''>
            <li>ropon medical</li>
            <li>identity</li>
            <li>Ikibari</li>
          </div>
          <input type='file'  className='mt-3'/>
        </div>
      </div>
    </div>
  );
}

export default MyTimeSlots;
