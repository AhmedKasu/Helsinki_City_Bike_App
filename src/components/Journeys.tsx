import { SimpleGrid } from '@chakra-ui/react';

import Journey from './Journey';

import { Journey as TypeJourney } from '../types';
import useJourneys from '../hooks/useJourneys';

const Journeys = () => {
  const { data } = useJourneys();

  const journeys: TypeJourney[] | [] = data ? data.allJourneys.journeys : [];

  return (
    <>
      <SimpleGrid columns={2} spacing={5}>
        {journeys.map((journey) => (
          <Journey key={journey.id} journey={journey} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Journeys;
