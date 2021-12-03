import userFavorites from './user-favorites';
import {ActionType} from '../../../types/action-type';
import {FakeOffer, FakeOfferArr, FakeOfferBackend} from '../../../utils/mock';
import {DATA_LOADING_ERROR_MESSAGE} from '../../../constants/constants';

const mockOfferArray = FakeOfferArr;
const mockOffer = FakeOffer;
const mockOfferBackend = FakeOfferBackend;

describe('Reducer: user-favorites', () => {
  it('without additional parameters should return initial state', () => {
    expect(userFavorites(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favorites: [], isDataLoaded: false, error: ''});
  });

  it('should update user-favorites by load favorites', () => {
    const state = {favorites: [], isDataLoaded: false, error: ''};
    const favoritesBackend = new Array(3).fill(mockOfferBackend);
    const favorites = new Array(3).fill(mockOffer);

    const setFavorites = {
      type: ActionType.SetFavorites,
      payload: favoritesBackend,
    };

    expect(userFavorites(state, setFavorites))
      .toEqual({favorites: Object.assign([], mockOfferArray, favorites), isDataLoaded: true, error: ''});
  });

  it('should update user-favorites by change isFavorite status', () => {
    const state = {favorites: mockOfferArray, isDataLoaded: true, error: ''};
    const fakeOfferWithChange = mockOfferArray.filter((p) => (p.id !== mockOfferBackend.id));

    const changeStatusFavorites = {
      type: ActionType.ChangeStatusFavorite,
      payload: {...mockOfferBackend},
    };

    expect(userFavorites(state, changeStatusFavorites))
      .toEqual({favorites: fakeOfferWithChange, isDataLoaded: true, error: ''});
  });

  it('should update user-favorites by set error', () => {
    const state = {favorites: [], isDataLoaded: true, error: ''};

    const setError = {
      type: ActionType.SetErrorFavorites,
      payload: DATA_LOADING_ERROR_MESSAGE,
    };

    expect(userFavorites(state, setError))
      .toEqual({favorites: [], isDataLoaded: true, error: DATA_LOADING_ERROR_MESSAGE});
  });

  it('should update user-favorites by reset error', () => {
    const state = {favorites: [], isDataLoaded: true, error: DATA_LOADING_ERROR_MESSAGE};

    const setError = {
      type: ActionType.SetErrorFavorites,
      payload: '',
    };

    expect(userFavorites(state, setError))
      .toEqual({favorites: [], isDataLoaded: true, error: ''});
  });

  it('should update user-favorites by change isDataLoaded', () => {
    const state = {favorites: [], isDataLoaded: true, error: ''};

    const setIsDataLoaded = {
      type: ActionType.SetIsDataLoadedFavorites,
      payload: true,
    };

    expect(userFavorites(state, setIsDataLoaded))
      .toEqual({favorites: [], isDataLoaded: true, error: ''});
  });
});
