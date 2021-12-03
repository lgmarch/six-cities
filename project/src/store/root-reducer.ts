import {combineReducers} from '@reduxjs/toolkit';
import settings from './reducers/settings/settings';
import card from './reducers/card/card';
import offers from './reducers/offers/offers';
import auth from './reducers/auth/auth';
import offer from './reducers/offer/offer';
import comments from './reducers/comments/comments';
import userFavorites from './reducers/user-favorites/user-favorites';

export const rootReducer = combineReducers({
  settings,
  card,
  offers,
  offer,
  userFavorites,
  comments,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>
