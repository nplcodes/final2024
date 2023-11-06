import React from 'react'
import { BsDot } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../redux/auth/authSlice';

function AllUsers() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.auth.users);
    const systemUsers = users.filter((user) => user.approvalStatus !== 'pending' && user.approvalStatus !== 'inactive' );
    const allSystemUsers = systemUsers.length;

    const handleSelectedUser = (userId)=>{
        const selectedUser = systemUsers.filter((user)=> user._id === userId)
        dispatch(authActions.setSelectedUser(selectedUser));
    }

  return (
          <div>
            <div className='pb-10'>
                <p className='text-blue-500 text-2xl'>Users List</p>
            </div>
            <p className='pb-3 font-bold'>All System's Users ({allSystemUsers})</p>
            {systemUsers.map((user)=> (
                <div className='border w-full flex items-center justify-between pr-4 mb-3 cursor-pointer'>
                    <div className='flex flex-row p-6 items-center gap-2 ' onClick={()=> handleSelectedUser(user._id)}>
                        <div className='text-green-500 text-4xl'><BsDot /></div>
                            <div><img className='w-7 h-7 rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" /></div>
                            <div className=''>{user?.fullName}</div>
                              <div className='flex flex-row gap-3 items-center'>
                                 <div>{user?.role} </div>
                                 <div>{user?.email}</div>
                            </div>
                        </div>
                    <p className='text-slate-400'>9:45 a.m</p> 
                </div>
            ))}
    </div>
  )
}

export default AllUsers