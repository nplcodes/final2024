import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Login'; // Import your login component
import RegisterForm from './pages/Register'; // Import your login component

import Dashbord from './pages/Dashbord'
import NewIssueForm from './components/Student/NewIssueForm';
import HeroSectionStudent from './components/Student/HeroSectionStudent';
import IssuesList from './components/Student/IssuesList';
import ManageIssue from './components/Student/ManageIssue'
import UpdateIssue from './components/Student/updateIssue';
import StaffMembers from './components/Student/StaffMembers';
import AccountSettings from './components/Student/AccountSettings';
import Board from './components/General/Board';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
           <Route  path="/register" element={<RegisterForm />} />
           <Route path="/Home" element={<Dashbord />} >
           <Route  path="new-issue" element={<NewIssueForm />} />
           <Route  path="update-issue" element={<UpdateIssue />} />
           <Route  path="settings" element={<AccountSettings />} />
           <Route  path="general-board" element={<Board />} />

           <Route  path="staff" element={<StaffMembers />} />

           <Route exact path="hero" element={<HeroSectionStudent />} />
           <Route exact path="issue-list" element={<IssuesList />} />
            <Route path="manage-issue" element={<ManageIssue />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
