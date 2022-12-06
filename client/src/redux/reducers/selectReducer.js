import {
  ADD_SELECTION,
} from '../types';

export default function selectReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_SELECTION:
      return payload;
    default:
      return state;
  }
}
