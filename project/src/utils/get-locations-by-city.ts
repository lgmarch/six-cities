import {PlaceCardType} from '../types/place-card-type';

export function getLocationsByCity(city: string, placeCards: PlaceCardType[]): PlaceCardType[] {
  return placeCards.filter((offer) => (
    offer.city.name === city
  ));
}
