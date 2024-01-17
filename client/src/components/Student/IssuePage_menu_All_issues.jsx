import { useEffect, useState } from 'react';
import { BsDot } from 'react-icons/bs'
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


    return (
        <div>
            {studentIssues && studentIssues.length > 0 ? (
                studentIssues.map((issue) => (
                    <div className='max-h-60 overflow-y-auto'>
                        <div className='flex flex-row justify-between mb-1 border-b border-b-1'>
                            <Link to={`/Home/manage-issue/${issue._id}`} key={issue._id}>
                                <div className='flex gap-2'>
                                    <div className='text-green-500 text-4xl'><BsDot /></div>
                                    <div onClick={()=> dispatch(issueActions.setAssignedTo(issue.assignedTo))}>
                                        <p className='pb-2'>{issue.description}</p>
                                    </div>
                                </div>
                            </Link>
                            <div className='flex gap-2'>
                                <Link to={`/Home/update-issue/${issue._id}`} key={issue._id}>
                                    <button className='bg-blue-500 px-8 py-2 text-white cursor-pointer rounded-md'>Edit</button>
                                </Link>
                                <Link to='#'>
                                    <button className='bg-red-500 px-8 py-2 text-white cursor-pointer rounded-md'>Delete</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Not Current issue found :)</p>
            )}
        </div>
    )
}

export default IssuePageMenuAllIssues;
