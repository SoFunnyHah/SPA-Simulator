import {
  ADD_HISTORY,
} from '../types';

export default function historyReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_HISTORY:
      return [...state, payload];
    default:
      return state;
  }
}
