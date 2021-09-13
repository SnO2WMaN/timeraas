import {getSession} from 'next-auth/react';

import {PrismaClient} from '.prisma/client';

export const getViewer = async (context: any) => {
  const session = await getSession({req: context.req});

  if (!session) return null;

  if (session.user && session.user.name && session.user.image)
    return {
      alias: session.user.name,
      displayName: session.user.name,
      picture: session.user.image,
    };
  return null;
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
