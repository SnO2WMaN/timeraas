/* eslint-disable no-process-env */
import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import {PrismaAdapter} from '@next-auth/prisma-adapter';

import {prismaClient} from '~/prisma/client';

export default NextAuth({
  debug: process.env.NODE_ENV === 'development',
  session: {jwt: true},
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    encryption: true,
    secret: process.env.NEXTAUTH_JWT_SECRET,
    signingKey: process.env.NEXTAUTH_JWT_SIGNING_KEY,
    encryptionKey: process.env.NEXTAUTH_JWT_ENCRYPTION_KEY,
  },
  adapter: PrismaAdapter(prismaClient),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
});
