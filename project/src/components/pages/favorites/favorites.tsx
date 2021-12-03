import Header from '../../header/header';
import LocationItem from '../../location-item/location-item';
import PlaceCardList from '../../place-card-list/place-card-list';
import {Link} from 'react-router-dom';
import {PlaceCardType} from '../../../types/place-card-type';
import {setActiveCard, setErrorFavorites} from '../../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchFavorites} from '../../../services/api-actions';
import {AppRoute, PageType} from '../../../constants/constants';
import {generateId} from '../../../utils/generate-id';
import {
  selectCityNames,
  selectErrorFavorites,
  selectIsDataLoadedFavorites,
  selectUserFavorites
} from '../../../store/reducers/user-favorites/selectors';
import {showingError} from '../../../utils/showing-error';
import Loading from '../../loading/loading';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(selectIsDataLoadedFavorites);
  const error = useSelector(selectErrorFavorites);
  const favorites = useSelector(selectUserFavorites);
  const namesOfCities = useSelector(selectCityNames);

  const style = favorites.length ? 'favorites__title' : 'visually-hidden';

  if (Object.keys(error).length) {
    showingError(error);
    dispatch(setErrorFavorites(''));
  }

  const handleCardActiveReplace = (card: PlaceCardType | null) => {
    dispatch(setActiveCard(card));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <ul className="favorites__list">
              <h1 className={style}>Saved listing</h1>

              {!isDataLoaded && <Loading/>}
              {(isDataLoaded && favorites.length === 0) && <FavoritesEmpty/>}

              {(isDataLoaded && favorites.length !== 0) &&
                namesOfCities.map((cityName)=> {
                  const keyValue = generateId();
                  const cities: PlaceCardType[] = [];
                  favorites.forEach((card) => {
                    if (cityName === card.city.name && card.isFavorite) {
                      cities.push(card);
                    }
                  });
                  return (
                    <li key={keyValue} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <LocationItem
                          locationName={cityName}
                        />
                      </div>
                      <div className="favorites__places">
                        <PlaceCardList
                          pageType={PageType.Favorites}
                          placeCardArray={cities}
                          onChange={handleCardActiveReplace}
                        />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>

    </div>
  );
}

export default Favorites;
