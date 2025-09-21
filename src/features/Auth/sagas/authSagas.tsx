import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { PayloadAction } from '@reduxjs/toolkit';
import { call } from 'redux-saga/effects';
import { EmailAuthRegisterParameterInterface } from '../intefaces';

export function* googleSigninSaga() {
  yield call(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        console.log('Google Sign-In error', error.message);
      }
    }
  });
}

export function* emailRegisterSaga({
  payload: { data },
}: PayloadAction<EmailAuthRegisterParameterInterface>) {
  console.log(data);
}
