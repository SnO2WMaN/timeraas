import {getSession} from 'next-auth/react';

export const viewer = async (parent, args, context, info) => {
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
