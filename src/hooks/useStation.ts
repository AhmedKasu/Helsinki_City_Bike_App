import { useQuery } from '@apollo/client';
import { GET_STATION } from '../graphql/queries';
import { GetStation } from '../types';

interface Results {
  getStation: GetStation[];
}

const useStation = (variables: { nimi: string; month?: number }) => {
  const { data, error, loading } = useQuery<Results>(GET_STATION, {
    fetchPolicy: 'cache-and-network',
    variables: { ...variables },
  });

  return {
    station: data ? data.getStation : [],
    error,
    loading,
  };
};

export default useStation;
