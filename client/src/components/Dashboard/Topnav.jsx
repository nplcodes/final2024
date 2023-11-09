import React, { useEffect, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdPowerSettingsNew } from 'react-icons/md';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/auth/authSlice';
import axios from 'axios';


const Topnav = ({ toggleSidebar }) => {
  const user = useSelector((user)=> user.auth.user);
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
  // fecth notification
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/notification/${user._id}`);
        const userNotifications = response.data;
        setNotifications(userNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []); 


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
              {notifications.length > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 ml-1">
                  {notifications.length}
                </span>
              )}
            </div>
            <MdPowerSettingsNew className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
