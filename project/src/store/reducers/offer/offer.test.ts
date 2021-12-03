import offer from './offer';
import {ActionType} from '../../../types/action-type';
import {FakeOffer, FakeOfferBackend} from '../../../utils/mock';
import {DATA_LOADING_ERROR_MESSAGE} from '../../../constants/constants';

const mockOffer = FakeOffer;
const mockOfferBackend = FakeOfferBackend;

describe('Reducer: offer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offer: null, offersNearBy: [], error: '', isDataLoaded: false});
  });

  it('should update offer by load offer', () => {
    const state = {offer: null, offersNearBy: [], error: '', isDataLoaded: false};

    const setOffer = {
      type: ActionType.SetOffer,
      payload: mockOfferBackend,
    };

    expect(offer(state, setOffer))
      .toEqual({offer: mockOffer, offersNearBy: [], error: '', isDataLoaded: true});
  });

  it('should update offer by load offersNearBy', () => {
    const state = {offer: mockOffer, offersNearBy: [], error: '', isDataLoaded: false};
    const offersArrBackend = new Array(1).fill(mockOfferBackend);

    const setOffersNearBy = {
      type: ActionType.SetOffersNearBy,
      payload: offersArrBackend,
    };

    expect(offer(state, setOffersNearBy))
      .toEqual({offer: mockOffer, offersNearBy: new Array(1).fill(mockOffer),
        error: '', isDataLoaded: true});
  });

  it('should update offer by change isFavorite status', () => {
    const state = {offer: mockOffer, offersNearBy: [], error: '', isDataLoaded: true};
    const fakeOfferBackendWithChange = {...mockOfferBackend, 'is_favorite': true};
    const fakeOfferWithChange = {...mockOffer, isFavorite: true};

    const changeStatusFavorite = {
      type: ActionType.ChangeStatusFavorite,
      payload: fakeOfferBackendWithChange,
    };

    expect(offer(state, changeStatusFavorite))
      .toEqual({offer: fakeOfferWithChange, offersNearBy: [], error: '', isDataLoaded: true});
  });

  it('should update offer by change Error', () => {
    const state = {offer: null, offersNearBy: [], error: '', isDataLoaded: false};

    const changeError = {
      type: ActionType.SetErrorOffer,
      payload: DATA_LOADING_ERROR_MESSAGE,
    };

    expect(offer(state, changeError))
      .toEqual({offer: null, offersNearBy: [], error: DATA_LOADING_ERROR_MESSAGE, isDataLoaded: true});
  });

  it('should update offer by change isDataLoaded status', () => {
    const state = {offer: null, offersNearBy: [], error: '', isDataLoaded: false};

    const changeIsDataLoaded = {
      type: ActionType.SetIsDataLoadedOffer,
      payload: true,
    };

    expect(offer(state, changeIsDataLoaded))
      .toEqual({offer: null, offersNearBy: [], error: '', isDataLoaded: true});
  });
});
