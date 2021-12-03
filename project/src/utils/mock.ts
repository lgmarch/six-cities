import {PlaceCardType, PlaceCardTypeBackend} from '../types/place-card-type';
import {CommentType, CommentTypeBackend} from '../types/comment-type';
import {AuthInfoType, AuthInfoTypeBackend} from '../types/auth-type';

export const FakeUserData: AuthInfoType = {
  avatarUrl: 'https://cdn.fakercloud.com/avatars/ateneupopular_128.jpg',
  email: 'lmarch@mial.ru',
  id: 98,
  isPro: false,
  name: 'Jack',
};

export const FakeUserDataBackend: AuthInfoTypeBackend = {
  'avatar_url': 'https://cdn.fakercloud.com/avatars/ateneupopular_128.jpg',
  'email': 'lmarch@mial.ru',
  'id': 98,
  'is_pro': false,
  'name': 'Jack',
  'token': 'sdfso8080sagkaspgkasg9098',
};

export const FakeUserDataInit: AuthInfoType = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
};

export const FakeCommentArr: CommentType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2021-05-08T14:13:56.569Z',
    id: 2,
    rating: 1,
    user: {
      avatarUrl: 'img/15.png',
      id: 45,
      isPro: false,
      name: 'Maxim',
    },
  },
];

export const FakeCommentArrBackend: CommentTypeBackend[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': true,
      'name': 'Max',
    },
  },
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2021-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 1,
    'user': {
      'avatar_url': 'img/15.png',
      'id': 45,
      'is_pro': false,
      'name': 'Maxim',
    },
  },
];

export const FakeUserBackend = {
  'avatar_url': 'img/1.png',
  'email': 'linda@mail.ru',
  'id': 12,
  'is_pro': false,
  'name': 'Linda',
  'token': 'secret',
} as const;

export const FakeOffer: PlaceCardType = {
  bedrooms: 45,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 6,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 6,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 123,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'home',
} as PlaceCardType;

export const FakeOfferBackend: PlaceCardTypeBackend = {
  'bedrooms': 45,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 6,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
  'host': {
    'avatar_url': 'img/1.png',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  'location': {
    'latitude': 52.370216,
    'longitude': 4.895168,
    'zoom': 6,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  'price': 123,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'home',
} as PlaceCardTypeBackend;

export const FakeOfferArr: PlaceCardType[] = [
  {
    bedrooms: 45,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 6,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 6,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 123,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'home',
  },
  {
    bedrooms: 450,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 6,
    },
    maxAdults: 40,
    previewImage: 'img/1.png',
    price: 123,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'home',
  },
] as PlaceCardType[];

export const FakeOfferArrBackend: PlaceCardTypeBackend[] = [
  {
    'bedrooms': 45,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 6,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['img/1.png', 'img/2.png'],
    'is_favorite': true,
    'is_premium': false,
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 6,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    'price': 123,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'home',
  },
  {
    'bedrooms': 450,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': ['img/1.png', 'img/2.png'],
    'is_favorite': false,
    'is_premium': false,
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 6,
    },
    'max_adults': 40,
    'preview_image': 'img/1.png',
    'price': 123,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'home',
  },
] as PlaceCardTypeBackend[];

