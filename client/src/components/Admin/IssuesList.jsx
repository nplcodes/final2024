import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { IssueContext } from '../../context/IssueContext';

const IssuesToAssign = () => {
  const staff = 'staff'
  const { state, assignIssueToStaff, rejectIssue } = useContext(IssueContext);
  const { issues } = state;

  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [selectedStaffId, setSelectedStaffId] = useState('');
  const [staffData, setStaffData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch staff data from the API
    axios.get(`http://localhost:8080/auth/staffs/${staff}`)
      .then(response => {
        setStaffData(response.data); // Assuming the API response contains staff data with positions
      })
      .catch(error => console.error('Error fetching staff data:', error));
  }, []);

  const handleAssignIssue = (issueId) => {
    setSelectedIssueId(issueId);
    setIsModalOpen(true);
  };

  // const handleAssignToStaff = async () => {
  //   try {
  //     // Make an API call to update the issue's assignedTo and status fields
  //     await axios.put(`http://localhost:8080/issue/assign/${selectedIssueId}`, {
  //       assignedTo: selectedStaffId,
  //     });
  
  //     // Remove the assigned issue from the context
  //     const updatedIssues = issues.filter((issue) => issue._id !== selectedIssueId);
  //     assignIssueToStaff(updatedIssues);
  
  //     // Remove the assigned issue from local storage
  //     localStorage.setItem('issues', JSON.stringify(updatedIssues));
  
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     console.error('Error assigning issue to staff:', error);
  //   }
  // };

  const handleAssignToStaff = async () => {
    try {
      if (!selectedStaffId) {
        console.error('Please select a staff.');
        return;
      }
  
      // Make an API call to update the issue's assignedTo and status fields
      await axios.put(`http://localhost:8080/issue/assign/${selectedIssueId}`, {
        assignedTo: selectedStaffId,
      });
  
      // Update the context to remove the assigned issue
      const updatedIssues = issues.filter((issue) => issue._id !== selectedIssueId);
      assignIssueToStaff(updatedIssues);
       console.log(updatedIssues)
      // Remove the assigned issue from local storage
      localStorage.setItem('issues', JSON.stringify(updatedIssues));
  
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error assigning issue to staff:', error);
    }
  };
  
    

  const handleRejectIssue = async(issueId) => {
    await axios.delete(`http://localhost:8080/issue/delete/${issueId}`);
    rejectIssue(issueId);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl mb-4">Issue Management</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} className="bg-white p-4 mb-4 shadow-md rounded-lg">
            <div className="mb-2">
              <strong>Issue ID:</strong> {issue.id}
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {issue.description}
            </div>
            <div className="mb-2">
              <strong>Status:</strong> {issue.status}
            </div>
            <button onClick={() => handleAssignIssue(issue._id)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
              Assign to Staff
            </button>
            <button onClick={() => handleRejectIssue(issue._id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Reject
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl mb-4">Assign Issue to Staff</h2>
              <select
                value={selectedStaffId}
                onChange={(e) => setSelectedStaffId(e.target.value)}
                className="block w-full py-2 px-3 mb-4 border rounded"
              >
                <option value="">Select Staff</option>
                {staffData.map((staff) => (
                  <option key={staff._id} value={staff._id}>
                    {staff.position}
                  </option>
                ))}
              </select>
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mr-2">
                Cancel
              </button>
              <button onClick={handleAssignToStaff} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuesToAssign;
