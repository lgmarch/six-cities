import {render, screen} from '@testing-library/react';
import SingleStar from './single-star';
import {generateId} from '../../utils/generate-id';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

let state = 5;
let value = 5;
const onChange = jest.fn();

const mockStore = configureMockStore();
const store = mockStore({
  comments: {
    isDataLoaded: true,
  },
});

describe('Component: SingleStar', () => {
  beforeEach(() => {
    state = 3;
    value = 5;
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <SingleStar
          state={state}
          onChange={onChange}
          value={value}
          key={generateId()}
        />,
      </Provider>,
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByTitle('perfect')).toBeInTheDocument();
    expect(container.querySelector('.form__star-image')).toBeInTheDocument();
  });

  it('onChange should called when user choose star', () => {
    const onChangeStar = jest.fn();

    render(
      <Provider store={store}>
        <SingleStar
          state={state}
          onChange={onChangeStar}
          value={value}
          key={generateId()}
        />,
      </Provider>,
    );

    userEvent.click(screen.getByRole('radio'));
    expect(onChangeStar).toBeCalled();
    expect(screen.getByDisplayValue(/5/i)).toBeInTheDocument();
  });
});
