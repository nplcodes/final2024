import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Login'; // Import your login component
import RegisterForm from './pages/Register'; // Import your login component

import Dashbord from './pages/Dashbord'
import NewIssueForm from './components/Student/NewIssueForm';
import HeroSectionStudent from './components/Student/HeroSectionStudent';
import IssuesList from './components/Student/IssuesList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
           <Route  path="/register" element={<RegisterForm />} />
        <Route path="/Home" element={<Dashbord />} >
           <Route  path="new-issue" element={<NewIssueForm />} />
           <Route exact path="hero" element={<IssuesList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
