import {Icon, Marker} from 'leaflet';
import {LinkForMap, SizeForMap} from '../../constants/constants';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {PlaceCardType} from '../../types/place-card-type';
import {MapStyle} from './map-style';

type MapTypes = {
  locations: PlaceCardType[];
  pageType: string,
  selectedLocationId: number | null,
};

const defaultCustomIcon = new Icon({
  iconUrl: LinkForMap.MarkerDefault,
  iconSize: [SizeForMap.ICON_SIZE_40, SizeForMap.ICON_SIZE_40],
  iconAnchor: [SizeForMap.ICON_SIZE_20, SizeForMap.ICON_SIZE_40],
});

const currentCustomIcon = new Icon({
  iconUrl: LinkForMap.MarkerCurrent,
  iconSize: [SizeForMap.ICON_SIZE_40, SizeForMap.ICON_SIZE_40],
  iconAnchor: [SizeForMap.ICON_SIZE_20, SizeForMap.ICON_SIZE_40],
});

function Map({locations, pageType, selectedLocationId}: MapTypes): JSX.Element {
  const city = locations[0].city;
  const styleClassName = pageType === 'main' ? MapStyle.Main : MapStyle.Room;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) {
      return;
    }

    locations.forEach((point) => {
      const marker = new Marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      });
      const markerIcon = selectedLocationId && point.id === selectedLocationId
        ? currentCustomIcon
        : defaultCustomIcon;
      marker.setIcon(markerIcon).addTo(map);
    });
  }, [map, locations, selectedLocationId]);

  return <section className={styleClassName} ref={mapRef}/>;
}

export default Map;
