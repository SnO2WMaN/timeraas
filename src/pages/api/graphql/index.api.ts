import {ApolloServer, makeExecutableSchema} from 'apollo-server-micro';
import {getToken} from 'next-auth/jwt';

import {parsePaginationArgs, parseCountdownOrder} from './args';
import {
  getCreatedCountdowns,
  createCountdown,
  findCountdown,
  findUser,
  getCountdown,
  getUser,
} from './resolvers';
import {Resolvers, typeDefs} from './codegen';

import {prismaClient} from '~/prisma/client';

export const AuthError = Error;

export const config = {api: {bodyParser: false}};

const resolvers: Resolvers = {
  User: {
    createdCountdowns({id}, {order, ...pagination}) {
      const parsedPagination = parsePaginationArgs(pagination);
      const parsedOrder = parseCountdownOrder(order);
      return getCreatedCountdowns(prismaClient, {
        id,
        pagination: parsedPagination,
        orderBy: parsedOrder,
      });
    },
  },
  Countdown: {
    createdBy({createdBy: {id}}) {
      return getUser(prismaClient, {id});
    },
  },
  Query: {
    user(parent, args, ctx) {
      return getUser(prismaClient, {id: args.id});
    },
    findUser(parent, args, ctx) {
      return findUser(prismaClient, {id: args.id});
    },
    viewer(parent, args, ctx) {
      const id = ctx['x-user-id'];
      if (!id) return null;
      return getUser(prismaClient, {id});
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
      const userId = ctx['x-user-id'];
      if (!userId) throw new AuthError('AuthError');
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
    const token = await getToken({
      req: ctx.req,
      encryption: true,
      /* eslint-disable no-process-env */
      secret: process.env.NEXTAUTH_JWT_SECRET,
      signingKey: process.env.NEXTAUTH_JWT_SIGNING_KEY,
      encryptionKey: process.env.NEXTAUTH_JWT_ENCRYPTION_KEY,
      /* eslint-enable no-process-env */
    });
    const userId = token?.sub || null;
    return {'x-user-id': userId};
  },
});

export default server.createHandler({path: '/api/graphql'});
