import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileInterface } from '../interfaces';

export interface AuthStateInterface {
  authData: null | FirebaseAuthTypes.User;
  profile: null | ProfileInterface;
}

const initialState: AuthStateInterface = {
  authData: null,
  profile: null,
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
    setProfile: (state, action: PayloadAction<ProfileInterface>) => {
      state.profile = action.payload;
    },
    removeProfile: state => {
      state.profile = null;
    },
  },
});

export default appSlice.reducer;
export const { setAuthData, removeAuthData, setProfile, removeProfile } =
  appSlice.actions;
