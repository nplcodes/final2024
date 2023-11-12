import {  useSelector } from 'react-redux';
import SinglePost from './SinglePost';



function Board() {
    const posts = useSelector((state)=> state.issue.posts)

  return (
     <div className="grid grid-cols-7 gap-4 p-32 pt-10">
        <div className=" flex flex-col justify-center col-span-5">
            {posts.length === 0 ? (
             <p>No posts available</p>
            ) : (
             posts.map((post) => (
            <div className=''>
                    <SinglePost  post={post}/>
            </div>
             )))}
        </div>
        <div className="col-span-2">
            <div>
               <p className=''>New posts .....</p>
            </div>
            <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" class="rounded-full h-14 w-14" alt="" />
                    <div class="flex flex-col space-y-1">
                        <span class="font-bold">Katy Queen</span>
                        <span class="text-sm">Lorem ipsum dolor sit</span>
                    </div>
                </div>
                <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                    40m ago
                </div>
            </div>

            <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-14 w-14" alt="" />
                    <div class="flex flex-col space-y-1">
                        <span class="font-bold">Big Tray</span>
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
                        <span class="font-bold">Julian Asange</span>
                        <span class="text-sm">Lorem ipsum dolor sit</span>
                    </div>
                </div>
                <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                    40m ago
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Board;