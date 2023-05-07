import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';

const useJourneys = () => {
  const { loading, data, error, refetch } = useQuery(GET_JOURNEYS, {
    fetchPolicy: 'cache-and-network',
  });

  const [getJourney, getJourneyResults] = useLazyQuery(GET_JOURNEYS);
  return {
    error,
    data,
    loading,
    refetch,
    getJourney,
    getJourneyResults,
  };
};

export default useJourneys;
