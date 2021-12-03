import {mapOffers} from '../../../utils/transform-properties';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeStatusFavorite,
  setErrorFavorites,
  setFavorites,
  setIsDataLoadedFavorites
} from '../../action';
import {StateFavoritesType} from '../../../types/store-type';

const initialState: StateFavoritesType = {
  favorites: [],
  isDataLoaded: false,
  error: '',
};

const userFavorites = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorites, (state, action) => {
      state.favorites = mapOffers(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(changeStatusFavorite, (state, action) => {
      state.favorites = state.favorites.filter((p) => (p.id !== action.payload.id));
    })
    .addCase(setErrorFavorites, ((state, action) => {
      state.error = action.payload;
      state.isDataLoaded = true;
    }))
    .addCase(setIsDataLoadedFavorites, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default userFavorites;
