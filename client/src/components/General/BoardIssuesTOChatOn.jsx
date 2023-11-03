import { Link } from "react-router-dom"

function BoardIssuesTOChatOn() {
  return (
    <div className='flex justify-center pt-10'>
        <div className='h-auto w-[70%] max-auto bg-gray-100 p-5'>
        <div className='p-10'>
            <p className='text-2xl'>Chatting Board</p>
            <p className="text-sm pl-4"> Click to share the point of view</p>
        </div>
        <hr />
        <div className="h-auto w-[80%] grid grid-cols-3 gap-3">
        <Link to='/Home/staff-chatboard'>
            <div className="col-span-1 flex flex-col bg-white rounded-md mt-5">
                <div className="flex justify-between p-7 gap-5">
                    <div className="flex gap-2">
                        <div className="rounded-full bg-blue-400 text-white w-10 h-10 text-xl flex items-center justify-center">N</div>
                        <div className="">We are here</div>
                    </div>
                    <div className="text-red-500 rounded-sm">new</div>
                </div>
                <div className="flex flex-col pl-7">
                    <p>0 comments</p>
                    <p className="text-gray-400 text-xs">20 june 2023</p>
                </div>
            </div>
        </Link>

            <div className="col-span-1 flex flex-col bg-white rounded-md mt-5">
                <div className="flex justify-between p-7 gap-5">
                    <div className="flex gap-2">
                        <div className="rounded-full bg-blue-400 text-white w-10 h-10 text-xl flex items-center justify-center">N</div>
                        <div className="">We are here</div>
                    </div>
                    <div className="text-red-500 rounded-sm">new</div>
                </div>
                <div className="flex flex-col pl-7">
                    <p>0 comment</p>
                    <p className="text-gray-400 text-xs">20 june 2023</p>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default BoardIssuesTOChatOn