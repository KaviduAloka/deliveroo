import * as types from './types';
import { EmailAuthRegisterParameterInterface } from '../interfaces';

export const googleSignin = () => ({
  type: types.GOOGLE_SIGNIN,
});

export const emailRegister = (
  payload: EmailAuthRegisterParameterInterface,
) => ({
  type: types.EMAIL_REGISTER,
  payload,
});

export const registerAuthUid = (payload: {
  email: string;
  auth_uid: string;
}) => ({
  type: types.REGISTER_AUTH_UID,
  payload,
});

export const signout = () => ({ type: types.SIGN_OUT });
