import { takeEvery } from 'redux-saga/effects';
import * as types from '../store/types';
import { getRestaurantInformationSaga } from './restaurantSagas';

export default [
  takeEvery(types.GET_RESTAURANT_INFORMATION, getRestaurantInformationSaga),
];
