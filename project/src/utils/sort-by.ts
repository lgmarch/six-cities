import {PlaceCardType} from '../types/place-card-type';
import {TypeOfSorting} from '../constants/constants';
import {getLocationsByCity} from './get-locations-by-city';
import {CommentType} from '../types/comment-type';

export const compareLowToHigh = () => (a: PlaceCardType, b: PlaceCardType): number => (a.price - b.price);

export const compareHighToLow = () => (a: PlaceCardType, b: PlaceCardType): number => (b.price - a.price);

export const compareRating = () => (a: PlaceCardType, b: PlaceCardType): number => (b.rating - a.rating);

export const compareDate = () => (a: CommentType, b: CommentType): number =>
  (new Date (Date.parse(b.date)).getTime() - new Date (Date.parse(a.date)).getTime());

export const sortBy = (sort: string): any => {
  if (sort === TypeOfSorting.PriceLowToHigh) {
    return compareLowToHigh();
  }
  if (sort === TypeOfSorting.PriceHighToLow) {
    return compareHighToLow();
  }
  if (sort === TypeOfSorting.TopRatedFirst) {
    return compareRating();
  }
};

export const getSortedLocations = (placeCards: PlaceCardType[], activeCity: string, sort: string): PlaceCardType[] => {
  const locationsByCity = getLocationsByCity(activeCity, placeCards);

  return locationsByCity.sort(sortBy(sort));
};
