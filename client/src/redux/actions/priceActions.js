import { ADD_BUY_PRICE, ADD_SELL_PRICE } from '../types';

export const setBuyPrice = (payload) => ({ type: ADD_BUY_PRICE, payload });
export const setSellPrice = (payload) => ({ type: ADD_SELL_PRICE, payload });
