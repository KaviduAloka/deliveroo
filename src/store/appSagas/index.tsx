import { takeEvery } from 'redux-saga/effects';
import * as types from '../appReducer/types';
import { initDataSaga } from './sagas';

export default [takeEvery(types.INIT_DATA, initDataSaga)];
