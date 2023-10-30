import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdPowerSettingsNew } from 'react-icons/md';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/auth/authSlice';


const Topnav = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(authActions.logoutUser());
    e.preventDefault();
    
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
              placeholder=" tap to search ....."
              className="bg-transparent text-gray-700 rounded-md py-2 px-10 focus:outline-none focus:shadow-outline"
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
