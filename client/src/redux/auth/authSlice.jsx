import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false, // Add isLoggedIn state

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Register Actions..........................
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
        localStorage.removeItem('authState'); // Remove specific item from localStorage on logout
        window.location.replace('/');
      },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
