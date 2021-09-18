import {findManyCursorConnection} from '@devoxa/prisma-relay-cursor-connection';

import {ResolverGetUserCreatedCountdowns} from './utils/types';

export const getCreatedCountdowns: ResolverGetUserCreatedCountdowns = async (
  client,
  {id, orderBy, pagination},
) =>
  findManyCursorConnection(
    (args) =>
      client.countdown.findMany({
        ...args,
        orderBy,
        where: {createdBy: {id}},
        select: {
          id: true,
          title: true,
          igniteAt: true,
          createdAt: true,
          updatedAt: true,
          createdBy: {select: {id: true}},
        },
      }),
    () => client.countdown.count({where: {createdBy: {id}}}),
    pagination,
  );
