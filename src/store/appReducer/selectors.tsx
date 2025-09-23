import { AppReducerStateInterface } from '../reducers';

export const appInitializedSelector = (state: AppReducerStateInterface) =>
    state.appReducer.appInitialized,
  loadingStateSelector = (state: AppReducerStateInterface) =>
    state.appReducer.loading,
  alertStateSelector = (state: AppReducerStateInterface) =>
    state.appReducer.alert;
