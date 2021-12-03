import {mapOffer, mapOffers} from '../../../utils/transform-properties';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeStatusFavorite, setErrorOffer, setIsDataLoadedOffer,
  setOffer, setOffersNearBy
} from '../../action';
import {StateOfferType} from '../../../types/store-type';

const initialState: StateOfferType = {
  offer: null,
  offersNearBy: [],
  isDataLoaded: false,
  error: '',
};

const offer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, ((state, action) => {
      state.offer = mapOffer(action.payload);
      state.isDataLoaded = true;
    }))
    .addCase(setOffersNearBy, ((state, action) => {
      state.offersNearBy = mapOffers(action.payload);
      state.isDataLoaded = true;
    }))
    .addCase(changeStatusFavorite, (state, action) => {
      if (state.offer && (state.offer.id === action.payload.id)) {
        state.offer = mapOffer(action.payload);
      }

      const offers = [...state.offersNearBy];
      offers.forEach((p, index) => {
        if (p.id === action.payload.id) {
          offers[index] = mapOffer(action.payload);
        }
      });
      state.offersNearBy = offers;
      state.isDataLoaded = true;
    })
    .addCase(setErrorOffer, ((state, action) => {
      state.error = action.payload;
      state.isDataLoaded = true;
    }))
    .addCase(setIsDataLoadedOffer, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default offer;
