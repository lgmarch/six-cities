import {PlaceCardType, PlaceCardTypeBackend} from '../types/place-card-type';
import {AuthInfoType, AuthInfoTypeBackend} from '../types/auth-type';
import {CommentType, CommentTypeBackend} from '../types/comment-type';

export function mapOffers(responseArray: PlaceCardTypeBackend[]): PlaceCardType[] {
  return responseArray.map(mapOffer);
}

export const mapOffer = (obj: PlaceCardTypeBackend): PlaceCardType => ({
  bedrooms: obj.bedrooms,
  city: {
    location: {
      latitude: obj.city.location.latitude,
      longitude: obj.city.location.longitude,
      zoom: obj.city.location.zoom,
    },
    name: obj.city.name,
  },
  description: obj.description,
  goods: obj.goods,
  host: {
    avatarUrl: obj.host.avatar_url,
    id: obj.host.id,
    isPro: obj.host.is_pro,
    name: obj.host.name,
  },
  id: obj.id,
  images: obj.images,
  isFavorite: obj.is_favorite,
  isPremium: obj.is_premium,
  location: {
    latitude: obj.location.latitude,
    longitude: obj.location.longitude,
    zoom: obj.location.zoom,
  },
  maxAdults: obj.max_adults,
  previewImage: obj.preview_image,
  price: obj.price,
  rating: obj.rating,
  title: obj.title,
  type: obj.type,
});

export const mapAuthInfo = (auth: AuthInfoTypeBackend): AuthInfoType => ({
  avatarUrl: auth.avatar_url,
  email: auth.email,
  id: auth.id,
  isPro: auth.is_pro,
  name: auth.name,
});

export function mapComments(backendResponse: CommentTypeBackend[]): CommentType[] {
  return backendResponse.map(mapComment);
}

export const mapComment = (comment: CommentTypeBackend): CommentType => ({
  comment: comment.comment,
  date: comment.date,
  id: comment.id,
  rating: comment.rating,
  user: {
    avatarUrl: comment.user.avatar_url,
    id: comment.user.id,
    isPro: comment.user.is_pro,
    name: comment.user.name,
  },
});
