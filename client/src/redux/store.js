import { configureStore } from '@reduxjs/toolkit';
import buyReducer from './reducers/buyReducer';
import sellReducer from './reducers/sellReducer';

export default configureStore({
  reducer: {
    buyPrice: buyReducer,
    sellPrice: sellReducer,
  },
});
