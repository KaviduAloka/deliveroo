import { AppReducerStateInterface } from '../../../store/reducers';

export const authDataSelector = (state: AppReducerStateInterface) =>
  state.authReducer.authData;
