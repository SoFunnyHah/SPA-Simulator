// import axios from 'axios';
// import axios from 'axios';
import {
  ADD_POST, ADD_POST_ASYNC, DELETE_POST, DELETE_POST_ASYNC,
  GET_POSTS_ASYNC, SET_POSTS, UPDATE_POST, UPDATE_POST_ASYNC,
} from '../types';

export const addPost = (payload) => ({ type: ADD_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });
export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });

export const addPostAsync = (payload) => ({ type: ADD_POST_ASYNC, payload });
export const deletePostAsync = (payload) => ({ type: DELETE_POST_ASYNC, payload });
export const getPostsAsync = (payload) => ({ type: GET_POSTS_ASYNC, payload });
export const updatePostAsync = (payload) => ({ type: UPDATE_POST_ASYNC, payload });
