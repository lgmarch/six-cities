import {mapOffer, mapOffers} from '../../../utils/transform-properties';
import {StateOffersType} from '../../../types/store-type';
import {createReducer} from '@reduxjs/toolkit';
import {changeStatusFavorite, setErrorOffers, setIsDataLoadedOffers, setOffers} from '../../action';

const initialState: StateOffersType = {
  offers: [],
  isDataLoaded: false,
  error: '',
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = mapOffers(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(setIsDataLoadedOffers, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeStatusFavorite, (state, action) => {
      const offersForChange = [...state.offers];

      offersForChange.forEach((p, index) => {
        if (p.id === action.payload.id) {
          offersForChange[index] = mapOffer(action.payload);
        }
      });
      state.offers = offersForChange;
      state.isDataLoaded = true;
    })
    .addCase(setErrorOffers, ((state, action) => {
      state.error = action.payload;
      state.isDataLoaded = true;
    }));
});

export default offers;
