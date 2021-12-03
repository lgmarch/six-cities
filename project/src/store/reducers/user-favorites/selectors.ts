import {RootState} from '../../root-reducer';
import {PlaceCardType} from '../../../types/place-card-type';
import {createSelector} from '@reduxjs/toolkit';

export const selectUserFavorites = (state: RootState): PlaceCardType[] => state.userFavorites.favorites;
export const selectErrorFavorites = (state: RootState): string => state.userFavorites.error;
export const selectIsDataLoadedFavorites = (state: RootState): boolean => state.userFavorites.isDataLoaded;
export const selectCityNames = createSelector(selectUserFavorites, (favorites) => {
  const citySet = new Set<string>();
  favorites.map((p) => citySet.add(p.city.name));

  return Array.from(citySet);
});

