import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import your components
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';
import Dashbord from './pages/Dashbord';
import HeroSectionStudent from './components/Student/HeroSectionStudent';
import IssuesList from './components/Student/IssuesList';
import ManageIssue from './components/Student/ManageIssue';
import UpdateIssue from './components/Student/updateIssue';
import StaffMembers from './components/Student/StaffMembers';
import AccountSettings from './components/Student/AccountSettings';
import Board from './components/General/Board';
import Apointment from './components/Student/Apointment';
import AppointmentsList from './components/Student/AppointmentsList';
import Notifications from './components/Student/Notifications';
import IssuePage from './components/Student/IssuePage';
import StaffHomePage from './components/Staff/StaffHomePage';
import Appointments from './components/Staff/Appointments';
// import IssuePageStaff from './components/Staff/IssuePage';
import TimeSlots from './components/Staff/TimeSlots';
import ManageSystem from './components/Admin/ManageSystem';
import AccountSettingsAdmin from './components/Admin/Settings';
import Users from './components/Admin/UsersList';
import IssuesToAssign from './components/Admin/IssuesList';
import CreatePost from './components/General/CreatePost';
import { useEffect, useState } from 'react';
import StaffPage from './components/Staff/staffPage';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [userState, setUserState] = useState(null);
  
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('authState'));
    if (storedUserInfo && storedUserInfo.isLoggedIn) {
      setUserState(storedUserInfo.isLoggedIn);
    }
  }, []);

  console.log(userState, isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn && <LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/Home" element={!isLoggedIn ? <Navigate to="/" /> :<Dashbord />}>
          <Route path="update-issue" element={<UpdateIssue />} />
          <Route path="book" element={<Apointment />} />
          <Route path="book-list" element={<AppointmentsList />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path="general-board" element={<Board />} />
          <Route path="staff" element={<StaffMembers />} />
          <Route path="hero" element={<HeroSectionStudent />} />
          <Route path="issue-list" element={<IssuesList />} />
          <Route path="issue-page" element={!isLoggedIn ? <Navigate to="/" /> : <IssuePage />} />
          <Route path="manage-issue/:issueId" element={<ManageIssue />} />

          <Route path="staff-home" element={<StaffHomePage />} />
          <Route path="staff-book-list" element={<Appointments />} />
          <Route path="staff-notifications" element={<Notifications />} />
          <Route path="staf-post" element={<CreatePost />} />
          <Route path="timeslots" element={<TimeSlots />} />
          {/* <Route path="staff-issue-page" element={<IssuePageStaff />} /> */}



          <Route path="staff-issue-page" element={<StaffPage />} />


          <Route path="admin/manage" element={<ManageSystem />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/issues" element={<IssuesToAssign />} />
          <Route path="admin/setting" element={<AccountSettingsAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
