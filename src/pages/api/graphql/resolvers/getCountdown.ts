import {ResolverGetCountdown} from './utils/types';

export const getCountdown: ResolverGetCountdown = async (client, {id}) => {
  return client.countdown.findUnique({
    where: {id},
    select: {
      id: true,
      title: true,
      igniteAt: true,
      createdAt: true,
      updatedAt: true,
      createdBy: {select: {id: true}},
    },
    rejectOnNotFound: true,
  });
};
