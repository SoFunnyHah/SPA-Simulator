import {
  ADD_POST, DELETE_POST, SET_POSTS,
} from '../types';

export default function postsReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return [...state, payload]; // payload -> 1 post
    case SET_POSTS:
      return payload; // payload -> arr
    case DELETE_POST:
      return state.filter((post) => post.id !== payload); // payload -> id
    default:
      return state;
  }
}
