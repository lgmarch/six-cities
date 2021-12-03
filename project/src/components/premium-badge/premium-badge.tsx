import {PremiumBadgeClassName} from './premium-badge-style';
import {PageType} from '../../constants/constants';

type PremiumBadgeProps = {
  premiumBadgeClassName: string,
};

function PremiumBadge({premiumBadgeClassName}: PremiumBadgeProps): JSX.Element {
  const styleClassName = premiumBadgeClassName === PageType.PlaceCard
    ? PremiumBadgeClassName.PlaceCard
    : PremiumBadgeClassName.Room;

  return (
    <div className={styleClassName}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumBadge;
