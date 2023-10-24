// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
