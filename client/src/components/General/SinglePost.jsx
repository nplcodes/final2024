import { AiFillHeart } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import { GoCommentDiscussion } from 'react-icons/go'
import { PiDotsThreeOutlineThin } from 'react-icons/pi'
import { RxShare2 } from 'react-icons/rx'
import { issueActions } from '../../redux/issue/issueSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export default function SinglePost({ post }) {
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
      const [content, setComment] = useState('')


      const handleComment = async(e,postId)=>{
         e.preventDefault()
        try {
            await axios.post(`http://localhost:8080/post/comment/${postId}`, { content, userId });
            dispatch(issueActions.addComment({ postId: postId, comment: content }));
            setComment('');
          } catch (error) {
            console.error('Error liking post:', error);
          }
      }

      const [boxOpen, setBoxOpen] = useState(false)
      const toggleCommentBox = ()=>{
           setBoxOpen(!boxOpen)
      }
      
    
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
                <img  className=" flex pt-3 w-[80%]  h-[400px] object-fit" src={`http://localhost:8080/${post.image}`} alt="body" />
            </div>
            <div className='footer'>
            <div className='flex gap-3 text-xl pt-2 pb-2'>
                <div onClick={()=> handleLike(post._id)}  className='cursor-pointer'><AiFillHeart className='text-red-500'/></div>
                <div onClick={toggleCommentBox} className='cursor-pointer'><GoCommentDiscussion /></div>
                <div className='cursor-pointer'><RxShare2 /></div>
            </div>
                <div className='flex gap-1'>
                    <p>{post?.likes?.length} likes</p>
                    <div>{post?.comments?.length} comments</div>
                </div>
                <div className='relative'>
                    {boxOpen && 
                    <form onSubmit={(e)=> handleComment(e,post._id)}>
                       <input autoFocus onChange={(e)=>setComment(e.target.value)} className='bg-transparent border-none focus:border-none border-b-1 pb-2 w-full ' type="text" name='comment' required placeholder='type comment ....' />
                       <button type='submit' className='absolute  right-2 my-1 hover:bg-blue-500 p-1 hover:rounded-md hover:text-white '><BsSend /></button>
                    </form>
                    }
                </div>
            </div>
        </div>
  )
}
