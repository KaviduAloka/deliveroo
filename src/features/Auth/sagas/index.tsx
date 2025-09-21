import { takeEvery } from 'redux-saga/effects';
import * as types from '../store/types';
import { emailRegisterSaga, googleSigninSaga } from './authSagas';

export default [
  takeEvery(types.GOOGLE_SIGNIN, googleSigninSaga),
  takeEvery(types.EMAIL_REGISTER, emailRegisterSaga),
];
