/* eslint-disable no-process-env */
import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import {PrismaAdapter} from '@next-auth/prisma-adapter';

import {prismaClient} from '~/prisma/client';

export default NextAuth({
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prismaClient),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({session, user}) {
      return {...session, user: {...session.user, id: user.id}};
    },
  },
});
