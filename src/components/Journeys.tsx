import { SimpleGrid } from '@chakra-ui/react';

import Journey from './Journey';
import JourneySkeleton from './JourneySkeleton';

import { Journey as TypeJourney } from '../types';
import useJourneys from '../hooks/useJourneys';

const Journeys = () => {
  const { data, loading } = useJourneys();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const journeys: TypeJourney[] | [] = data ? data.allJourneys.journeys : [];

  return (
    <>
      <SimpleGrid columns={2} spacing={5}>
        {loading && skeletons.map((s) => <JourneySkeleton key={s} />)}
        {journeys.map((journey) => (
          <Journey key={journey.id} journey={journey} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Journeys;
