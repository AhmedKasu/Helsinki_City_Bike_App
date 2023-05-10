import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';
import { JourneysQuery, Journey } from '../types';

interface JourneysResults {
  allJourneys: {
    journeys: Journey[];
    paginationDetails: {
      resultsTotal: number;
      limit: number;
      currentPage: number;
      nextPage: boolean;
      previousPage: boolean;
    };
  };
}

const useJourneys = (variables: JourneysQuery) => {
  const { loading, data, error, refetch, fetchMore, networkStatus } =
    useQuery<JourneysResults>(GET_JOURNEYS, {
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
      variables: { ...variables },
    });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.allJourneys.paginationDetails.nextPage;

    if (!canFetchMore) return;

    const currentPage = data?.allJourneys.paginationDetails.currentPage;

    fetchMore({
      variables: {
        ...variables,
        currentPage: currentPage + 1,
      },
    });
  };

  return {
    error,
    data,
    fetchMore: handleFetchMore,
    loading,
    networkStatus,
    refetch,
  };
};

export default useJourneys;
