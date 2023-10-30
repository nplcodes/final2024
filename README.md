# Online Issue Dispatch
in this project, iam implementing MERN stack technology, with other technology used in web development like typeScript, vite, etc....


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { issueActions } from '../../redux/issue/issueSlice';
import SinglePost from './SinglePost';



function Board() {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.issue.posts)



    useEffect(() => {
          axios
            .get(`http://localhost:8080/post`)
            .then((response) => {
              dispatch(issueActions.setPosts(response.data));
            })
            .catch((error) => {
              console.error('Error fetching posts:', error);
            });
        
      }, [dispatch]);


  return (
    <div className='flex justify-center'>
        <div className=''>
            {posts.length === 0 ? (
             <p>No posts available</p>
            ) : (
             posts.map((post) => (
            <div className=''>
                    <SinglePost  post={post}/>
            </div>
             )))}
        </div>
    <div className=''>
            <div>
               <p>Notifications</p>
            </div>
        </div>
    </div>
    
  )
}

export default Board;




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