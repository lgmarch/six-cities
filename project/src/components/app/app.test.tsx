import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import App from './app';
import {AuthorizationStatus} from '../../constants/constants';
import {render, screen} from '@testing-library/react';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: App - application Routing', () => {
  it('should render "LoadingScreen" when data is not loaded', () => {
    const store = mockStore({
      auth: {
        authStatus: AuthorizationStatus.Auth,
      },
    });
    const fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
    render(fakeApp);

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });
});
