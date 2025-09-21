import * as types from './types';
import { EmailAuthRegisterParameterInterface } from '../intefaces';

export const googleSignin = () => ({
  type: types.GOOGLE_SIGNIN,
});

export const emailRegister = (
  payload: EmailAuthRegisterParameterInterface,
) => ({
  type: types.EMAIL_REGISTER,
  payload,
});
