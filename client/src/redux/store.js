import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './reducers/postsReducer';
// import postSagaWatcher from './sagas/postsSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});
