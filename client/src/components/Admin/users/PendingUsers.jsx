import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function PendingUsers() {
  const pendingUsers = useSelector((state) => state.auth.pendingUsers);
  const pendingUsersCount = pendingUsers?.length;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Get current users based on pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = pendingUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentUsers)

  return (
    <>
      <div className="pb-10">
        <p className="text-blue-500 text-2xl">Users List</p>
      </div>
      <p className="pb-3 font-bold">Pending Users ({pendingUsersCount})</p>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Name</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Role</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Date Joined</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
        {currentUsers.map((user, index) => (
          <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-6 py-4 whitespace-no-wrap">
              <Link to={`/Home/admin/manage-users/${user._id}`}>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900">{user?.fullName}</p>
                  </div>
                </div>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <Link to={`/Home/admin/manage-users/${user._id}`}>
                <p className="text-gray-900">{user?.role}</p>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <Link to={`/Home/admin/manage-users/${user._id}`}>
                <p className="text-gray-900">
                  {new Date(user?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <Link to={`/Home/admin/manage-users/${user._id}`}>
                <span className="relative inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
                  <span className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                  <span className="relative">{user?.approvalStatus}</span>
                </span>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      {/* Include Pagination component */}
      <Pagination itemsPerPage={itemsPerPage} totalItems={pendingUsers.length} paginate={paginate} />
    </>
  );
}

export default PendingUsers;
