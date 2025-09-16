import { configureStore } from '@reduxjs/toolkit';
import appReducer, { AppStateInterface } from './appReducer/reducer';
import rootSaga from './sagas';

const sagaMiddleware = require('redux-saga').default();

export interface AppReducerStateInterface {
  appReducer: AppStateInterface;
}

export const store = configureStore({
  reducer: {
    appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
