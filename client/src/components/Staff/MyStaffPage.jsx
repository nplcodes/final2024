import React, { useEffect, useState } from 'react';
import AllIssues from './AllIssues';
import IssuesInProgress from './Progress';
import Report from './Report';

function MyStaffPage() {
  const [userInfo, setUserState] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('authState'));
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
    <div className="px-32 py-16 w-full grid grid-cols-6">
      <div className="pt-10 flex flex-col p-6 gap-3 col-span-1 border bg-gray-50">
        <div
          className={`p-5 text-black cursor-pointer rounded-md flex justify-center items-center ${
            selectedSetting === 'all-issues' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('all-issues')}
        >
          New
        </div>
        <div
          className={`p-5 text-black rounded-md cursor-pointer flex justify-center items-center ${
            selectedSetting === 'new-issue' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('new-issue')}
        >
         Progressing
        </div>
        <div
          className={`p-5 text-black cursor-pointer rounded-md flex justify-center items-center ${
            selectedSetting === 'report' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('report')}
        >
           Closed
        </div>
      </div>
      {/* Main part with MyStaffPage   */}
      <div className="col-span-5 border  h-screen px-8">
        <div className="pb-10">
          {/* <p className="text-blue-500">Role: {userInfo?.user?.position} </p> */}
        </div>
        {renderMenuSelection()}
      </div>
    </div>
  );
}

export default MyStaffPage;
