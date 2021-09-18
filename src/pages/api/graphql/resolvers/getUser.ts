import {ResolverGetUser} from './utils/types';

export const getUser: ResolverGetUser = async (client, {id}) => {
  return client.user.findUnique({
    where: {id},
    select: {
      id: true,
      name: true,
      image: true,
    },
    rejectOnNotFound: true,
  });
};
