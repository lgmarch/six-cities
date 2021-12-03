import {RootState} from '../../root-reducer';
import {PlaceCardType} from '../../../types/place-card-type';
import {createSelector} from '@reduxjs/toolkit';

export const selectOffer = (state: RootState): PlaceCardType | null => state.offer.offer;
export const selectOffersNearBy = (state: RootState): PlaceCardType[] => state.offer.offersNearBy;
export const selectIsDataLoaderOffer = (state: RootState): boolean => state.offer.isDataLoaded;
export const selectErrorOffer = (state: RootState): string => state.offer.error;
export const selectOffersNearByNoMoreThree = createSelector(selectOffersNearBy, (offers) => offers.slice(0, 3));
export const getOfferId = createSelector(selectOffer, (offer) => offer ? offer.id : null);
