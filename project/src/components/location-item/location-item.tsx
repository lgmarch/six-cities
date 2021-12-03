import {getStylesForItem} from '../../utils/get-styles-for-bookmark';
import {Link} from 'react-router-dom';
import {setActiveCity} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {selectActiveCity} from '../../store/reducers/settings/selector';
import {AppRoute} from '../../constants/constants';

type LocationItemProps = {
  locationName: string,
}

function LocationItem({locationName}: LocationItemProps): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useSelector(selectActiveCity);

  const changeCity = (city: string) => {
    dispatch(setActiveCity(city));
  };

  const pageStyles = getStylesForItem(activeCity);

  return(
    <div
      className="locations__item"
      onClick={() => changeCity(locationName)}
    >
      <Link to={AppRoute.Main}
        className={activeCity !== locationName
          ? pageStyles
          : `${pageStyles} tabs__item--active`}
      >
        <span>{locationName}</span>
      </Link>
    </div>
  );
}

export default LocationItem;
