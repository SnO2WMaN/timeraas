import {ApolloServer, makeExecutableSchema} from 'apollo-server-micro';
import {PrismaClient} from '@prisma/client';
import {getSession} from 'next-auth/react';

import {findCountdown, getCountdown, getViewer} from './query';
import {Resolvers, typeDefs} from './codegen';
import {createCountdown} from './mutation';

const client = new PrismaClient();

export const config = {api: {bodyParser: false}};

const getUserId = (ctx: any): Promise<string | null> =>
  getSession({req: ctx.req}).then((session) => session?.user.id || null);

const resolvers: Resolvers = {
  Query: {
    async viewer(parent, args, ctx) {
      const userId = await getUserId(ctx);
      if (!userId) return null;
      return getViewer(client, {userId});
    },
    countdown(parent, args) {
      return getCountdown(client, {id: args.id});
    },
    findCountdown(parent, args) {
      return findCountdown(client, {id: args.id});
    },
  },
  Mutation: {
    async createCountdown(parent, args, ctx) {
      const userId = await getUserId(ctx);
      if (!userId) throw new Error();
      return createCountdown(client, {
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
