import {RootState} from '../../root-reducer';
import {PlaceCardType} from '../../../types/place-card-type';

export const selectOffers = (state: RootState): PlaceCardType[] => state.offers.offers;
export const selectErrorOffers = (state: RootState): string => state.offers.error;
export const selectIsDataLoadedOffers = (state: RootState): boolean => state.offers.isDataLoaded;
