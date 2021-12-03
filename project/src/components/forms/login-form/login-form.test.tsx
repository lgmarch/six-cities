import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './login-form';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();

describe('Component: LoginForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <LoginForm/>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'kooks');
    userEvent.type(screen.getByTestId('password'), '12345');

    expect(screen.getByDisplayValue(/kooks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/12345/i)).toBeInTheDocument();
  });
});

