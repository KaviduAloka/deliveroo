import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthStateInterface {
  authData: null | FirebaseAuthTypes.User;
}

const initialState: AuthStateInterface = {
  authData: null,
};

const appSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.authData = action.payload;
    },
    removeAuthData: state => {
      state.authData = null;
    },
  },
});

export default appSlice.reducer;
export const { setAuthData, removeAuthData } = appSlice.actions;
