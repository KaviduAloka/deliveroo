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

export const signout = () => ({ type: types.SIGN_OUT });
