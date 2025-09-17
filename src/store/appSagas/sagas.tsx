import { put } from 'redux-saga/effects';
import { showLoading } from '../appReducer/reducer';

export function* test() {
  yield put(showLoading());
}
