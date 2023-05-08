import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';
import { JourneysQuery } from '../types';

const useJourneys = (variables: JourneysQuery) => {
  const { loading, data, error, refetch } = useQuery(GET_JOURNEYS, {
    fetchPolicy: 'cache-and-network',
    variables: { ...variables },
  });

  return {
    error,
    data,
    loading,
    refetch,
  };
};

export default useJourneys;
