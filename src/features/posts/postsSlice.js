import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    approvePost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.status = 'approved';
    },
    rejectPost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.status = 'rejected';
    },
  },
});

export const { setPosts, approvePost, rejectPost } = postsSlice.actions;

export default postsSlice.reducer;
