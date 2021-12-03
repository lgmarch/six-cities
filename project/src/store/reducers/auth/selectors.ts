import {RootState} from '../../root-reducer';
import {AuthorizationStatus} from '../../../constants/constants';

export const selectAuthStatus = (state: RootState): AuthorizationStatus => state.auth.authStatus;
export const selectUserEmail = (state: RootState): string => state.auth.user.email;
export const selectIsDataLoadedAuth = (state: RootState): boolean => state.auth.isDataLoaded;
export const selectErrorAuth = (state: RootState): string => state.auth.error;

