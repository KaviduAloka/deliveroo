import * as types from './types';
import { EmailAuthParameterInterface } from '../interfaces';

export const googleSignin = () => ({
  type: types.GOOGLE_SIGNIN,
});

export const emailRegister = (payload: EmailAuthParameterInterface) => ({
  type: types.EMAIL_REGISTER,
  payload,
});

export const emailSignin = (payload: EmailAuthParameterInterface) => ({
  type: types.EMAIL_SIGNIN,
  payload,
});

export const registerAuthUid = (payload: {
  email: string;
  auth_uid: string;
}) => ({
  type: types.REGISTER_AUTH_UID,
  payload,
});

export const signinAuthUid = (payload: {
  email: string;
  auth_uid: string;
}) => ({
  type: types.SIGNIN_AUTH_UID,
  payload,
});

export const signout = () => ({ type: types.SIGN_OUT });
