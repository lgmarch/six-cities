import {RootState} from '../../root-reducer';
import {StateCardType} from '../../../types/store-type';
import {createSelector} from '@reduxjs/toolkit';

export const selectActiveCard = (state: RootState): StateCardType => state.card;
export const selectLocationId = createSelector(selectActiveCard,
  (activeCard) => activeCard.card !== null ? activeCard.card.id : null);
