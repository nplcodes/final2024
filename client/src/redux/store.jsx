import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/authSlice';
import issueSlice from './issue/issueSlice';
import codeSlice from './request_codes/codesSlice';
import studentsSlice from './students/studentSlice';


const savedAuthState = JSON.parse(sessionStorage.getItem('authState')) || {};

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        issue: issueSlice.reducer,
        codes: codeSlice.reducer,
        students: studentsSlice.reducer

    },
    preloadedState: {
        auth: savedAuthState,
      },
})
export default store;