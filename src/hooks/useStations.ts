import { useQuery } from '@apollo/client';
import { GET_STATIONS } from '../graphql/queries';
import { Station, PaginationDetails } from '../types';

interface StationsResults {
  allStations: {
    stations: Station[];
    paginationDetails: PaginationDetails;
  };
}

const useStations = () => {
  const { data, error, loading } = useQuery<StationsResults>(GET_STATIONS, {
    fetchPolicy: 'cache-and-network',
  });
  return {
    stations: data ? data.allStations.stations : [],
    error,
    loading,
  };
};

export default useStations;
