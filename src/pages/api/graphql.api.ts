import {ApolloServer} from 'apollo-server-micro';

import {Resolvers} from './graphql';

const resolvers: Resolvers = {
  Query: {
    viewer() {
      return {
        alias: 'alias',
        displayName: 'displayName',
        picture: 'picture',
      };
    },
  },
};

const server = new ApolloServer({resolvers});

export const config = {api: {bodyParser: false}};
export default server.createHandler({path: '/api/graphql'});
