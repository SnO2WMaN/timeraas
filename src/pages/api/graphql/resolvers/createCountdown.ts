import {ResolverCreateCountdown} from './utils/types';

export const createCountdown: ResolverCreateCountdown = (
  prisma,
  {userId, title, igniteAt},
) => {
  return prisma.countdown
    .create({
      data: {
        title,
        igniteAt,
        createdBy: {connect: {id: userId}},
      },
      select: {
        id: true,
        title: true,
        igniteAt: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {select: {id: true}},
      },
    })
    .then((countdown) => ({countdown}));
};
