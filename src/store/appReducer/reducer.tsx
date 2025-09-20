import { createSlice } from '@reduxjs/toolkit';

interface LoadingStateInterface {
  queLength: number;
}

export interface AppStateInterface {
  loading: LoadingStateInterface;
}

const initialState: AppStateInterface = {
  loading: { queLength: 0 },
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    showLoading: state => {
      state.loading.queLength += 1;
    },
    hideLoading: state => {
      state.loading.queLength -= 1;
    },
  },
});

export default appSlice.reducer;
export const { showLoading, hideLoading } = appSlice.actions;
