import React, { useEffect, useState} from 'react'
import IssuePageMenuAllIssues from './IssuePage_menu_All_issues';
import NewIssueForm from './subComponents/NewIssueForm';
import ClosedIssues from './subComponents/RequestCode';
import RequestCode from './subComponents/RequestCode';


function IssuePage() {
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
          return <IssuePageMenuAllIssues />;
        case 'new-issue':
          return <NewIssueForm />;
        case 'requestCode':
          return <RequestCode />;
        default:
          return null;
      }
    };

    
    return (
    <div className="px-8 py-5 w-full grid grid-cols-6">
    <div className="pt-10 flex flex-col p-6 gap-3 col-span-1 border bg-gray-50">
      <div
        className={`p-5 text-black cursor-pointer rounded-md flex justify-center items-center ${
          selectedSetting === 'new-issue' ? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => handleSettingClick('new-issue')}
      >
        Rise New
      </div>
      <div
        className={`p-5 text-black rounded-md cursor-pointer flex justify-center items-center ${
          selectedSetting === 'all-issues' ? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => handleSettingClick('all-issues')}
      >
       All Issues
      </div>
      <div
        className={`p-5 text-black cursor-pointer rounded-md flex justify-center items-center ${
          selectedSetting === 'requestCode' ? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => handleSettingClick('requestCode')}
      >
         Request Code
      </div>
    </div>
    {/* Main part with MyStaffPage   */}
    <div className="col-span-5 border h-full px-2">
      <div className="pb-5">
      </div>
      {renderMenuSelection()}
    </div>
  </div>
  )
}
export default IssuePage