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
    // register..........................
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
    // Login..............................
    loginUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      loginUserSuccess: (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true; // Set isLoggedIn to true on successful login
      },
      loginUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    //   Logout ................................
      logoutUser(state) {
        state.user = null;
        state.isLoggedIn = false;
        window.location.replace('/');
      },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
