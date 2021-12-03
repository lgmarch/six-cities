import {render, screen} from '@testing-library/react';
import NotFound from './not-found';
import {createMemoryHistory} from 'history';
import {Router, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: NotFound', () => {
  it('should render NotFound correctly', () => {
    render(
      <Router history={history}>
        <NotFound/>
      </Router>,
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go back to the main page/i)).toBeInTheDocument();
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
            <NotFound/>
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
