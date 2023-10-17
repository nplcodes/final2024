import { AiOutlineIssuesClose } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function ManageSystem() {
  const userInfo = useSelector((state)=> state.auth.user);

  return (
    <div className='bg-gray-100'>
      <div className='bg-slate-200 p-5'>
            <p>Welcome M.r: {userInfo.fullName} </p>
        </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 p-32">
        <Link to="/Home/admin/users">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><FiUsers className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>100</p>
            <p className='text-2xl'>Users</p>      
          </div>
          </Link>
          <Link to="/Home/admin/issues">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><AiOutlineIssuesClose className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>7</p>
            <p className='text-2xl'>Issues</p>    
          </div>
          </Link>      

          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><IoNotificationsOutline className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-slate-500'>77</p>
            <p className='text-2xl'>Notifications</p>          
          </div>
      </div>
    </div>
  )
}

export default ManageSystem