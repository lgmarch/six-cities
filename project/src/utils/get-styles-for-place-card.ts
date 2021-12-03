import {PageType} from '../constants/constants';
import {
  PlaceCardFavorites,
  PlaceCardMain,
  PlaceCardRoom,
  PlaceCardStyles
} from '../components/place-card/place-card-style';
import {PlaceCardStyleType} from '../types/style-type';

export function getStylesForPlaceCard(type: string): PlaceCardStyleType {
  if (type === PageType.Favorites) {
    return {
      articleClassName: `${PlaceCardFavorites.articleClassName} ${PlaceCardStyles.articleClassName}`,
      imageClassName: `${PlaceCardFavorites.imageClassName} ${PlaceCardStyles.imageClassName}`,
      infoClassName: `${PlaceCardFavorites.infoClassName} ${PlaceCardStyles.infoClassName}`,
      width: `${PlaceCardFavorites.width}`,
      height: `${PlaceCardFavorites.height}`,
    };
  }
  if (type === PageType.Main) {
    return {
      articleClassName: `${PlaceCardMain.articleClassName} ${PlaceCardStyles.articleClassName}`,
      imageClassName: `${PlaceCardMain.imageClassName} ${PlaceCardStyles.imageClassName}`,
      infoClassName: `${PlaceCardMain.infoClassName} ${PlaceCardStyles.infoClassName}`,
      width: `${PlaceCardMain.width}`,
      height: `${PlaceCardMain.height}`,
    };
  }
  if (type === PageType.Room) {
    return {
      articleClassName: `${PlaceCardRoom.articleClassName} ${PlaceCardStyles.articleClassName}`,
      imageClassName: `${PlaceCardRoom.imageClassName} ${PlaceCardStyles.imageClassName}`,
      infoClassName: `${PlaceCardRoom.infoClassName} ${PlaceCardStyles.infoClassName}`,
      width: `${PlaceCardRoom.width}`,
      height: `${PlaceCardRoom.height}`,
    };
  }
  return {
    articleClassName: `${PlaceCardStyles.articleClassName}`,
    imageClassName: `${PlaceCardStyles.imageClassName}`,
    infoClassName: `${PlaceCardStyles.infoClassName}`,
    width: `${PlaceCardRoom.width}`,
    height: `${PlaceCardRoom.height}`,
  };
}
