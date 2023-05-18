import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_SERVER_URI,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allJourneys: {
          keyArgs: [
            'departure',
            'return',
            'departureStationId',
            ' returnStationName',
            'returnStationId',
            'departureStationName',
            'coveredDistanceMeters',
            'durationSeconds',
            'orderBy',
          ],
          merge(existing, incoming) {
            if (!incoming) return existing;
            if (!existing) return incoming;

            const { journeys, ...rest } = incoming;

            const result = rest;
            result.journeys = [...existing.journeys, ...journeys];

            return result;
          },
        },
        allStations: {
          keyArgs: false,
          merge(existing, incoming) {
            if (!incoming) return existing;
            if (!existing) return incoming;

            const { stations, ...rest } = incoming;

            const result = rest;
            result.stations = [...existing.stations, ...stations];

            return result;
          },
        },
      },
    },
  },
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache,
  });
};

export default createApolloClient;
