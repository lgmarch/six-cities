import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Route, Router, Switch } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import HeaderNav from './header-nav';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: HeaderNav', () => {
  it('should render correctly when user have status NoAuth', () => {
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.NoAuth,
        user: {
          email: '',
        },
      },
    });

    render (
      <Provider store={store}>
        <Router history={history}>
          <HeaderNav/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render correctly when user have status Auth', () => {
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.Auth,
        user: {
          email: 'email@mail.ru',
        },
      },
    });

    render (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route>
              <HeaderNav/>
            </Route>
            <Route path={AppRoute.Favorites}>
              <h1>Favorites</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByText(/email@mail.ru/i)).toBeInTheDocument();

    expect(screen.queryByText(/Favorites/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('favorites'));
  });
});
