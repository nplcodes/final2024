import React, { useEffect, useState } from 'react';
import { BsCheck2All, BsListTask } from 'react-icons/bs';
import AllIssues from './AllIssues';
import IssuesInProgress from './Progress';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Report from './Report';

function MyStaffPage() {
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
        return <AllIssues />;
      case 'new-issue':
        return <IssuesInProgress />;
        case 'report':
        return <Report />;
      default:
        return null;
    }
  };

  return (
    <div className="p-20 gap-20 w-full grid grid-cols-6">
      <div className="pt-10 flex flex-col p-10 gap-3 col-span-1">
        <div
          className={`p-5 text-2xl text-black cursor-pointer ${
            selectedSetting === 'all-issues' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('all-issues')}
        >
          <BsListTask />
        </div>
        <div
          className={`p-5 text-2xl text-black cursor-pointer ${
            selectedSetting === 'new-issue' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('new-issue')}
        >
          <AiOutlineLoading3Quarters className=''/>
        </div>
        <div
          className={`p-5 text-2xl text-black cursor-pointer ${
            selectedSetting === 'report' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('report')}
        >
          <BsCheck2All className=''/>
        </div>
      </div>
      {/* Main part with MyStaffPage   */}
      <div className="col-span-5">
        <div className="pb-10">
          <p className="text-blue-500">Role: {userInfo?.user?.position} </p>
        </div>
        {renderMenuSelection()}
      </div>
    </div>
  );
}

export default MyStaffPage;
