import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allJourneys: {
          keyArgs: false,
          merge(existing, incoming) {
            if (!incoming) return existing;
            if (!existing) return incoming;

            const { journeys, ...rest } = incoming;

            const result = rest;
            result.journeys = [...existing.journeys, ...journeys];

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
