import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { EmailAuthRegisterParameterInterface } from '../interfaces';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';
import { removeAuthData } from '../store/reducer';

export function* googleSigninSaga() {
  yield call(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();

      if (signInResult.data) {
        // Create a Google credential with the token
        const googleCredential = GoogleAuthProvider.credential(
          signInResult.data.idToken,
        );

        // Sign-in the user with the credential
        await signInWithCredential(getAuth(), googleCredential);
      }
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

export function* signoutSaga() {
  try {
    yield call([getAuth, getAuth().signOut]);
  } catch (error) {
  } finally {
    yield put(removeAuthData());
  }
}
