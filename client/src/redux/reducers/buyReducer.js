import {
  ADD_BUY_PRICE,
} from '../types';

export default function buyReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BUY_PRICE:
      return (Math.random() * (payload - payload * 0.98) + (payload * 0.98)).toFixed(4);
    default:
      return state;
  }
}
