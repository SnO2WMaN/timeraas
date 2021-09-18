/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';

    readonly NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;

    readonly NEXTAUTH_SECRET: string;
    readonly NEXTAUTH_JWT_SECRET: string;
    readonly NEXTAUTH_JWT_SIGNING_KEY: string;
    readonly NEXTAUTH_JWT_ENCRYPTION_KEY: string;

    readonly TWITTER_CLIENT_ID: string;
    readonly TWITTER_CLIENT_SECRET: string;
  }
}
