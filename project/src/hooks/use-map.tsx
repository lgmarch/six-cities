import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/place-card-type';
import {LinkForMap} from '../constants/constants';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType,
): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(LinkForMap.LayerForMapVoyager, {attribution: LinkForMap.LeafletLabelOnMap});
      instance.addLayer(layer);

      setMap(instance);
      return;
    }
    if (mapRef.current && map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
