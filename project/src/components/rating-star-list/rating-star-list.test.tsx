import {render} from '@testing-library/react';
import RatingStarList from './rating-star-list';
import {NUMBER_OF_STARS} from '../../constants/constants';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
  comments: {
    isDataLoaded: true,
  },
});
const rating = 5;

describe('Component: RatingStarList', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <RatingStarList
          onChange={jest.fn()}
          rating={rating}
        />
      </Provider>,
    );

    expect(container.querySelectorAll('.form__rating-input').length).toBe(NUMBER_OF_STARS);
  });
});
