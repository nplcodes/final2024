import { AiFillCheckSquare} from 'react-icons/ai'
import { BsSend } from 'react-icons/bs';


function BoardChat() {

  return (
    <div className="grid grid-cols-3 gap-4 pl-32 pt-10">

      <div className="col-span-1">
        <div className="p-4 border flex gap-3 mb-5">
          <img className='w-20 h-20 rounded-md' src="https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div>
            <p className='text-xl font-bold'>Pizzo p</p>
            <p className='text-xs text-gray-500'>student</p>
            <button className='text-white bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover:bg-black'>More info</button>
          </div>
        </div>
        <div className="p-4 border">
          <p className='pb-3'>Staff who shared:</p>
          <div className=' flex pl-5'>
            <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=1641&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="border p-5">
          <p className="text-2xl font-bold pb-3">issue</p>
          <p className='text-xs'>hey you , description</p>
        </div>
        <div className="p-4 border">
          {/* Existing comments */}
          <p className='pb-5'>Comments ....3</p>

          <div className="flex gap-2 p-2 pb-10" >
            <img
              className="w-8 h-8 rounded-full"
              src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
              alt=""
            />
            <div>
              <p className="font-bold">Leon NP<span className="text-gray-300 text-xs pl-10">12 jun 2024</span></p>
              <p className="text-xs text-gray-500">you the best :)</p>
            </div>
          </div>

          {/* Comment Field */}
          <div className="flex gap-2 p-2">
            <div className='mt-3'>
              <form>
                <div>
                  <textarea
                    required
                    name="comments"
                    id=""
                    className="w-full  rounded-md focus:outline-none p-3 bg-transparent"
                    placeholder="Type your comment ...."
                  ></textarea>
                </div>

                <div className="p-3">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 sm rounded-md focus:border-transparent focus:outline-none focus:shadow-outline-none"
                  >
                    <BsSend />
                  </button>
                </div>
              </form>
            <div className='flex gap-3 items-center'>
               <AiFillCheckSquare className='bg-blue-500 text-white mt-3 cursor-pointer'/>
              <p>want to close issue?</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardChat;
