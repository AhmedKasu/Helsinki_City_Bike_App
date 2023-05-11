import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';
import { JourneysQuery, Journey, PaginationDetails } from '../types';

interface JourneysResults {
  allJourneys: {
    journeys: Journey[];
    paginationDetails: PaginationDetails;
  };
}

const useJourneys = (variables: JourneysQuery) => {
  const { loading, data, error, fetchMore, networkStatus } =
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
    journeys: data ? data.allJourneys.journeys : [],
    fetchMore: handleFetchMore,
    loading,
    networkStatus,
  };
};

export default useJourneys;
