import {ApolloServer, makeExecutableSchema} from 'apollo-server-micro';
import {getSession} from 'next-auth/react';

import {findCountdown, getCountdown, getViewer} from './query';
import {Resolvers, typeDefs} from './codegen';
import {createCountdown} from './mutation';

import {prismaClient} from '~/prisma/client';

export const config = {api: {bodyParser: false}};

const getUserId = (ctx: any): Promise<string | null> =>
  getSession({req: ctx.req}).then((session) => session?.user.id || null);

const resolvers: Resolvers = {
  Countdown: {
    createdBy(parent) {},
  },
  Query: {
    async viewer(parent, args, ctx) {
      const userId = await getUserId(ctx);
      if (!userId) return null;
      return getViewer(prismaClient, {userId});
    },
    countdown(parent, args) {
      return getCountdown(prismaClient, {id: args.id});
    },
    findCountdown(parent, args) {
      return findCountdown(prismaClient, {id: args.id});
    },
  },
  Mutation: {
    async createCountdown(parent, args, ctx) {
      const userId = await getUserId(ctx);
      if (!userId) throw new Error();
      return createCountdown(prismaClient, {
        userId,
        title: args.title,
        igniteAt: args.igniteAt,
      });
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
