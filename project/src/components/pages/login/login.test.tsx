import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Route, Router, Switch} from 'react-router-dom';
import Login from './login';
import {AppRoute, AuthorizationStatus, CityName, TypeOfSorting} from '../../../constants/constants';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Login', () => {
  it('should render "Login" when user navigate to "login" url & NoAuth', () => {
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.NoAuth,
        user: {},
        error: '',
      },
      settings: {
        activeCity: CityName.Paris,
        sort: TypeOfSorting.Popular,
      },
    });
    history.push(AppRoute.Login);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.Main} exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <Login/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    expect(container.querySelector('.page--login')).toBeInTheDocument();
    expect(container.querySelectorAll('.header__left .header__logo').length).toBe(1);
    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(container.querySelector('.locations__item')).toBeInTheDocument();
  });

  it('should render Main when user navigate to "login" url & Auth', () => {
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.Auth,
        user: {},
      },
    });
    history.push(AppRoute.Login);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <Login/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.page--login')).not.toBeInTheDocument();
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});


