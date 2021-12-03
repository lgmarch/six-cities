import {createReducer} from '@reduxjs/toolkit';
import {setActiveCard} from '../../action';
import {StateCardType} from '../../../types/store-type';

const initialState: StateCardType = {
  card: null,
};

const card = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCard, (state, action) => {
      state.card = action.payload;
    });
});

export default card;
