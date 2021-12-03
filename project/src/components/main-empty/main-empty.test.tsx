import {render, screen} from '@testing-library/react';
import MainEmpty from './main-empty';

describe('Component: MainEmpty', () => {
  const city = 'Paris';

  it('should render MainEmpty correctly', () => {
    render(<MainEmpty activeCity={city}/>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${city}`, 'i')))
      .toBeInTheDocument();
  });
});
