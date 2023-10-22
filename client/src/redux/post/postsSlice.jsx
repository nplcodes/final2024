// postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const { postId, updatedData } = action.payload;
      const postIndex = state.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        state[postIndex] = { ...state[postIndex], ...updatedData };
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const postIndex = state.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        state[postIndex].comments.push(comment);
      }
    },
    toggleLike: (state, action) => {
      const { postId, userId } = action.payload;
      const postIndex = state.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        const likedByUser = state[postIndex].likes.includes(userId);
        if (likedByUser) {
          state[postIndex].likes = state[postIndex].likes.filter(id => id !== userId);
        } else {
          state[postIndex].likes.push(userId);
        }
      }
    },
  },
});

export const postActions= postsSlice.actions;
export default postsSlice.reducer;
