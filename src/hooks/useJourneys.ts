import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';

const useJourneys = () => {
  const { loading, data, error } = useQuery(GET_JOURNEYS, {
    fetchPolicy: 'cache-and-network',
  });
  return {
    loading,
    data,
    error,
  };
};

export default useJourneys;
