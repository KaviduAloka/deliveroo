import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put } from 'redux-saga/effects';
import { getRestaurantDetailsApi } from '../../../services/Apis';
import { RestaurantInformationResponseInterface } from '../interfaces';
import { hideLoading, showLoading } from '../../../store/appReducer/reducer';

export function* getRestaurantInformationSaga({
  payload,
}: PayloadAction<{
  restaurant_id: number;
  callback: (response: RestaurantInformationResponseInterface) => void;
}>) {
  const response: { data: RestaurantInformationResponseInterface } = yield call(
    getRestaurantDetailsApi,
  );

  yield put(showLoading());

  yield delay(500);

  payload.callback(response.data);

  yield put(hideLoading());
}
