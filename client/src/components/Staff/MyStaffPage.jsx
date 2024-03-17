import React, { useEffect, useState } from 'react';
import AllIssues from './AllIssues';
import IssuesInProgress from './Progress';
import Report from './Report';
import FeedbackComponent from './timeslots/feedBacks';

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
      case 'feedback':
        return <FeedbackComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="px-8 py-16 w-full grid grid-cols-6">
      <div className="pt-10 flex flex-col p-6 gap-3 col-span-1 border bg-gray-50">
        <div
          className={`p-5 text-black cursor-pointer rounded-md flex justify-center items-center ${
            selectedSetting === 'all-issues' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('all-issues')}
        >
          Issues
        </div>
        <div
          className={`p-5 text-black rounded-md cursor-pointer flex justify-center items-center ${
            selectedSetting === 'feedback' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('feedback')}
        >
          Feedbacks
        </div>
        <div
          className={`p-5 text-black rounded-md cursor-pointer flex justify-center items-center ${
            selectedSetting === 'new-issue' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleSettingClick('new-issue')}
        >
          Busting issues
        </div>
      </div>
      <div className="col-span-5 border h-screen px-8">
        <div className="pb-10">
          {/* Your other content */}
        </div>
        <div className="overflow-auto">
          {renderMenuSelection()}
        </div>
      </div>
    </div>
  );
}

export default MyStaffPage;
