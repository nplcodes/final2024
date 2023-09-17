import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Topnav = ({ toggleSidebar }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            placeholder="Tap and search "
            className="bg-gray-200 text-gray-700 rounded-md py-2 px-10 focus:outline-none focus:shadow-outline"
          />
          <FaSearch className="absolute left-3 top-2 text-gray-500" />
        </div>
      </div>
      </div>

      <div className="flex items-center">
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <span className="text-gray-700 ml-2">Welcome, Leon</span>

            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://via.placeholder.com/150"
              alt="User"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 py-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
              <a
                href="n"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="n"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="n"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
