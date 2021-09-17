import {
  parsePrismaPagination,
  parsePrismaCountdownOrderBy,
  transformConnection,
} from './utils/pagination';
import {ResolverGetUserCreatedCountdowns} from './utils/types';

export const getCreatedCountdowns: ResolverGetUserCreatedCountdowns = async (
  client,
  {id: userId, ...args},
) => {
  const pagination = parsePrismaPagination(args.pagination);
  const orderBy = parsePrismaCountdownOrderBy(args.orderBy);
  return client.countdown
    .findMany({
      ...pagination,
      orderBy,
      where: {createdBy: {id: userId}},
      select: {
        id: true,
        title: true,
        igniteAt: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {select: {id: true}},
      },
    })
    .then(transformConnection);
};
