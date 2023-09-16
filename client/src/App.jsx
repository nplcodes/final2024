import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Login'; // Import your login component
import RegisterForm from './pages/Register'; // Import your login component

import Dashbord from './pages/Dashbord'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
           <Route  path="/register" element={<RegisterForm />} />
        <Route path="/Home" element={<Dashbord />} />
      </Routes>
    </Router>
  );
};

export default App;
