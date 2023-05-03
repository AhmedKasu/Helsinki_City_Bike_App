import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';

const useJourneys = () => {
  const { loading, data, error } = useQuery(GET_JOURNEYS, {
    fetchPolicy: 'cache-and-network',
  });

  const [refetch] = useLazyQuery(GET_JOURNEYS);

  return {
    error,
    data,
    loading,
    refetch,
  };
};

export default useJourneys;
