import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false,
  users: [],

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Register Actions.............
    registerUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setUsersAfterApprove: (state, action) => {
      state.users = state.users.filter(user => user._id !== action.payload);

    },
    rejectUser: (state, action) => {
      state.users = state.users.filter(user => user._id !== action.payload);
    },
    deactivateAccount:(state, action)=>{
      const { userId } = action.payload;
      const user = state.users.find(user => user._id === userId);

      if (user) {
        user.accountStatus = 'inactive';
      }

    },
    activateAccount:(state, action)=>{
      const { userId } = action.payload;
      const user = state.users.find(user => user._id === userId);

      if (user) {
        user.accountStatus = 'active';
      }

    },
    updateAdditionalUserInfo : (state, action)=>{
      const {fullName, email, username, role, position, level, faculty} = action.payload;
      state.user.email = email || state.user.email;
      state.user.username = username || state.user.username;
      state.user.fullName = fullName || state.user.fullName;
      state.user.role = role || state.user.role;
      state.user.position = position || state.user.position;
      state.user.level = level || state.user.level;
      state.user.faculty = faculty || state.user.faculty;

      localStorage.setItem('authState', JSON.stringify(state));
    },

    userInfoUpdate: (state, action)=>{
      const {fullName, email, username} = action.payload;
      state.user.email = email || state.user.email;
      state.user.username = username || state.user.username;
      state.user.fullName = fullName || state.user.fullName;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload;
    },
    // Login Actions..............................
    loginUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      loginUserSuccess: (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true; 
        localStorage.setItem('authState', JSON.stringify(state));
      },
      loginUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    //   Logout Action ................................
      logoutUser(state) {
        state.user = null;
        state.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('issueState'); 
        localStorage.removeItem('authState'); 

        window.location.replace('/');
      },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
