import {AuthorizationStatus} from '../constants/constants';
import {PlaceCardType} from './place-card-type';
import {AuthInfoType} from './auth-type';
import {CommentType} from './comment-type';

export type StateSettingsType = {
  activeCity: string,
  sort: string,
};

export type StateCommentsType = {
  comments: CommentType[],
  isDataLoaded: boolean,
  error: {
    data: string | null,
    show: boolean,
  },
};

export type StateOffersType = {
  offers: PlaceCardType[],
  isDataLoaded: boolean,
  error: string,
};

export type StateOfferType = {
  offer: PlaceCardType | null,
  offersNearBy: PlaceCardType[],
  error: string,
  isDataLoaded: boolean,
};

export type StateFavoritesType = {
  favorites: PlaceCardType[],
  isDataLoaded: boolean,
  error: string,
};

export type StateCardType = {
  card: PlaceCardType | null,
};

export type StateAuthType = {
  authStatus: AuthorizationStatus,
  user: AuthInfoType,
  isDataLoaded: boolean,
  error: string,
};
