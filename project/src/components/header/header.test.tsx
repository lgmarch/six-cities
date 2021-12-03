import {render} from '@testing-library/react';
import Header from './header';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../constants/constants';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.NoAuth,
        user: {
          email: 'email@mail.ru',
        },
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.header__nav-link')).toBeInTheDocument();
    expect(container.querySelector('.header__logo')).toBeInTheDocument();
  });
});
