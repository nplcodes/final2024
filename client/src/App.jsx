import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Login'; // Import your login component
import RegisterForm from './pages/Register'; // Import your login component

import Dashbord from './pages/Dashbord'
import HeroSectionStudent from './components/Student/HeroSectionStudent';
import IssuesList from './components/Student/IssuesList';
import ManageIssue from './components/Student/ManageIssue'
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
import IssuePageStaff from './components/Staff/IssuePage';
import TimeSlots from './components/Staff/TimeSlots';
import ManageSystem from './components/Admin/ManageSystem';
import AccountSettingsAdmin from './components/Admin/Settings';
import Users from './components/Admin/UsersList';
import IssuesToAssign from './components/Admin/IssuesList';
import CreatePost from './components/General/CreatePost';
import Pending from './pages/Pending';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
           <Route  path="/register" element={<RegisterForm />} />
           <Route  path="/pending" element={<Pending />} />
           <Route path="/Home" element={<Dashbord />} >
            {/* Students routes */}
           <Route  path="update-issue" element={<UpdateIssue />} />
           <Route  path="book" element={<Apointment />} />
           <Route  path="book-list" element={<AppointmentsList />} />
           <Route  path="notifications" element={<Notifications />} />
           <Route  path="settings" element={<AccountSettings />} />
           <Route  path="general-board" element={<Board />} />
           <Route  path="staff" element={<StaffMembers />} />
           <Route exact path="hero" element={<HeroSectionStudent />} />
           <Route exact path="issue-list" element={<IssuesList />} />
           <Route exact path="issue-page" element={<IssuePage />} />
           <Route path="manage-issue" element={<ManageIssue />} />


           {/* Staff Routes */}
           <Route  path="staff-home" element={<StaffHomePage />} />
           <Route  path="staff-book-list" element={<Appointments />} />
           <Route  path="staff-notifications" element={<Notifications />} />
           <Route  path="staf-post" element={<CreatePost />} />
           <Route  path="timeslots" element={<TimeSlots />} />
           <Route exact path="staff-issue-page" element={<IssuePageStaff />} />

           {/* Admin of the system */}
           {/* ............................... */}
           <Route  path="admin/manage" element={<ManageSystem />} />
           <Route  path="admin/users" element={<Users />} />
           <Route  path="admin/issues" element={<IssuesToAssign />} />
           <Route  path="admin/setting" element={<AccountSettingsAdmin />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
