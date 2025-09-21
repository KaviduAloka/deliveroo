import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { EmailAuthRegisterParameterInterface } from '../interfaces';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from '@react-native-firebase/auth';
import { removeAuthData } from '../store/reducer';
import { Alert } from 'react-native';
import { hideLoading, showLoading } from '../../../store/appReducer/reducer';

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
  yield put(showLoading());

  yield call(async () => {
    try {
      await createUserWithEmailAndPassword(
        getAuth(),
        data.email,
        data.password,
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(
          'Registration failed',
          'That email address is already in use!',
          [{ text: 'Ok' }],
        );
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('Registration failed', 'That email address is invalid!', [
          { text: 'Ok' },
        ]);
      }
    }
  });

  yield put(hideLoading());
}

export function* signoutSaga() {
  yield call(async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      __DEV__ && console.log('SIGNOUT ERROR: ', error);
    }
  });

  yield put(removeAuthData());
}
