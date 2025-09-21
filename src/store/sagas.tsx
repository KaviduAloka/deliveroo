import { all } from 'redux-saga/effects';
import appSagas from './appSagas';
import authSagas from '../features/Auth/sagas';
import restaurantSagas from '../features/Restaurant/sagas';

export default function* rootSaga() {
  yield all([...appSagas, ...restaurantSagas, ...authSagas]);
}
