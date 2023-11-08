import React from 'react'
import { BsDot } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RecentAproved() {
    const inactiveUsers = useSelector((state) => state.auth.inactiveUsers);
    const inactiveUsersCount = inactiveUsers.length;


  return (
          <div>
            <div className='pb-10'>
                <p className='text-blue-500 text-2xl'>Users List</p>
            </div>
            <p className='pb-3 font-bold'>Inactive Users ({inactiveUsersCount})</p>
            {inactiveUsers.map((user)=>(

            <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                  <Link to={`/Home/admin/manage-users/${user._id}`}>
                <div className='flex flex-row p-6 items-center gap-2'>
                    <div className='text-black text-4xl'><BsDot /></div>
                    <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                    <div className='text-slate-400'>{user?.fullName}</div>
                    <div className='text-slate-500 flex flex-row gap-3 items-center'>
                        <div>{user?.role} </div>
                        <div>{user?.email}</div>
                    </div>
                </div>
                </Link>
            </div>
            ))}
    </div>
  )
}

export default RecentAproved