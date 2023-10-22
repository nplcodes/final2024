import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/authSlice';
import issueSlice from './issue/issueSlice';
import postsSlice from './post/postsSlice';


const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        issue: issueSlice.reducer,
        post: postsSlice.reducer,
    }
})
export default store;