import {PageType} from '../constants/constants';
import {BookmarkStyleType} from '../types/style-type';

export function getStylesForItem(city: string | null): string {
  if (!city) {
    return 'locations__item-link';
  }
  return 'locations__item-link tabs__item';
}

export function getStylesForBookmark(pageType: string): BookmarkStyleType {
  if (pageType === PageType.Main || pageType === PageType.Favorites || pageType === PageType.Room) {
    return {
      style: 'place-card',
      width: '18',
      height: '19',
    };
  }
  return {
    style: 'property',
    width: '31',
    height: '33',
  };
}
