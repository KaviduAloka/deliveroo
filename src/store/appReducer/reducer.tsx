import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingStateInterface {
  queLength: number;
}

interface AlertState {
  visible: boolean;
  title?: string;
  message: string;
}

export interface AppStateInterface {
  loading: LoadingStateInterface;
  alert: AlertState;
}

const initialState: AppStateInterface = {
  loading: { queLength: 0 },
  alert: {
    visible: false,
    title: '',
    message: '',
  },
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
    showAlert: (
      state,
      action: PayloadAction<{ title?: string; message: string }>,
    ) => {
      state.alert.visible = true;
      state.alert.title = action.payload.title;
      state.alert.message = action.payload.message;
    },
    hideAlert: state => {
      state.alert.visible = false;
      state.alert.title = '';
      state.alert.message = '';
    },
  },
});

export default appSlice.reducer;
export const { showLoading, hideLoading, showAlert, hideAlert } =
  appSlice.actions;
