import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const createApolloClient = () => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    // eslint-disable-next-line no-process-env
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    credentials: 'same-origin',
  });
  return new ApolloClient({cache, link});
};
