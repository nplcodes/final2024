import React, { useState, useEffect } from 'react';

const dummyCodeRequests = [
  { code: 'ABC123', fullName: 'John Doe', staffAssigned: 'Staff A' },
  { code: 'DEF456', fullName: 'Jane Smith', staffAssigned: 'Staff B' },
  { code: 'GHI789', fullName: 'Bob Johnson', staffAssigned: 'Staff C' },
  // Add more dummy data as needed
];

function RequestedCodes() {
  const [codeRequests, setCodeRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCode, setSelectedCode] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [reason, setReason] = useState('');
  const codesPerPage = 2;

  useEffect(() => {
    // Use dummy data for code requests
    setCodeRequests(dummyCodeRequests);
  }, []);

  const handleConfirm = (code) => {
    setSelectedCode(code);
    setIsConfirmModalOpen(true);
  };

  const handleReject = (code) => {
    // Handle logic for rejecting code
    console.log(`Reject code: ${code}`);
  };

  const handleReasonSubmit = () => {
    // Handle logic for submitting reason
    console.log(`Reason for ${selectedCode}: ${reason}`);
    setIsConfirmModalOpen(false);
    setSelectedCode(null);
    setReason('');
  };

  // Pagination
  const indexOfLastCode = currentPage * codesPerPage;
  const indexOfFirstCode = indexOfLastCode - codesPerPage;
  const currentCodes = codeRequests.slice(indexOfFirstCode, indexOfLastCode);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(codeRequests.length / codesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative pt-10">
        <div className="flex z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-[60%] border">
            <div>
              <p className="text-2xl pt-5">Requested Codes</p>
              <p className="pb-5">View and manage code requests</p>
            </div>
            {currentCodes.length > 0 ? (
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-300 text-gray-700 text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Code</th>
                    <th className="py-3 px-6 text-left">Full Name</th>
                    <th className="py-3 px-6 text-left">Staff Assigned</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {currentCodes.map((request, index) => (
                    <tr
                      key={request.code}
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">{request.code}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{request.fullName}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{request.staffAssigned}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <button
                          onClick={() => handleConfirm(request.code)}
                          className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => handleReject(request.code)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No code requests found.</p>
            )}
            {/* Pagination */}
            <div className="mt-4 flex justify-end">
              <nav>
                <ul className="pagination flex space-x-2">
                  {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                      <button
                        onClick={() => handlePageClick(number)}
                        className={`${
                          currentPage === number ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
                        } px-3 py-1 border rounded-md`}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Confirm Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
          <div className="relative w-[500px] bg-white rounded-lg shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              <p className="text-lg font-bold">Confirm Code</p>
              <textarea
                className="w-full h-48 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-400"
                placeholder="Enter reason for confirmation..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsConfirmModalOpen(false)}
                  className="text-gray-500 px-4 py-2 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReasonSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestedCodes
