import { AiOutlineIssuesClose } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { authActions } from '../../redux/auth/authSlice';
import { issueActions } from '../../redux/issue/issueSlice';
import { codesActions } from '../../redux/request_codes/codesSlice';



function ManageSystem() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.auth.users);
  const pendingUsers = users ? users.filter((user) => user.approvalStatus === 'pending') : [];
  const pendingUsersCount = pendingUsers.length;

  // Unassigned issues
  const unassignedIssues = useSelector((state) => state.issue.unassignedIssues);
  const total_number_issues = unassignedIssues.length;


  // initial request codes here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const codesResponse = await axios.get('http://localhost:8080/api/code/all-code-requests');
        dispatch(codesActions.setCodeRequests(codesResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  

  // fetch all users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:8080/auth/users');
        dispatch(authActions.setAllUsers(usersResponse.data));
        dispatch(authActions.setUsers(usersResponse.data));

        const issuesResponse = await axios.get('http://localhost:8080/issue/all-issues');
        dispatch(issueActions.setIssues(issuesResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='bg-gray-100'>
      <div className='bg-slate-200 p-5'>
        <p>Welcome: {userInfo.fullName} </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 p-32">
        <Link to="/Home/admin/users">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><FiUsers className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-red-500'>{pendingUsersCount}</p>
            <p className='text-2xl'>Pending users</p>
          </div>
        </Link>
        <Link to="/Home/middleman-issue-page">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><AiOutlineIssuesClose className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-red-500'>{total_number_issues}</p>
            <p className='text-2xl'>Pending Issues</p>
          </div>
        </Link>

        <Link to="requests">
          <div className='bg-white flex flex-col justify-center items-center gap-2 p-10'>
            <p><IoNotificationsOutline className='text-6xl text-blue-500'/></p>
            <p className='text-xl text-red-500'>10</p>
            <p className='text-2xl'>Requests</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ManageSystem;
