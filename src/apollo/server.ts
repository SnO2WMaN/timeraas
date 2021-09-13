import {ApolloServer, makeExecutableSchema} from 'apollo-server-micro';

import {typeDefs} from './codegen';
import {resolvers} from './resolvers';

export const schema = makeExecutableSchema({typeDefs, resolvers});

export const server = new ApolloServer({
  schema,
  async context(ctx) {
    return ctx;
  },
});
