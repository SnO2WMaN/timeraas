import {useMemo} from 'react';
import {useSession} from 'next-auth/client';

export type User = {
  // alias: string;
  // displayName: string;
  image: string;
};
export const useUser = (): User | null | undefined => {
  const [session, loading] = useSession();

  const user = useMemo(() => {
    if (loading) return undefined;
    else if (
      session?.user &&
      // session.user.alias &&
      //  session.user.displayName &&
      session.user.image
    ) {
      return {
        ...session.user,
        image: session.user.image,
      };
    } else return null;
  }, [session, loading]);

  return user;
};
