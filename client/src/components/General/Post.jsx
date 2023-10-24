import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'


function Post({posts}) {
  console.log(posts)

  return (
    <div>
              <div className='bg-gray-100 p-10 '>
            <div className='pb-10'>
                <input type="text" placeholder='search...' className=' rounded-md focus: border-none focus:outline-0' />
            </div>
            {/* post card */}
            {posts.length === 0 ? (
             <p>No posts available</p>
            ) : (
             posts.map((post) => (
            <div className='bg-white w-[70%] rounded-md p-5 mb-3'>
            <div className='flex gap-3'>
                <img  className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div>
                    <p className='font-bold'>{post.title ? post.title : post.post.title}</p>
                    <p className='text-sm text-gray-400 pl-5'>9 min ago</p>
                </div>
            </div>
            <div className='flex gap-5 p-7 pb-3'>
                <div><BiMessageRounded className='text-xl cursor-pointer'/></div>
                <div><FiEdit className='text-xl cursor-pointer' cursor-pointer /></div>
                <div><AiOutlineHeart className='text-xl cursor-pointer'/></div>
                <div><AiOutlineDelete className='text-red-500 text-xl cursor-pointer' /></div>
            </div>
        </div>
          ))
        )}
     
        </div>
    </div>
  )
}

export default Post
