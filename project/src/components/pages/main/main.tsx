import LocationList from '../../location-list/location-list';
import HeaderNav from '../../header/header';
import PlaceCardList from '../../place-card-list/place-card-list';
import Map from '../../map/map';
import {PlaceCardType} from '../../../types/place-card-type';
import {PageType} from '../../../constants/constants';
import {setActiveCard, setErrorOffers} from '../../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import SortingForm from '../../forms/sorting-form/sorting-form';
import Loading from '../../loading/loading';
import {selectErrorOffers, selectIsDataLoadedOffers, selectOffers} from '../../../store/reducers/offers/selectors';
import {selectActiveCity, selectSort} from '../../../store/reducers/settings/selector';
import {selectLocationId} from '../../../store/reducers/card/selectors';
import {getSortedLocations} from '../../../utils/sort-by';
import MainEmpty from '../../main-empty/main-empty';
import {showingError} from '../../../utils/showing-error';

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useSelector(selectActiveCity);
  const isDataLoaded = useSelector(selectIsDataLoadedOffers);
  const error = useSelector(selectErrorOffers);
  const sort = useSelector(selectSort);
  const offers = useSelector(selectOffers);
  const sortedOffers = getSortedLocations(offers, activeCity, sort);
  const locationId = useSelector(selectLocationId);

  if (Object.keys(error).length) {
    showingError(error);
    dispatch(setErrorOffers(''));
  }

  const handleCardActiveReplace = (card: PlaceCardType | null) => {
    dispatch(setActiveCard(card));
  };

  return (
    <div className="page page--gray page--main">
      <HeaderNav/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList />

        <div className="cities">
          <div className="cities__places-container container">

            {!isDataLoaded && <Loading/>}
            {(isDataLoaded && sortedOffers.length === 0) && <MainEmpty activeCity={activeCity}/>}
            {(isDataLoaded && sortedOffers.length !== 0) &&
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>

                <SortingForm/>

                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList
                    pageType={PageType.Main}
                    placeCardArray={sortedOffers}
                    onChange={handleCardActiveReplace}
                  />
                </div>
              </section>

              <div className="cities__right-section">
                <Map
                  locations={sortedOffers}
                  pageType={PageType.Main}
                  selectedLocationId={locationId}
                />
              </div>
            </>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
