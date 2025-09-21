import { AppReducerStateInterface } from '../reducers';

export const loadingStateSelector = (state: AppReducerStateInterface) =>
    state.appReducer.loading,
  alertStateSelector = (state: AppReducerStateInterface) =>
    state.appReducer.alert;
