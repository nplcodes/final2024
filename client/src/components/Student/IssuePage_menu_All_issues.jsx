import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiCommentEdit, BiMessage } from 'react-icons/bi'
import { BsDot, BsEye } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { issueActions } from '../../redux/issue/issueSlice';
import axios from 'axios';

function IssuePageMenuAllIssues() {
    const dispatch = useDispatch();
    const studentIssues = useSelector((state) => state.issue.issues);
    const [reporterId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserInfo = JSON.parse(sessionStorage.getItem('authState'));
        
        if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
          setUserId(storedUserInfo.user._id);
        } else {
            //
        }
    }, []);

    useEffect(() => {
        if (reporterId) {
          const fetchStudentIssues = async () => {
            try {
              const response = await axios.get(`http://localhost:8080/issue/reporter/${reporterId}`);
              const studentIssues = response.data;
              dispatch(issueActions.getStudentIssue(studentIssues));
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchStudentIssues();
        }
    }, [dispatch, reporterId]);

    function formatDate(dateString) {
        const originalDate = new Date(dateString);
        const day = originalDate.getDate(); 
        const time = originalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
        return `${day}, ${time}`;
    }

    return (
        <div>
            <p className='pb-3 font-bold text-xl'>My Concerns page</p>
            {studentIssues && studentIssues.length > 0 ? (
                studentIssues.map((issue) => (
                    <div className='max-h-60 overflow-y-auto'>
                        <div className='flex flex-row justify-between p-10 mb-1'>
                            <Link to={`/Home/manage-issue/${issue._id}`} key={issue._id}>
                                <div className='flex gap-5'>
                                    <div className='text-red-500 text-4xl'><BsDot /></div>
                                    <img className='w-10 h-10 rounded-full' src="https://www.shutterstock.com/image-illustration/male-default-placeholder-avatar-profile-260nw-582509551.jpg" alt={issue.title} />
                                    <div onClick={()=> dispatch(issueActions.setAssignedTo(issue.assignedTo))}>
                                        <p className='text-xl pb-2 font-semibold italic'>{issue.category}</p>
                                        <div className='flex gap-2'>
                                            <p className='text-slate-500'>
                                            </p>
                                            <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                            <p className='text-slate-500 flex items-center gap-2'> <AiOutlineClockCircle />{formatDate(issue.dateReported)}</p>
                                            <div className='h-5 w-[0.5px] bg-slate-300'></div>
                                            <p className='flex items-center gap-2 text-slate-500'> <BiMessage />({issue?.staffStudentDiscussion?.length}) Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className=''>
                                <Link to={`/Home/manage-issue/${issue._id}`} key={issue._id}><p className='cursor-pointer'><BsEye /></p></Link>
                                <Link to={`/Home/update-issue/${issue._id}`}><p className='cursor-pointer'><BiCommentEdit /></p></Link>
                                <Link to='#'>
                                    <p className='text-red-500 cursor-pointer'><TiDeleteOutline /></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Not available</p>
            )}
        </div>
    )
}

export default IssuePageMenuAllIssues;
