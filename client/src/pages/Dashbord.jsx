// import Sidebar from '../components/Dashboard/Sidebar';
// import Topnav from '../components/Dashboard/Topnav';
// import MainContent from '../components/Dashboard/MainContent';

// const Dashbord = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex flex-col w-full">
//         <Topnav />
//         <MainContent />
//       </div>
//     </div>
//   );
// };

// export default Dashbord;

// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Topnav from '../components/Dashboard/Topnav';
import MainContent from '../components/Dashboard/MainContent';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on screens smaller than md on initial load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col w-full">
        <Topnav toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  );
};

export default App;

