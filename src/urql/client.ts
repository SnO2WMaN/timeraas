import {createClient} from 'urql';

export const createUrqlClient = () =>
  createClient({
    // eslint-disable-next-line no-process-env
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });
