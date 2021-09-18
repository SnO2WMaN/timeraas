import {ResolverFindCountdown} from './utils/types';

export const findCountdown: ResolverFindCountdown = async (client, {id}) => {
  return client.countdown
    .findUnique({
      where: {id},
      select: {
        id: true,
        title: true,
        igniteAt: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {select: {id: true}},
      },
      rejectOnNotFound: false,
    })
    .then((data) => ({countdown: data}));
};
