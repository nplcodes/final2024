import React, { useState, useContext } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdPowerSettingsNew } from 'react-icons/md';
import { FaBars, FaSearch } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext'; // Import the UserContext
import { useNavigate } from 'react-router-dom';

const Topnav = ({ toggleSidebar }) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('');
  const { logout } = useContext(UserContext); // Get the logout function from UserContext

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLogout = () => {
    // Call the logout function to clear user data and token
    logout();
    navigate('/');
    
  };

  return (
    <div className="bg-white text-gray-700 h-16 flex justify-between items-center px-6 shadow-md">
      <div className="flex items-center">
        <button
          className="text-gray-700 focus:outline-none mr-3 md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <div className="flex items-center flex-grow justify-center">
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search ....."
              className="bg-transparent text-gray-700 rounded-md py-2 px-10 focus:outline-none focus:shadow-outline border-none"
            />
            <FaSearch className="absolute left-3 top-2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative group">
          <button className="flex items-center focus:outline-none" onClick={handleLogout}>
            <div className="mr-3">
              <IoMdNotificationsOutline className="text-2xl" />
            </div>
            <MdPowerSettingsNew className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
