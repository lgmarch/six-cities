export const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_FAIL_MESSAGE = 'Don\'t forget to log in';
export const DATA_LOADING_ERROR_MESSAGE = 'Data loading error';

export const TypeOfError = {
  ERROR_LOADING_OFFERS: 'Error loading offers',
  ERROR_LOADING_OFFER: 'Error loading offer',
  ERROR_LOADING_OFFERS_NEAR_BY: 'Error loading offers near by',
  ERROR_LOADING_FAVORITES: 'Error loading favorites',
  ERROR_LOADING_COMMENTS: 'Error loading comments',
  ERROR_POST_COMMENT: 'Error post comment',
  ERROR_AUTH_USER: 'Error auth user',
  ERROR_LOG_IN_USER: 'Error log in user',
} as const;

export enum HttpCode {
  Unauthorized = 401,
  NotFound = 404,
  Unavailable = 503,
}

export enum NumberOfOutputMessage {
  Min = 0,
  Max = 10,
}

export enum NumberOfOutputImage {
  Min = 0,
  Max = 6,
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
  Unavailable = '/unavailable',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Hotels = '/hotels',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const PageType = {
  Main: 'main',
  Room: 'room',
  RoomBig: 'room_big',
  Favorites: 'favorites',
  PlaceCard: 'placeCard',
} as const;

export const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const CommentLength = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
} as const;

export enum Month {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export const TypeOfSorting = {
  Popular: '0',
  PriceLowToHigh: '1',
  PriceHighToLow: '2',
  TopRatedFirst: '3',
} as const;

export const NUMBER_OF_STARS = 5;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export  const InputError = {
  EmailError: 'Incorrect email has been entered',
  PasswordError: 'Incorrect password',
} as const;

export enum LinkForMap {
  MarkerDefault = '/img/pin.svg',
  MarkerCurrent = '/img/pin-active.svg',
  LayerForMapVoyager = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  LeafletLabelOnMap = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export const SizeForMap = {
  ICON_SIZE_40: 40,
  ICON_SIZE_20: 20,
} as const;
