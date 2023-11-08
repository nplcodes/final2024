import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { issueActions } from '../../redux/issue/issueSlice';
import AssignIssuePopup from './AssignIssuePopup';

function IssueDetailsPage() {
  const { issueId } = useParams();
  const dispatch = useDispatch();
  const issueDetails = useSelector((state) => state.issue.studentIssues);


  const [reporter, setReporter] = useState([]);

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

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [selectedReporter, setSelectedselected] = useState(null);

  const assignIssueToStaff = (issueId, senderId) => {
    setPopupOpen(true);
    setSelectedIssueId(issueId);
    setSelectedselected(senderId)
  };

  function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getDate();
    const time = originalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `${day}, ${time}`;
  }
  return (
    <div className="grid grid-cols-3 gap-4 pl-32 pr-32 pt-20">
      <div className="col-span-2">
        <div className="border p-5">
          <p className="text-2xl font-bold pb-3">{issueDetails?.issue?.category} issue</p>
          <p>{formatDate(issueDetails?.issue?.dateReported)}</p>
        </div>
        <div className="p-4 border">
              <div className=''>
                 <p className=''>"{issueDetails?.issue?.description}"</p>
                 <button
                  onClick={() => assignIssueToStaff(issueDetails?.issue?._id, issueDetails?.issue?.reporter)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-5"
                >
                   Dispatch
                </button>
              </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="p-4 border flex gap-3 mb-5">
          <img className='w-20 h-20 rounded-md' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=" alt="" />
          <div>
            <p className='text-xl font-bold'>{reporter.fullName}</p>
            <p className='text-xs text-gray-500'>{reporter.role}</p>
            <button className='text-white text-xs bg-blue-500 rounded-md p-1 pl-2 pr-2 mt-5 hover-bg-black'>More info ...</button>
          </div>
        </div>
        <div className="p-4 border">
          <p className='pb-3'>Attachments or files</p>
          <div className=''>
            <li>ropon medical</li>
            <li>identity</li>
            <li>Ikibari</li>
          </div>
        </div>
      </div>
      <AssignIssuePopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        issueId={selectedIssueId}
        senderId= {selectedReporter}
      />
    </div>
  );
}

export default IssueDetailsPage;