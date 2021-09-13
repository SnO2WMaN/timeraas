import {ApolloServer, makeExecutableSchema} from 'apollo-server-micro';

import {findCountdown, getCountdown, getViewer} from './query';
import {Resolvers, typeDefs} from './codegen';

import {PrismaClient} from '.prisma/client';

export const config = {api: {bodyParser: false}};

const prisma = new PrismaClient();

const resolvers: Resolvers = {
  Query: {
    viewer(parent, args, ctx) {
      return getViewer(ctx);
    },
    countdown(parent, args) {
      return getCountdown(prisma, {id: args.id});
    },
    findCountdown(parent, args) {
      return findCountdown(prisma, {id: args.id});
    },
  },
};

const schema = makeExecutableSchema({typeDefs, resolvers});

const server = new ApolloServer({
  schema,
  async context(ctx) {
    return ctx;
  },
});

export default server.createHandler({path: '/api/graphql'});
