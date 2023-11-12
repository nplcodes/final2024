import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/authSlice';
import issueSlice from './issue/issueSlice';

const savedAuthState = JSON.parse(sessionStorage.getItem('authState')) || {};

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        issue: issueSlice.reducer,
    },
    preloadedState: {
        auth: savedAuthState,
      },
})
export default store;