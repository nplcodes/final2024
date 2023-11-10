import { FaBell } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { BsPatchQuestion } from 'react-icons/bs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { issueActions } from '../../redux/issue/issueSlice';

function StaffHomePage() {
const userInfo = useSelector((state)=> state.auth.user);
const dispatch = useDispatch();
const newIssues = useSelector((state) => state.issue.newIssues);

const [assignedToId, setUserId] = useState(null);


useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('authState'));
    
    if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
      setUserId(storedUserInfo.user._id);
    } else {
        //
    }
  }, []);


  useEffect(() => {
    if (assignedToId) {
      const fetchStudentIssues = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/issue/assigned-staff/${assignedToId}`);
          dispatch(issueActions.setAssignedToMe(response.data));

        } catch (error) {
          console.log(error);
        }
      };
  
      fetchStudentIssues();
    }
  }, [dispatch, assignedToId]);


  return (
    <div className=''>
        <div className='bg-slate-200 p-5'>
            <p>Welcome Mr. Staff {userInfo.fullName} </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-4 p-32">
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <Link to="/Home/staff-issue-page">
                <div className="relative inline-block">
                    <BsPatchQuestion className="text-4xl text-blue-500" />
                    {newIssues.length}
                </div>
                </Link>
            </div>
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <Link to="/Home/staff-book-list">
                <div className="relative inline-block">
                    <AiOutlineCalendar className="text-4xl text-blue-500" />
                </div>
            </Link>
            </div>
            <div className='p-16 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <Link to="/Home/staff-notifications">
                <div className="relative inline-block">
                    <FaBell className="text-4xl text-blue-500" />
                </div>
                </Link>
                </div>       
         </div>
    </div>
  )
}

export default StaffHomePage