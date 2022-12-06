import {
  ADD_SELL_PRICE,
} from '../types';

export default function sellReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_SELL_PRICE:
      return (Math.random() * (payload - payload * 0.98) + (payload * 0.98)).toFixed(4);
      // payload -> price

    default:
      return state;
  }
}
