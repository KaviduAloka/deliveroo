import { takeEvery } from 'redux-saga/effects';
import * as types from '../store/types';
import { googleSigninSaga } from './authSagas';

export default [takeEvery(types.GOOGLE_SIGNIN, googleSigninSaga)];
