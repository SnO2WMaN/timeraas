import {PrismaClient} from '@prisma/client';

export type User = {
  id: string;
  name: string;
  image: string;
};
export type Countdown = {
  id: string;
  title: string;
  igniteAt: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {id: string};
};

export type PaginationArgs =
  | {first: number; after: string | null}
  | {last: number; before: string | null};
export type OrderByArgs<T extends string> = {field: T; order: 'asc' | 'desc'};

export type Edge<T> = {node: T; cursor: string};
export type Connection<T extends {id: string}> = {
  edges: Edge<T>[];
  pageInfo: {
    startCursor: string | null;
    endCursor: string | null;
  };
};

export type ResolverCreateCountdown = (
  prisma: PrismaClient,
  args: {userId: string; title: string; igniteAt: Date},
) => Promise<{countdown: Countdown}>;

export type ResolverGetCountdown = (
  prisma: PrismaClient,
  args: {id: string},
) => Promise<Countdown>;
export type ResolverFindCountdown = (
  prisma: PrismaClient,
  args: {id: string},
) => Promise<{countdown: null | Countdown}>;

export type ResolverGetUser = (
  client: PrismaClient,
  args: {id: string},
) => Promise<User>;
export type ResolverFindUser = (
  client: PrismaClient,
  args: {id: string},
) => Promise<{user: null | User}>;

export type ResolverGetUserCreatedCountdowns = (
  client: PrismaClient,
  args: {
    id: string;
    pagination: PaginationArgs;
    orderBy: OrderByArgs<'igniteAt' | 'createdAt' | 'updatedAt'>;
  },
) => Promise<Connection<Countdown>>;
