import React, { useEffect, useState} from 'react'
import { BsListTask, BsPlus } from "react-icons/bs";
import {  FcCancel } from "react-icons/fc";
import { Link } from 'react-router-dom';
import IssuePageMenuAllIssues from './IssuePage_menu_All_issues';
import NewIssueForm from './subComponents/NewIssueForm';
import Rejected from './subComponents/Rejected';


function IssuePage() {
  const [userInfo, setUserState] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('authState'));
    if (userInfo && userInfo.isLoggedIn) {
      setUserState(userInfo);
    }
  }, []);


    const [selectedSetting, setSelectedSetting] = useState('all-issues');
    const handleSettingClick = (setting) => {
      setSelectedSetting(setting);
    };
  
    const renderMenuSelection = () => {
      switch (selectedSetting) {
        case 'all-issues':
          return <IssuePageMenuAllIssues />;
        case 'new-issue':
          return <NewIssueForm />;
        case 'rejected':
          return <Rejected />;
        default:
          return null;
      }
    };
    
    return (
    <div className='p-20 gap-20 w-full  grid grid-cols-6'>
        <div className='pt-10 flex flex-col p-10 gap-3 col-span-1'>
            <div  className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'all-issues' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('all-issues')}><BsListTask /></div>
            <Link to="#">
               <div  className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'new-issue' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('new-issue')}><BsPlus /></div>
            </Link>
            <div className={`p-5 text-2xl text-black cursor-pointer ${selectedSetting === 'rejected' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSettingClick('rejected')}><FcCancel /></div>
        </div>
        {/* Main part with IssuePage   */}
        <div className='col-span-5'>
            {/* <div className='pb-10'>
                <p className='text-blue-500'>Role: {userInfo?.user?.position} </p>
            </div> */}
            {renderMenuSelection()}

        </div>
    </div>
  )
}
export default IssuePage