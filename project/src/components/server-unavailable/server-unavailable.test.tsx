import {render, screen} from '@testing-library/react';
import ServerUnavailable from './server-unavailable';

describe('Component: ServerUnavailable', () => {
  it('should ServerUnavailable render correctly', () => {
    render(<ServerUnavailable/>);

    expect(screen.getByText(/503. Service Unavailable/i)).toBeInTheDocument();
  });
});
