import {PrismaClient} from '@prisma/client';

export const getViewer = async (
  client: PrismaClient,
  {userId}: {userId: string},
): Promise<{id: string; name: string; image: string}> => {
  return client.user.findUnique({
    where: {id: userId},
    select: {id: true, name: true, image: true},
    rejectOnNotFound: true,
  });
};

export const getCountdown = async (
  client: PrismaClient,
  {id}: {id: string},
): Promise<{
  id: string;
  title: string;
  igniteAt: Date;
  createdAt: Date;
  updatedAt: Date;
}> => {
  return client.countdown.findUnique({
    where: {id},
    select: {
      id: true,
      title: true,
      igniteAt: true,
      createdAt: true,
      updatedAt: true,
    },
    rejectOnNotFound: true,
  });
};

export const findCountdown = async (
  client: PrismaClient,
  {id}: {id: string},
): Promise<{
  countdown: null | {
    id: string;
    title: string;
    igniteAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };
}> => {
  return client.countdown
    .findUnique({
      where: {id},
      select: {
        id: true,
        title: true,
        igniteAt: true,
        createdAt: true,
        updatedAt: true,
      },
      rejectOnNotFound: false,
    })
    .then((data) => ({countdown: data}));
};
