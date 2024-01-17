// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // Import your components
// import LoginForm from './pages/Login';
// import RegisterForm from './pages/Register';
// import Dashbord from './pages/Dashbord';
// import HeroSectionStudent from './components/Student/HeroSectionStudent';
// import IssuesList from './components/Student/IssuesList';
// import UpdateIssue from './components/Student/updateIssue';
// import StaffMembers from './components/Student/StaffMembers';
// import AccountSettings from './components/Student/AccountSettings';
// import Board from './components/General/Board';
// import Apointment from './components/Student/Apointment';
// import AppointmentsList from './components/Student/AppointmentsList';
// import Notifications from './components/Student/Notifications';
// import IssuePage from './components/Student/IssuePage';
// import StaffHomePage from './components/Staff/StaffHomePage';
// import Appointments from './components/Staff/Appointments';
// import TimeSlots from './components/Staff/TimeSlots';
// import ManageSystem from './components/Admin/ManageSystem';
// import AccountSettingsAdmin from './components/Admin/Settings';
// import Users from './components/Admin/UsersList';
// import IssuesToAssign from './components/Admin/IssuesList';
// import CreatePost from './components/General/CreatePost';
// import { useEffect } from 'react';
// import StaffPage from './components/Staff/staffPage';
// import MyStaffPage from './components/Staff/MyStaffPage';
// import UpdatePost from './components/General/UpdatePost'
// import ReadPost from './components/General/ReadPost';
// import BoardChat from './components/General/BoardChat';
// import BoardIssuesTOChatOn from './components/General/BoardIssuesTOChatOn';
// import { useDispatch, useSelector } from 'react-redux';
// import UserListDetails from './components/Admin/users/UserListDetails';
// import IssueDetailsPage from './components/Staff/IssueDetailsPage';
// import { issueActions } from './redux/issue/issueSlice';
// import axios from 'axios';
// import SingleStaffReport from './components/Staff/report/SingleStaffReport';


// const App = () => {
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   const { isLoggedIn } = authState;


//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/post`)
//       .then((response) => {
//         dispatch(issueActions.setPosts(response.data));
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
  
// }, [dispatch]);
  

//   return (
//     <Router>
      // <Routes>
      //   <Route path="/" element={!isLoggedIn && <LoginForm />} />
      //   <Route path="/register" element={<RegisterForm />} />
      //   <Route path="/Home" element={!isLoggedIn ? <Navigate to="/" /> :<Dashbord />}>
      //     <Route path="update-issue/:id" element={<UpdateIssue />} />
      //     <Route path="book" element={<Apointment />} />
      //     <Route path="book-list" element={<AppointmentsList />} />
      //     <Route path="notifications" element={<Notifications />} />
      //     <Route path="settings" element={<AccountSettings />} />
      //     <Route path="general-board" element={<Board />} />
      //     <Route path="staff-chatboard/:issueId" element={<BoardChat />} />
      //     <Route path="board-issues" element={<BoardIssuesTOChatOn />} />

      //     <Route path="read/:postId" element={<ReadPost />} />
      //     <Route path="staff" element={<StaffMembers />} />
      //     <Route path="hero" element={<HeroSectionStudent />} />
      //     <Route path="issue-list" element={<IssuesList />} />
      //     <Route path="issue-page" element={!isLoggedIn ? <Navigate to="/" /> : <IssuePage />} />
      //     <Route path="manage-issue/:issueId" element={<TimeSlots />} />
      //     {/* Staff  page */}
      //     <Route path="staff-home" element={<StaffHomePage />} />
      //     <Route path="staff-book-list" element={<Appointments />} />
      //     <Route path="staff-notifications" element={<Notifications />} />
      //     <Route path="staf-post" element={<CreatePost />} />
      //     <Route path="timeslots/:issueId" element={<TimeSlots />} />
      //     <Route path="staff-issue-page" element={<MyStaffPage />} />
      //     <Route path="staff-report" element={<SingleStaffReport />} />
      //     <Route path="staff-update-post/:postId" element={<UpdatePost />} />

      //      {/* Middleman page */}
      //     <Route path="admin/manage" element={<ManageSystem />} />
      //     <Route path="admin/users" element={<Users />} />
      //     <Route path="admin/manage-users/:userId" element={<UserListDetails />} />

      //     <Route path="admin/issues" element={<IssuesToAssign />} />
      //     <Route path="admin/setting" element={<AccountSettingsAdmin />} />
      //     <Route path="middleman-issue-page" element={<StaffPage />} />
      //     <Route path="middleman-issue-page/:issueId" element={<IssueDetailsPage />} />
      //   </Route>
      // </Routes>
//     </Router>
//   );
// };

// export default App;