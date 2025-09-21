import { takeEvery } from 'redux-saga/effects';
import * as types from '../store/types';
import {
  emailRegisterSaga,
  googleSigninSaga,
  registerAuthUidSaga,
  signoutSaga,
} from './authSagas';

export default [
  takeEvery(types.GOOGLE_SIGNIN, googleSigninSaga),
  takeEvery(types.EMAIL_REGISTER, emailRegisterSaga),
  takeEvery(types.REGISTER_AUTH_UID, registerAuthUidSaga),
  takeEvery(types.SIGN_OUT, signoutSaga),
];
