import {PrismaClient} from '@prisma/client';

export const createCountdown = (
  prisma: PrismaClient,
  {userId, title, igniteAt}: {userId: string; title: string; igniteAt: Date},
): Promise<{
  countdown: {
    id: string;
    title: string;
    igniteAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };
}> => {
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
      },
    })
    .then((countdown) => ({countdown}));
};
