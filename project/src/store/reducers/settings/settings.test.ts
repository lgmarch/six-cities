import settings from './settings';
import {CityName, TypeOfSorting} from '../../../constants/constants';
import {ActionType} from '../../../types/action-type';

describe('Reducer: settings', () => {
  it('without additional parameters should return initial state', () => {
    expect(settings(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({activeCity: CityName.Paris, sort: TypeOfSorting.Popular});
  });

  it('should update settings by change activeCity', () => {
    const setActiveCity = {
      type: ActionType.SetActiveCity,
      payload: CityName.Amsterdam,
    };

    expect(settings({activeCity: CityName.Paris, sort: TypeOfSorting.Popular}, setActiveCity))
      .toEqual({activeCity: CityName.Amsterdam, sort: TypeOfSorting.Popular});
  });

  it('should update settings by change sortBy', () => {
    const setSortBy = {
      type: ActionType.SortingSelection,
      payload: TypeOfSorting.PriceLowToHigh,
    };

    expect(settings({activeCity: CityName.Paris, sort: TypeOfSorting.Popular}, setSortBy))
      .toEqual({activeCity: CityName.Paris, sort: TypeOfSorting.PriceLowToHigh});
  });
});
