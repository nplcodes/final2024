import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { issueActions } from '../../redux/issue/issueSlice';
import axios from 'axios';

function StaffPage() {
  const dispatch = useDispatch();
  const allIssues = useSelector((state) => state.issue.issues); // Use issues instead of openedIssues
  

  const issues = allIssues.filter((issue) => issue.status === 'open');
  const total_number_issues = issues.length
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

  return (
    <div>
      <header className="bg-blue-500 text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage upcomming </h1>
        </div>
      </header>
      <div className="flex p-8">
        <div className="w-3/5 mr-8">
          <h1 className="text-2xl font-semibold mb-4">New Issues ({total_number_issues})</h1>
          <div className="space-y-4">
            {issues.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
                <Link to={`/Home/middleman-issue-page/${issue._id}`}>
                  <div>
                    <h2 className="text-lg font-semibold">{issue.title}</h2>
                    <p className="text-gray-600">{issue.description}</p>
                  </div>
                </Link>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;

