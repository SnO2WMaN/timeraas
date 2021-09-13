import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const createApolloClient = () => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  });
  return new ApolloClient({cache, link});
};
