import { configureStore } from '@reduxjs/toolkit';
import buyReducer from './reducers/buyReducer';
import historyReducer from './reducers/historyReducer';
import selectReducer from './reducers/selectReducer';
import sellReducer from './reducers/sellReducer';

export default configureStore({
  reducer: {
    buyPrice: buyReducer,
    sellPrice: sellReducer,
    history: historyReducer,
    select: selectReducer,
  },
});
