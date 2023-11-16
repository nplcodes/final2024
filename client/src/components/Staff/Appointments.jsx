import { Link } from 'react-router-dom';
import { DiRedis } from "react-icons/di";
import { BiBookmarkAltMinus } from "react-icons/bi";
import AllStaffReport from './report/AllStaffReport';
import SingleStaffReport from './report/SingleStaffReport';
import { useState } from 'react';


function Appointments() {

  const [selectedSetting, setSelectedSetting] = useState('single-report');
  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };

  const renderMenuSelection = () => {
    switch (selectedSetting) {
      case 'single-report':
        return <SingleStaffReport />;
      case 'all-reports':
        return <AllStaffReport />;
      default:
        return null;
    }
  };

    return (
      <div className='p-10'>
        <div>
          <p className='text-blue-500 text-2xl'>Overall Report</p>
        </div>
        {/* Booking left part */}
        <div className='w-full flex p-10'>
          <div className='bg-gray-100 w-[20%] h-[200px] flex flex-col items-center gap-2 justify-center'>
            <div 
               className={`p-5 text-2xl text-black cursor-pointer ${
               selectedSetting === 'single-report' ? 'bg-blue-500 rounded-md text-white' : ''
                }`}
                onClick={() => handleSettingClick('single-report')}
            ><DiRedis /></div>
            <Link to="#">
              <p
                className={`p-5 text-2xl text-black cursor-pointer ${
                selectedSetting === 'all-reports' ? 'bg-blue-500 rounded-md text-white' : ''
                }`}
                onClick={() => handleSettingClick('all-reports')}
              ><BiBookmarkAltMinus /></p>
            </Link>
          </div>
          <div className='w-[80%]'>
            {/* select data */}
            <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <label class="text-gray-600" for="from">From:</label>
                <input type='date' id="from" class="p-2 border border-gray-300 rounded" />
                <label class="text-gray-600" for="to">To:</label>
                <input type='date' id="to" class="p-2 border border-gray-300 rounded" />
                <button id="okButton" class="bg-green-500 text-white px-4 py-2 rounded">OK</button>
            </div>
            {renderMenuSelection()}
          </div>
        </div>
      </div>
    );
  }
  
  export default Appointments;
  
  