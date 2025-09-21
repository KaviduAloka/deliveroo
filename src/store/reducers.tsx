import { configureStore } from '@reduxjs/toolkit';
import appReducer, { AppStateInterface } from './appReducer/reducer';
import authReducer, {
  AuthStateInterface,
} from '../features/Auth/store/reducer';
import rootSaga from './sagas';

const sagaMiddleware = require('redux-saga').default();

export interface AppReducerStateInterface {
  appReducer: AppStateInterface;
  authReducer: AuthStateInterface;
}

export const store = configureStore({
  reducer: {
    appReducer,
    authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
