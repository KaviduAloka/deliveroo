import { call, put } from 'redux-saga/effects';
import { getStorageValue } from '../../services/StorageService';
import { storageConstants } from '../../constants';
import { ProfileInterface } from '../../features/Auth/interfaces';
import { setProfile } from '../../features/Auth/store/reducer';

export function* initDataSaga() {
  yield call(initLocalStorageSaga);
}

export function* initLocalStorageSaga() {
  try {
    const storageProfile: null | ProfileInterface = yield call(
      getStorageValue,
      storageConstants.PROFILE_DATA,
    );

    storageProfile && (yield put(setProfile(storageProfile)));
  } catch (error) {
    console.log('ERROR: initDatSaga ', error);
  }
}
