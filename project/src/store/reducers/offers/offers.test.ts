import offers from './offers';
import {ActionType} from '../../../types/action-type';
import {FakeOffer, FakeOfferArr, FakeOfferBackend} from '../../../utils/mock';
import {DATA_LOADING_ERROR_MESSAGE} from '../../../constants/constants';

const mockOfferArray = FakeOfferArr;
const mockOffer = FakeOffer;
const mockOfferBackend = FakeOfferBackend;

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(offers(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offers: [], isDataLoaded: false, error: ''});
  });

  it('should update offers by load offers', () => {
    const offersState = new Array(1).fill(mockOffer);
    const offerArrBackend = new Array(3).fill(mockOfferBackend);
    const offerArr = new Array(3).fill(mockOffer);

    const setOffers = {
      type: ActionType.SetOffers,
      payload: offerArrBackend,
    };

    expect(offers({offers: offersState, isDataLoaded: false, error: ''}, setOffers))
      .toEqual({offers: Object.assign([], offersState, offerArr), isDataLoaded: true, error: ''});
  });

  it('should update offers by change isDataLoaded', () => {
    const offersState = new Array(1).fill(mockOffer);

    const setIsDataLoaded = {
      type: ActionType.SetIsDataLoadedOffers,
      payload: true,
    };

    expect(offers({offers: offersState, isDataLoaded: false, error: ''}, setIsDataLoaded))
      .toEqual({offers: offersState, isDataLoaded: true, error: ''});
  });

  it('should update offers by change favorite status', () => {
    const offerBackend = {...mockOfferBackend, id: 1, 'is_favorite': true};
    const offerArr = [...mockOfferArray];

    const changeStatusFavorite = {
      type: ActionType.ChangeStatusFavorite,
      payload: offerBackend,
    };

    offerArr.map((p, index) =>
      p.id === 1 ? offerArr[index] = {...mockOffer, isFavorite: true} : offerArr[index],
    );

    expect(offers({offers: mockOfferArray, isDataLoaded: false, error: ''}, changeStatusFavorite))
      .toEqual({offers: offerArr, isDataLoaded: true, error: ''});
  });

  it('should update offers by change errors', () => {
    const changeStatusError = {
      type: ActionType.SetErrorOffers,
      payload: DATA_LOADING_ERROR_MESSAGE,
    };

    expect(offers({offers: [], isDataLoaded: false, error: ''}, changeStatusError))
      .toEqual({offers: [], isDataLoaded: true, error: DATA_LOADING_ERROR_MESSAGE});
  });
});
