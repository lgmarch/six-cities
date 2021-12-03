import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Route, Router, Switch } from 'react-router-dom';
import HeaderLogo from './header-logo';
import {AppRoute} from '../../constants/constants';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: Header-Logo', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <HeaderLogo/>
      </Router>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to Main url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.Main} exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <HeaderLogo />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});

