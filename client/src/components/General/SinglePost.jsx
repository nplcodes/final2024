import { AiOutlineHeart } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import { GoCommentDiscussion } from 'react-icons/go'
import { PiDotsThreeOutlineThin } from 'react-icons/pi'
import { RxShare2 } from 'react-icons/rx'
import { issueActions } from '../../redux/issue/issueSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export default function SinglePost({ post}) {
      const dispatch = useDispatch();
      const [userId, setUserId] = useState(null)


      useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('authState'));
        
        if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
          setUserId(storedUserInfo.user._id);
        } else {
            //
        }
      }, []);

      const handleLike = async(postId) => {
        try {
            await axios.post(`http://localhost:8080/post/like/${postId}`, { userId });
            dispatch(issueActions.addLike({ postId: postId, userId: userId }));
          } catch (error) {
            console.error('Error liking post:', error);
          }
      };
    
  return (
        <div className='grid col-span-6 pb-5'>
            <div className='flex  p-2'>
                <div className='flex items-center gap-3'>
                    <img  className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?s=2048x2048&w=is&k=20&c=GAKRAkeiut6MTnyYbrIhwSyq_bPbq49YqgpK7JWpvno=" alt="poster" />
                    <p>{post.title} </p>
                </div>
                <div>
                    <span className='cursor-pointer'><PiDotsThreeOutlineThin /></span>
                </div>
            </div>
            <div className='rounded-md'>
                <img  className=" flex pt-3 w-[80%]  h-[400px] object-fit" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="body" />
            </div>
            <div className='footer'>
            <div className='flex gap-3 text-xl pt-2 pb-2'>
                <div onClick={()=> handleLike(post._id)}  className='cursor-pointer'><AiOutlineHeart className='text-red-500'/></div>
                <span className='cursor-pointer'><GoCommentDiscussion /></span>
                <span className='cursor-pointer'><RxShare2 /></span>
            </div>
                <div className='flex gap-1'>
                    <p>{post?.likes?.length} likes</p>
                    <div>10 comments</div>
                </div>
                <div className='relative'>
                    <input className='bg-transparent border-none focus:border-none border-b-1 pb-2 w-full ' type="text" placeholder='type comment ....' />
                    <button className='absolute  right-2 my-1 hover:bg-blue-500 p-1 hover:rounded-md hover:text-white '><BsSend /></button>
                </div>
                
            </div>
        </div>
  )
}
