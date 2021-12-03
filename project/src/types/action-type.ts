import {Action} from 'redux';
import {RootState} from '../store/root-reducer';
import {ThunkAction} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

export enum ActionType {
  SetActiveCity = 'settings/setActiveCity',
  SortingSelection = 'main/sortingSelection',
  SetActiveCard = 'data/setActiveCard',
  SetOffers = 'data/setOffers',
  SetOffer = 'data/setOffer',
  SetOffersNearBy = 'data/setOffersNearBy',
  SetFavorites = 'data/setFavorites',
  ChangeStatusFavorite = 'data/changeStatusFavorite',
  SetCommentsOnTheOffer = 'data/setCommentsOnTheOffer',
  SetIsDataLoadedOffers = 'data/setIsDataLoadedOffers',
  SetIsDataLoadedOffer = 'data/setIsDataLoadedOffer',
  SetIsDataLoadedFavorites = 'data/setIsDataLoadedFavorites',
  SetIsDataLoadedComments = 'data/setIsDataLoadedComments',
  SetIsDataLoadedAuth = 'data/setIsDataLoadedAuth',
  SetUserLoggedIn = 'user/setAuthorization',
  SetUserLoggedOut = 'user/setLogout',
  SetUserData = 'user/setUserData',
  RedirectToRoute = 'redirect/redirectToRoute',
  SetErrorAuth = 'error/errorAuth',
  SetErrorOffers = 'error/errorOffers',
  SetErrorOffer = 'error/errorOffer',
  SetErrorFavorites = 'error/errorFavorites',
  SetErrorComments = 'error/errorComments',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;
