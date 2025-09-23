import { AppReducerStateInterface } from '../../../store/reducers';

export const authDataSelector = (state: AppReducerStateInterface) =>
    state.authReducer.authData,
  profileSelector = (state: AppReducerStateInterface) =>
    state.authReducer.profile;
