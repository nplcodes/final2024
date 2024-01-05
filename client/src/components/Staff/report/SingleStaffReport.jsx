import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function SingleStaffReport() {
  const assignedToMe = useSelector((state) => state.issue.assignedToMe);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (type, date) => {
    if (type === 'start') {
      setStartDate(date);
    } else if (type === 'end') {
      setEndDate(date);
    }
  };

  const filterIssuesByDate = () => {
    if (!startDate || !endDate) {
      return assignedToMe;
    }

    return assignedToMe.filter(
      (issue) => issue.date >= startDate && issue.date <= endDate
    );
  };

  const filteredIssues = filterIssuesByDate();

  const assignedToMeCount = filteredIssues.length;

  // closed issues
  const filteredClosedIssues = filteredIssues.filter((issue) => issue.status === 'closed');
  const filteredClosedIssuesCount = filteredClosedIssues.length;

  // open issues
  const filteredOpenIssues = filteredIssues.filter((issue) => issue.status === 'assigned');
  const filteredOpenIssuesCount = filteredOpenIssues.length;

  return (
    <div className="container mx-auto mt-8 px-64 py-16 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        {assignedToMe[0] ? assignedToMe[0].category + ' Report' : 'No issues yet'}
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Closed Issues</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Done:</span>
              <span className="text-green-600">{filteredClosedIssuesCount}</span>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Open Issues</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Progress:</span>
              <span className="text-red-600">{filteredOpenIssuesCount}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Total Issues</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Combined Total:</span>
            <span className="text-blue-600">{assignedToMeCount}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Select Date Range:</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              onChange={(e) => handleDateChange('start', e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              onChange={(e) => handleDateChange('end', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
