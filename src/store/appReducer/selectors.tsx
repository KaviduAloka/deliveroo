import { AppReducerStateInterface } from '../reducers';

export const loadingStateSelector = (state: AppReducerStateInterface) =>
  state.appReducer.loading;
