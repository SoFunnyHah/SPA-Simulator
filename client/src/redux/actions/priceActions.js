// import axios from 'axios';
// import axios from 'axios';
import { ADD_BUY_PRICE, ADD_SELL_PRICE } from '../types';

export const setBuyPrice = (payload) => ({ type: ADD_BUY_PRICE, payload });
export const setSellPrice = (payload) => ({ type: ADD_SELL_PRICE, payload });

// export const deletePost = (payload) => ({ type: DELETE_POST, payload });
// export const setPosts = (payload) => ({ type: SET_POSTS, payload });
// export const updatePost = (payload) => ({ type: UPDATE_POST, payload });

// export const addPostAsync = (payload) => ({ type: ADD_POST_ASYNC, payload });
// export const deletePostAsync = (payload) => ({ type: DELETE_POST_ASYNC, payload });
// export const getPostsAsync = (payload) => ({ type: GET_POSTS_ASYNC, payload });
// export const updatePostAsync = (payload) => ({ type: UPDATE_POST_ASYNC, payload });
