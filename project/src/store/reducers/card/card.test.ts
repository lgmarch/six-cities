import card from './card';
import {ActionType} from '../../../types/action-type';
import {FakeOffer} from '../../../utils/mock';

const mockOffer = FakeOffer;

describe('Reducer: card', () => {
  it('without additional parameters should return initial state', () => {
    expect(card(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({card: null});
  });

  it('should update the card to card', () => {
    const state = {card: null};

    const setActiveCard = {
      type: ActionType.SetActiveCard,
      payload: mockOffer,
    };

    expect(card(state, setActiveCard))
      .toEqual({card: mockOffer});
  });

  it('should update the card to null', () => {
    const setActiveCard = {
      type: ActionType.SetActiveCard,
      payload: null,
    };

    expect(card({card: mockOffer}, setActiveCard))
      .toEqual({card: null});
  });
});
