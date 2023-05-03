import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';
import { SimpleGrid } from '@chakra-ui/react';

import Journey from './Journey';
import { Journey as TypeJourney } from '../types';

const Journeys = () => {
  const { data } = useQuery(GET_JOURNEYS, { fetchPolicy: 'cache-and-network' });

  const journeys: TypeJourney[] | [] = data ? data.allJourneys.journeys : [];
  console.log('journeys', journeys);

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
