import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {BsSend } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { issueActions } from '../../redux/issue/issueSlice';

function ManageIssue() {
  const { issueId } = useParams();
  const dispatch = useDispatch();
  const issueDetails = useSelector((state) => state.issue.studentIssues);
  const comments = useSelector((state) => state.issue.comments);

  // State for the comment form
  const [content, setComment] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/issue/view/${issueId}`);
        const issueData = response.data;
        dispatch(issueActions.getIssueDetails(issueData));
      } catch (error) {
        console.error('Error fetching issue details:', error);
      }
    };

    fetchIssueDetails();
  }, [dispatch, issueId]);

  useEffect(() => {
    // Fetch user ID from localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem('authState'));
    if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
      setUserId(storedUserInfo.user._id);
    } else {
      console.log('Failed to fetch userID');
    }
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8080/comment/new-comment/${issueId}`, {
        content,
        userId,
      });
    setComment('');
    setUserId('');  

    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/comment/view-comment/${issueId}`);
        const commentData = response.data;
        dispatch(issueActions.commentsOnIssue(commentData));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [dispatch, issueId]);

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 min-h-screen pl-32 pr-32 pt-10">
      <div className="p-10">
        <div className="pb-5">Me/ Admin</div>
        <div className="pb-10">
          <p className="text-2xl italic">
            {issueDetails?.issue?.category}: "{issueDetails?.issue?.title}"
          </p>
        </div>
        <div>
          <p>{issueDetails?.issue?.description}</p>
          <div className="flex p-2">
            <p className="cursor-pointer"> &#128512; &#128516;</p>
          </div>
        </div>
        <div className="pt-3">Assigned to: </div>
        <div className="pb-5 pt-3">
          <input type="file" />
        </div>
        <div>
          <div>
            <Link to="#">
              <button
                className="
                  bg-blue-500
                  hover:border-none
                  text-white
                  py-1
                  px-3
                  sm
                  rounded-md focus:border-transparent focus:outline-none focus:shadow-outline-none
                "
              >
                Attach file
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="p-10">
          <p className="pb-10">Attached Documents.... </p>
          <div className="grid grid-cols-4 gap-2 pb-10">
            {/* Display attached documents here */}
          </div>
          <div>
            <form onSubmit={handleCommentSubmit}>
              <div>
                <textarea
                  required
                  onChange={(e) => setComment(e.target.value)}
                  name="comments"
                  id=""
                  className="w-full  rounded-md focus:outline-none p-3 bg-transparent"
                  placeholder="Type your comment ...."
                ></textarea>
              </div>
              <div>
                <input type="text" value={userId} hidden />
              </div>
              <div className="p-3">
                <button
                  type="submit"
                  className="bg-blue-500hover:bg-blue-700 text-white py-1 px-3 sm rounded-md focus:border-transparent focus:outline-none focus:shadow-outline-none"
                >
                  <BsSend />
                </button>
              </div>
            </form>
            <div className="max-w-sm flex flex-col space-y-4 pt-10">
              <p>
                {comments.length} Comments ...{' '}
                <span className="italic underline text-blue-500 cursor-pointer">see all</span>
              </p>
               {Array.isArray(comments) && comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-white w-full flex items-center p-2 rounded-xl shadow border"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src='https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg'
                      alt={comment.user.username}
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">{comment.user.username}</div>
                    <div className="text-sm text-gray-500">
                      {comment.content} . {comment.datePosted}
                    </div>
                  </div>
                  <div className="p-2">
                    <img
                      src={comment.user.profilePicture}
                      alt={comment.user.username}
                      className="w-4 h-4 rounded-full order-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageIssue;
