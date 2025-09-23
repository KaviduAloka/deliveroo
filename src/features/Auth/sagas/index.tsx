import { takeEvery } from 'redux-saga/effects';
import * as types from '../store/types';
import {
  emailRegisterSaga,
  emailSigninSaga,
  googleSigninSaga,
  registerAuthUidSaga,
  signinAuthUidSaga,
  signoutSaga,
} from './authSagas';

export default [
  takeEvery(types.GOOGLE_SIGNIN, googleSigninSaga),
  takeEvery(types.EMAIL_REGISTER, emailRegisterSaga),
  takeEvery(types.EMAIL_SIGNIN, emailSigninSaga),
  takeEvery(types.REGISTER_AUTH_UID, registerAuthUidSaga),
  takeEvery(types.SIGNIN_AUTH_UID, signinAuthUidSaga),
  takeEvery(types.SIGN_OUT, signoutSaga),
];
