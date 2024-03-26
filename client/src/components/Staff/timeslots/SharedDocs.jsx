import React from 'react';
import { useSelector } from 'react-redux';

function SharedDocs() {
  const issueDetails = useSelector((state) => state.issue.studentIssues);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Shared Docs Between staff and student</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {issueDetails?.issue.attachments.map((issue) => (
          <div key={issue._id} className="bg-white rounded shadow-md p-4">
            <div className="w-full h-auto mb-2" />
              {issue.filename}
              <a href={issue.url} target="_blank" rel="noopener noreferrer" className="block text-blue-500">View Attachment</a> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharedDocs;
