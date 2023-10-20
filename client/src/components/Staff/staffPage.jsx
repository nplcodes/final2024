import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAssignmentInd, MdClose } from 'react-icons/md';
import AssignIssuePopup from './AssignIssuePopup';
import { useSelector, useDispatch } from 'react-redux';
import { issueActions } from '../../redux/issue/issueSlice';
import axios from 'axios';

function StaffPage() {
  const dispatch = useDispatch();
  const allIssues = useSelector((state) => state.issue.issues); // Use issues instead of openedIssues
  

  const issues = allIssues.filter((issue) => issue.status === 'open');
  const Allissues = allIssues.filter((issue) => issue.status === 'assigned');
  const recentIssues = Allissues.slice(0, 3);


  useEffect(() => {
    const fetchIssuesData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/issue/all-issues'); // Fetch all issues
        dispatch(issueActions.setIssues(response.data)); // Update the issues state
      } catch (error) {
        console.log(error);
      }
    };

    fetchIssuesData();
  }, [dispatch]);

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [selectedReporter, setSelectedselected] = useState(null);


  const assignIssueToStaff = (issueId, senderId) => {
    setPopupOpen(true);
    setSelectedIssueId(issueId);
    setSelectedselected(senderId)
  };

  const closeIssue = (issueId) => {
    // Handle closing the issue
  };

  return (
    <div>
      <header className="bg-blue-500 text-white p-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage upcomming</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/staff/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/staff/issues" className="hover:underline">
                  Issues
                </Link>
              </li>
              <li>
                <Link to="/staff/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/staff/settings" className="hover:underline">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex p-8">
        <div className="w-3/5 mr-8">
          <h1 className="text-2xl font-semibold mb-4">New Issues</h1>
          <div className="space-y-4">
            {issues.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{issue.title}</h2>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
                <button
                  onClick={() => assignIssueToStaff(issue._id, issue.reporter)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                  <MdAssignmentInd size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <h5 className="text-md font-thin italic mb-4">recent assigned</h5>
          <div className="space-y-4">
            {recentIssues.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-sm font-semibold">{issue.title}</h2>
                <p className="text-gray-600">{issue.description}</p>
                <button
                  onClick={() => closeIssue(issue._id)}
                  className="bg-red-500 text-white p-2 rounded hover-bg-red-700"
                >
                  <MdClose size={5} />
                </button>
              </div>
            ))}
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

export default StaffPage;

