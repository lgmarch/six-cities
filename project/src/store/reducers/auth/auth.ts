import {AuthorizationStatus} from '../../../constants/constants';
import {
  setErrorAuth,
  setIsDataLoadedAuth,
  setUserAuthStatus,
  setUserData,
  setUserLogOut
} from '../../action';
import {mapAuthInfo} from '../../../utils/transform-properties';
import {createReducer} from '@reduxjs/toolkit';
import {StateAuthType} from '../../../types/store-type';
import {AuthInfoType} from '../../../types/auth-type';

const initialUser: AuthInfoType = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
};

const initialState: StateAuthType = {
  authStatus: AuthorizationStatus.Unknown,
  user: initialUser,
  isDataLoaded: false,
  error: '',
};

const auth = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserAuthStatus, (state, action) => {
      state.authStatus = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setUserLogOut, ((state) => {
      state.authStatus = AuthorizationStatus.NoAuth;
      state.user = initialUser;
    }))
    .addCase(setUserData, ((state, action) => {
      state.authStatus = AuthorizationStatus.Auth;
      state.user = mapAuthInfo(action.payload);
      state.isDataLoaded = true;
    }))
    .addCase(setIsDataLoadedAuth, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setErrorAuth, ((state, action) => {
      state.error = action.payload;
      state.isDataLoaded = true;
    }));
});

export default auth;
