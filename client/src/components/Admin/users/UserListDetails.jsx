import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { authActions } from "../../../redux/auth/authSlice";


function UserListDetails() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.selectedUser);
    const selectedUserId = user[0]?._id;

    const ApproveUser = async() =>{
              try {
                const response = await axios.put(`http://localhost:8080/auth/approve/${selectedUserId}`);
                dispatch(authActions.approveUser(response.data))
                console.log(response.data)
              } catch (error) {
                console.error('Error:', error);
              }
         }

         const RejectUser = async() =>{
            try {
              await axios.delete(`http://localhost:8080/auth/reject/${selectedUserId}`);
              dispatch(authActions.rejectUser())
            } catch (error) {
              console.error('Error:', error);
            }
       }

  return (
        <div className='max-w-full  p-5 col-span-5 h-screen'>
            {!user?(
                <div className="mt-32">Non User Available</div>)
                : 
                <div className='grid grid-cols-4 grid-rows-1 gap-2'>
                {/* Left part */}
                <div className='col-span-1'>
                    <img  className="w-32 h-32 rounded-md" src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="" />
                    <div className='flex items-center justify-center pt-2 italic'>Student</div>
                </div>
                {/* Right part */}
                <div className='col-span-3 pl-5'>
                    <div className='top'>
                        <div className='text-2xl font-bold'>{user[0]?.fullName}</div>
                        <div className='pl-5 italic'>{user[0]?.role}</div>
                    </div>
                    <div className='pt-5 flex items-center gap-2'>
                        <GrGroup className='text-2xl'/>
                        <div>
                            <div>Faculty: I.C.T</div>
                            <div>Level 4</div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className='flex gap-2 items-center'>
                            <AiOutlineInfoCircle />
                            <p>Personal info</p>
                        </div>
                        <div className='pt-3 flex flex-col gap-2'>
                            <div className='flex gap-6'>
                                <p>Phone</p>
                                <p>0780922562</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Address</p>
                                <p>{user[0]?.email}</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Birthday</p>
                                <p>12 jun 2000</p>
                            </div>
                            <div className='flex gap-6'>
                                <p>Gender</p>
                                <p>Male</p>
                            </div>
                            <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-3 rounded-sm" onClick={ApproveUser}> Aprove
                            </button>
                            <button className="bg-red-500 ml-3 text-white p-2 mt-3 rounded-sm" onClick={RejectUser}> Reject
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>
  )
}

export default UserListDetails

  