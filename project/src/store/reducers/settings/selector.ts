import {RootState} from '../../root-reducer';

export const selectActiveCity = (state: RootState): string => state.settings.activeCity;
export const selectSort = (state: RootState): string => state.settings.sort;
