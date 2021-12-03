import auth from './auth';
import {AuthorizationStatus, DATA_LOADING_ERROR_MESSAGE} from '../../../constants/constants';
import {ActionType} from '../../../types/action-type';
import {FakeUserData, FakeUserDataBackend, FakeUserDataInit} from '../../../utils/mock';

describe('Reducer: auth', () => {

  it('without additional parameters should return initial state', () => {
    const state = {authStatus: AuthorizationStatus.Unknown, user: FakeUserDataInit, isDataLoaded: false, error: ''};

    expect(auth(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should update authorization Status to AUTH', () => {
    const state = {authStatus: AuthorizationStatus.Unknown, user: FakeUserDataInit, isDataLoaded: false, error: ''};
    const setUserLoggedInAction = {
      type: ActionType.SetUserLoggedIn,
      payload: AuthorizationStatus.Auth,
    };

    expect(auth(state, setUserLoggedInAction))
      .toEqual({authStatus: AuthorizationStatus.Auth, user: FakeUserDataInit, isDataLoaded: true, error: ''});
  });

  it('user data should be updated', () => {
    const state = {authStatus: AuthorizationStatus.Unknown, user: FakeUserDataInit, isDataLoaded: false, error: ''};
    const setUserData = {
      type: ActionType.SetUserData,
      payload: FakeUserDataBackend,
    };

    expect(auth(state, setUserData))
      .toEqual({authStatus: AuthorizationStatus.Auth, user: FakeUserData, isDataLoaded: true, error: ''});
  });

  it('should update the data when the user exits', () => {
    const state = {authStatus: AuthorizationStatus.Auth, user: FakeUserData, isDataLoaded: true, error: ''};
    const setUserLoggedOut = {
      type: ActionType.SetUserLoggedOut,
    };

    expect(auth(state, setUserLoggedOut))
      .toEqual({authStatus: AuthorizationStatus.NoAuth, user: FakeUserDataInit, isDataLoaded: true, error: ''});
  });

  it('should update the data when change error', () => {
    const state = {authStatus: AuthorizationStatus.Auth, user: FakeUserData, isDataLoaded: false, error: ''};
    const setError = {
      type: ActionType.SetErrorAuth,
      payload: DATA_LOADING_ERROR_MESSAGE,
    };

    expect(auth(state, setError))
      .toEqual({authStatus: AuthorizationStatus.Auth, user: FakeUserData,
        isDataLoaded: true, error: DATA_LOADING_ERROR_MESSAGE});
  });
});
