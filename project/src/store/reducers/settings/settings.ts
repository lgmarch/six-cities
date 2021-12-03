import {StateSettingsType} from '../../../types/store-type';
import {CityName, TypeOfSorting} from '../../../constants/constants';
import {createReducer} from '@reduxjs/toolkit';
import {setSortingType, setActiveCity} from '../../action';

const initialState: StateSettingsType = {
  activeCity: CityName.Paris,
  sort: TypeOfSorting.Popular,
};

const settings = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, ((state, action) => {
      state.activeCity = action.payload;
    }))
    .addCase(setSortingType, (state, action) => {
      state.sort = action.payload;
    });
});

export default settings;
