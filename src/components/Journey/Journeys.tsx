import { NetworkStatus } from '@apollo/client';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { Waypoint } from 'react-waypoint';

import Journey from './Journey';
import JourneySkeleton from './JourneySkeleton';
import Info from '../Info';

import { Journey as TypeJourney } from '../../types';
interface Props {
  fetchMore: () => void;
  journeys: TypeJourney[] | [];
  loading: boolean;
  networkStatus: NetworkStatus;
}

const Journeys = ({ fetchMore, journeys, loading, networkStatus }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={5}>
      {loading && skeletons.map((s) => <JourneySkeleton key={s} />)}

      {journeys.length < 1 && !loading && (
        <Info message='No journeys found !' />
      )}

      {journeys.map((journey) => (
        <Journey key={journey.id} journey={journey} />
      ))}
      <Waypoint onEnter={() => fetchMore()} />
      {networkStatus === 3 && <Spinner color='red' />}
    </SimpleGrid>
  );
};

export default Journeys;
