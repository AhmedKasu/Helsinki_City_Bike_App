import { useQuery } from '@apollo/client';
import { SEARCH_STATION } from '../graphql/queries';

const useStationAutoComplete = (name: string) => {
  const { loading, data, error } = useQuery(SEARCH_STATION, {
    fetchPolicy: 'cache-and-network',
    variables: { nimi: name },
  });

  return {
    loading,
    data,
    error,
  };
};

export default useStationAutoComplete;
