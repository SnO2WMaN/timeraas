/* eslint-disable no-process-env */
import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import {PrismaClient} from '@prisma/client';
import {PrismaAdapter} from '@next-auth/prisma-adapter';

const prisma = new PrismaClient();

export default NextAuth({
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
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
