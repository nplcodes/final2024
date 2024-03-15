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
  const [closerInfo, setCloserInfo] = useState('')

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
        console.log('Error fetching issue details:', error);
      }
    };

    fetchIssueDetails();
  }, [dispatch, issueId]);

  useEffect(() => {
    const storedUserInfo = JSON.parse(sessionStorage.getItem('authState'));
    if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
      setUserId(storedUserInfo.user._id);
      setCloserInfo(storedUserInfo.user);
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
        console.log('commentText and userId are required to create a comment');
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
        console.log('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [dispatch, issueId]);

// attach additional file to attachment
const [file, setFile] = useState(null);

const handleFileChange = (event) => {
  setFile(event.target.files[0]);
};

const handleAddAttachment = async (e) => {
  e.preventDefault()
  try {
    const formData = new FormData();
    formData.append('attachment', file);

    await axios.post(`http://localhost:8080/issue/add-attachment/${issueId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Attachment added successfully');
  } catch (error) {
    console.error('Error adding attachment:', error);
  }
};
// close issue

// feed back
const [feedback, setFeedBack] = useState('')

const handleCloseIssue = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`http://localhost:8080/issue/close/${issueId}`, {
      feedback
    });
    dispatch(issueActions.setIssueToClose(response.data));
    window.location.href = '/Home/staff-issue-page'

  } catch (error) {
    console.log('Error closing issue:', error);
  }
};

// Feedback pop up form
const [isFormOpen, setIsFormOpen] = useState(false);

const openForm = () => {
  setIsFormOpen(true);
};

// Function to close the form
const closeForm = () => {
  setIsFormOpen(false);
};


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
                src={`http://localhost:8080/${comment?.userInfo?.profile}`} 
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
                  <input type="text" value={authorId} hidden readOnly />
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
              {closerInfo?.role === 'Staff' && (
                  <div className='flex gap-3 items-center'>
                    <button 
                      className='bg-blue-500 text-white p-2 rounded-sm focus:border-none'
                      onClick={openForm}
                      >Close issue
                    </button>
                  </div>
              )}

                  {/* Form with darkened background */}
                {isFormOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="bg-white p-8 rounded-md w-[350px] h-[300px]">
                            <form className="flex flex-col space-y-4">
                              <textarea
                                placeholder='Type feedback....'
                                onChange={(e) => setFeedBack(e.target.value)}
                                value={feedback}
                                className="w-full p-2 border rounded-md"
                              />
                              <label>Attach File</label>
                              <input type="file" />

                              {/* Button to submit the form */}
                              <button
                              onClick={handleCloseIssue}
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                              >
                                Submit
                              </button>
                            </form>

                            {/* Button to close the form */}
                            <button
                              onClick={closeForm}
                              className="mt-4 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
                            >
                              Close Form
                            </button>
                          </div>
                        </div>
                      )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="p-4 border flex gap-3 mb-5">
          <img className='w-20 h-20 rounded-md' src={`http://localhost:8080/${reporter?.profile}`}  alt="" />
          <div>
            <p className='text-xl font-bold'>{reporter.fullName}</p>
            <p className='text-xs text-gray-500'>{reporter.role}</p>
            <button className='text-white bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover-bg-black'>More info</button>
          </div>
        </div>
        <div className="p-4 border">
          <p className='pb-3'>Attachments or files ....</p>
          <div className='pb-10'>
          {issueDetails?.issue?.attachments.map((doc)=> (
               <li className='text-blue-400 underline cursor-pointer' key={doc._id}>{doc.filename}</li>
          ))}
          </div>
          <form>
            <input type='file' className='mt-3' onChange={handleFileChange} />
            <button onClick={handleAddAttachment} className='mt-3 bg-blue-500 text-white p-1 rounded-md font-bold'>Attach file</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyTimeSlots;
