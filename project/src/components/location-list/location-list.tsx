import {CityName} from '../../constants/constants';
import LocationItem from '../location-item/location-item';

function LocationList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(CityName).map((name)=> (
            <LocationItem
              key={name}
              locationName={name}
            />),
          )}
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
