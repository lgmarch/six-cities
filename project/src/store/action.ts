import {ActionType} from '../types/action-type';
import {PlaceCardType, PlaceCardTypeBackend} from '../types/place-card-type';
import {AppRoute, AuthorizationStatus} from '../constants/constants';
import {CommentTypeBackend} from '../types/comment-type';
import {AuthInfoTypeBackend} from '../types/auth-type';
import {createAction} from '@reduxjs/toolkit';

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: PlaceCardTypeBackend[]) => ({payload: offers}),
);

export const setOffer = createAction(
  ActionType.SetOffer,
  (offer: PlaceCardTypeBackend) => ({payload: offer}),
);

export const setOffersNearBy = createAction(
  ActionType.SetOffersNearBy,
  (offers: PlaceCardTypeBackend[]) => ({payload: offers}),
);

export const setFavorites = createAction(
  ActionType.SetFavorites,
  (favorites: PlaceCardTypeBackend[]) => ({payload: favorites}),
);

export const changeStatusFavorite = createAction(
  ActionType.ChangeStatusFavorite,
  (favorite: PlaceCardTypeBackend) => ({payload: favorite}),
);

export const setCommentsOnTheOffer = createAction(
  ActionType.SetCommentsOnTheOffer,
  (comments: CommentTypeBackend[]) => ({payload: comments}),
);

export const setActiveCity = createAction(
  ActionType.SetActiveCity,
  (city: string) => ({payload: city}),
);

export const setActiveCard = createAction(
  ActionType.SetActiveCard,
  (card: PlaceCardType | null) => ({payload: card}),
);

export const setSortingType = createAction(
  ActionType.SortingSelection,
  (event: string) => ({payload: event}),
);

export const setUserAuthStatus = createAction(
  ActionType.SetUserLoggedIn,
  (authStatus: AuthorizationStatus) => ({payload: authStatus}),
);

export const setUserData = createAction(
  ActionType.SetUserData,
  (userData: AuthInfoTypeBackend) => ({payload: userData}),
);

export const setUserLogOut = createAction(ActionType.SetUserLoggedOut);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({payload: url}),
);

export const setIsDataLoadedOffers = createAction(
  ActionType.SetIsDataLoadedOffers,
  (isDataLoaded: boolean) => ({payload: isDataLoaded}),
);

export const setIsDataLoadedOffer = createAction(
  ActionType.SetIsDataLoadedOffer,
  (isDataLoaded: boolean) => ({payload: isDataLoaded}),
);

export const setIsDataLoadedFavorites = createAction(
  ActionType.SetIsDataLoadedFavorites,
  (isDataLoaded: boolean) => ({payload: isDataLoaded}),
);

export const setIsDataLoadedComments = createAction(
  ActionType.SetIsDataLoadedComments,
  (isDataLoaded: boolean) => ({payload: isDataLoaded}),
);

export const setIsDataLoadedAuth = createAction(
  ActionType.SetIsDataLoadedAuth,
  (isDataLoaded: boolean) => ({payload: isDataLoaded}),
);

export const setErrorAuth = createAction(
  ActionType.SetErrorAuth,
  (error: string) => ({payload: error}),
);

export const setErrorOffers = createAction(
  ActionType.SetErrorOffers,
  (error: string) => ({payload: error}),
);

export const setErrorOffer = createAction(
  ActionType.SetErrorOffer,
  (error: string) => ({payload: error}),
);

export const setErrorFavorites = createAction(
  ActionType.SetErrorFavorites,
  (error: string) => ({payload: error}),
);

export const setErrorComments = createAction(
  ActionType.SetErrorComments,
  (error: {data: string| null, show: boolean}) => ({payload: error}),
);
