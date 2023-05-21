import { useMemo, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  StreetViewPanorama,
  BicyclingLayerF,
} from '@react-google-maps/api';
import { Center, Spinner } from '@chakra-ui/react';

import { Coordinates } from '../types';
import styles from '../utils/styles';

interface Props {
  coordinates: Coordinates;
}

const Map = ({ coordinates }: Props) => {
  const [showStreetView, setShowStreetView] = useState<boolean>(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat: 60.192059,
      lng: 24.945831,
    }),
    []
  );

  const { lat, lng } = coordinates;

  if (!isLoaded)
    return (
      <Center>
        <Spinner color='red' marginTop={'40%'} />
      </Center>
    );
  return (
    <GoogleMap
      options={{
        disableDefaultUI: true,
        minZoom: 8,
      }}
      onClick={() => setShowStreetView(true)}
      zoom={lat && lng ? 12 : 10}
      center={lat && lng ? coordinates : center}
      mapContainerStyle={styles.map}>
      {lat && lng && (
        <>
          <StreetViewPanorama
            options={{ position: coordinates, visible: showStreetView }}
          />
          <MarkerF position={coordinates} />
        </>
      )}
      <BicyclingLayerF />
    </GoogleMap>
  );
};

export default Map;
