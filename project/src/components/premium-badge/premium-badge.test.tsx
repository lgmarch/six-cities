import {render, screen} from '@testing-library/react';
import PremiumBadge from './premium-badge';
import {PageType} from '../../constants/constants';

describe('Component: PremiumBadge', () => {
  it('should render component correctly when page type PlaceCard', () => {
    const {container} = render(
      <PremiumBadge
        premiumBadgeClassName={PageType.PlaceCard}
      />,
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
    expect(container.querySelector('.place-card__mark')).toBeInTheDocument();
  });

  it('should render component correctly when page type Room', () => {
    const {container} = render(
      <PremiumBadge
        premiumBadgeClassName={PageType.Room}
      />,
    );

    expect(container.querySelector('.property__mark')).toBeInTheDocument();
  });
});
