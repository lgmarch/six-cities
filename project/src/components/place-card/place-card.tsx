import {Link} from 'react-router-dom';
import PremiumBadge from '../premium-badge/premium-badge';
import {PlaceCardType} from '../../types/place-card-type';
import {PageType} from '../../constants/constants';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {getStylesForPlaceCard} from '../../utils/get-styles-for-place-card';

type PlaceCardProps = {
  pageType: string,
  card: PlaceCardType,
  onChangeActiveCard?: (a: PlaceCardType | null) => void,
};

function PlaceCard({pageType, card, onChangeActiveCard}: PlaceCardProps):JSX.Element {
  const styles = getStylesForPlaceCard(pageType);

  return(
    <article className={styles.articleClassName}>
      <span className="visually-hidden">{card.id}</span>

      {card.isPremium ? <PremiumBadge premiumBadgeClassName={PageType.PlaceCard}/> : null}

      <div className={styles.imageClassName}
        onMouseEnter={() => onChangeActiveCard ? onChangeActiveCard(card) : () => ({})}
        onMouseLeave={() => onChangeActiveCard ? onChangeActiveCard(null) : () => ({})}
      >
        <Link to={`/offer/${card.id}`}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={styles.width}
            height={styles.height}
            alt="Place"
          />
        </Link>
      </div>

      <div className={styles.infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton
            id={card.id}
            isFavorite={card.isFavorite}
            pageType={pageType}
          />

        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(card.rating) * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
