import {AuthorizationStatus, NumberOfOutputImage, PageType} from '../../constants/constants';
import {generateId} from '../../utils/generate-id';
import PremiumBadge from '../premium-badge/premium-badge';
import BookmarkButton from '../bookmark-button/bookmark-button';
import CommentList from '../comment-list/comment-list';
import ReviewsForm from '../forms/reviews-form/reviews-form';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import {PlaceCardType} from '../../types/place-card-type';
import {useSelector} from 'react-redux';
import {selectOffer, selectOffersNearByNoMoreThree} from '../../store/reducers/offer/selectors';
import {selectAuthStatus} from '../../store/reducers/auth/selectors';
import {selectFirstTenSortedByDateComments} from '../../store/reducers/comments/selector';

function RoomMain(): JSX.Element {
  const offer = useSelector(selectOffer);
  const offersNearByNoMoreThree = useSelector(selectOffersNearByNoMoreThree);
  const comments = useSelector(selectFirstTenSortedByDateComments);
  const authStatus = useSelector(selectAuthStatus);

  let rating = 0;
  let offersByForMap: PlaceCardType[] = [];

  if (offer) {
    offersByForMap = [...offersNearByNoMoreThree, offer];
    rating = Math.round(offer.rating);
  }

  return (
    <main className="page__main page__main--property">
      {offer &&
      <>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(NumberOfOutputImage.Min, NumberOfOutputImage.Max).map((img) => (
                <div className="property__image-wrapper" key={generateId()}>
                  <img className="property__image" src={img} alt="Studio"/>
                </div>
              ))}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">

              {offer.isPremium && <PremiumBadge premiumBadgeClassName={PageType.Room}/>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <BookmarkButton
                  id={offer.id}
                  isFavorite={offer.isFavorite}
                  pageType={PageType.RoomBig}
                />
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((p) => (
                    <li className="property__inside-item" key={generateId()}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>

              <CommentList comments={comments}/>

              {authStatus === AuthorizationStatus.Auth && <ReviewsForm/>}

            </div>
          </div>
          <Map
            locations={offersByForMap}
            pageType={PageType.Room}
            selectedLocationId={offer.id}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <PlaceCardList
                pageType={PageType.Room}
                placeCardArray={offersNearByNoMoreThree}
                onChange={() => ({})}
              />
            </div>
          </section>
        </div>
      </>};
    </main>
  );
}

export default RoomMain;
