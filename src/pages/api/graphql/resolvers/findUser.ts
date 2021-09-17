import {ResolverFindUser} from './utils/types';

export const findUser: ResolverFindUser = async (client, {id}) => {
  return client.user
    .findUnique({
      where: {id},
      select: {
        id: true,
        name: true,
        image: true,
      },
      rejectOnNotFound: false,
    })
    .then((data) => ({user: data}));
};
