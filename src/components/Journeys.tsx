import { SimpleGrid } from '@chakra-ui/react';

import Journey from './Journey';
import JourneySkeleton from './JourneySkeleton';
import Retry from './Reload';
import Info from './Info';

import { ApolloError } from '@apollo/client';
import { Journey as TypeJourney } from '../types';

interface Props {
  error: ApolloError | undefined;
  loading: boolean;
  journeys: TypeJourney[] | [];
  refetch: () => void;
}

const Journeys = ({ error, journeys, loading, refetch }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error?.networkError && (
        <Retry message='Connection error!' onReload={() => refetch()} />
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={5}>
        {loading && skeletons.map((s) => <JourneySkeleton key={s} />)}
        {journeys.length < 1 ? (
          <Info message='No journeys found' />
        ) : (
          journeys.map((journey) => (
            <Journey key={journey.id} journey={journey} />
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default Journeys;
