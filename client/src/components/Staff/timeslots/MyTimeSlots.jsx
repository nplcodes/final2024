import { AiFillCheckSquare } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { issueActions } from '../../../redux/issue/issueSlice';
import { BsSend } from 'react-icons/bs';

function MyTimeSlots() {
  const { issueId } = useParams();
  const dispatch = useDispatch();
  const issueDetails = useSelector((state) => state.issue.studentIssues);
  const StaffStudentComments = useSelector((comments)=> comments.issue.StudentStaffComment);


  // State for the comment form
  const [reporter, setReporter] = useState([]);
  const [commentText, setComment] = useState('');
  const [authorId, setUserId] = useState('');

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/issue/view/${issueId}`);
        const issueData = response.data;
        dispatch(issueActions.getIssueDetails(issueData));
        // reporter name
        const reporterInfo = await axios.get(`http://localhost:8080/auth/${issueData.issue.reporter}`);
        setReporter(reporterInfo.data);
      } catch (error) {
        console.error('Error fetching issue details:', error);
      }
    };

    fetchIssueDetails();
  }, [dispatch, issueId]);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('authState'));
    if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
      setUserId(storedUserInfo.user._id);
    } else {
      console.log('Failed to fetch userID');
    }
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      text: commentText,
      authorId: authorId,
    };
  
    try {
      if (commentText && authorId) { 
       const response =  await axios.post(`http://localhost:8080/issue/staff-student-chat/${issueId}/comments`, commentData);
        const newComment = response.data;
        dispatch(issueActions.addStaffStudentComment(newComment));
        setComment('');
      } else {
        console.error('commentText and userId are required to create a comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/issue/staff-student-chat/${issueId}/comments`);
        const commentData = response.data;
        await axios.put(`http://localhost:8080/issue/mark-as-read/${issueId}`);

        // Fetch user information for each comment
        const commentsWithUserInfo = await Promise.all(
          commentData.map(async (comment) => {
            const userInfoResponse = await axios.get(`http://localhost:8080/auth/${comment.author}`);
            const userInfo = userInfoResponse.data;

            return {
              ...comment,
              userInfo,
            };
          })
        );

        dispatch(issueActions.setStaffStudentComment(commentsWithUserInfo));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [dispatch, issueId]);

  function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getDate();
    const time = originalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `${day}, ${time}`;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="border p-5">
          <p className="text-2xl font-bold pb-3">{issueDetails?.issue?.category} issue</p>
          <p className='text-xs'>"{issueDetails?.issue?.description}"</p>
        </div>
        <div className="p-4 border">
        <p className='pb-5'>({StaffStudentComments.length})Comments</p>
          {Array.isArray(StaffStudentComments) && StaffStudentComments.map((comment) => (
            <div className="flex gap-2 p-2" key={comment._id}>
              <img
                className="w-8 h-8 rounded-full"
                src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
                alt=""
              />
              <div>
                <p className="font-bold">
                {comment?.userInfo?.fullName}
                  <span className="text-gray-300 text-xs pl-10">
                    {comment.createdAt}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{comment.text}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-2 p-2">
            <div className='mt-3'>
              <form onSubmit={handleCommentSubmit}>
                <div>
                  <textarea
                    required
                    onChange={(e) => setComment(e.target.value)}
                    value={commentText}
                    className="w-full  rounded-md focus:outline-none p-3 bg-transparent"
                    placeholder="Type your comment ...."
                  ></textarea>
                </div>
                <div>
                  <input type="text" value={authorId} hidden />
                </div>
                <div className="p-3">
                  <button
                    type="submit"
                    className="bg-blue-500 hover.bg-blue-700 text-white py-1 px-3 sm rounded-md focus-border-transparent focus-outline-none focus-shadow-outline-none"
                  >
                    <BsSend />
                  </button>
                </div>
              </form>
              <div className='flex gap-3 items-center'>
                <AiFillCheckSquare className='bg-blue-500 text-white mt-3 cursor-pointer'/>
                <p>want to close issue?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="p-4 border flex gap-3 mb-5">
          <img className='w-20 h-20 rounded-md' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=" alt="" />
          <div>
            <p className='text-xl font-bold'>{reporter.fullName}</p>
            <p className='text-xs text-gray-500'>{reporter.role}</p>
            <button className='text-white bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover-bg-black'>More info</button>
          </div>
        </div>
        <div className="p-4 border">
          <p className='pb-3'>Attachments or files</p>
          <div className=''>
            <li>ropon medical</li>
            <li>identity</li>
            <li>Ikibari</li>
          </div>
          <input type='file' className='mt-3'/>
          <button className='mt-3 bg-blue-500 text-white p-1 rounded-md font-bold'>Attach file</button>
        </div>
      </div>
    </div>
  );
}

export default MyTimeSlots;
