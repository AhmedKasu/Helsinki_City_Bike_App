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
  const { data, error, loading, fetchMore, networkStatus } =
    useQuery<StationsResults>(GET_STATIONS, {
      fetchPolicy: 'cache-and-network',
    });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.allStations.paginationDetails.nextPage;

    if (!canFetchMore) return;

    const nextPage = data.allStations.paginationDetails.currentPage + 1;

    fetchMore({
      variables: {
        currentPage: nextPage,
      },
    });
  };

  return {
    stations: data ? data.allStations.stations : [],
    error,
    loading,
    fetchMore: handleFetchMore,
    networkStatus,
  };
};

export default useStations;
