import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import mockPosts from "../features/posts/mockData";


//Get saved posts from localStorage 

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('moderation-posts');
        if (data) {
            return JSON.parse(data);
        }
        return null;
    } catch (err) {
        console.log('Could not load posts from localStorage', err);
        return null;
    }
};

// Save posts to localStorage

const saveToLocalStorage = (posts) => {
    try {
        const data = JSON.stringify(posts);
        localStorage.setItem('moderation-posts', data);
    } catch (err) {
        console.log('Could not save posts to localStorage', err);
    }
};


// Load either saved posts or fallback to mock
const savedPosts = loadFromLocalStorage();
const initialPosts = savedPosts && savedPosts.length > 0 ? savedPosts : mockPosts;
console.log('Using posts for initial state:', initialPosts);

// Initial state

const preloadedState = {
    posts: {
        posts: initialPosts
    }
};



export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
    preloadedState
});

// Watch for store changes and update localStorage

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state.posts.posts);
});