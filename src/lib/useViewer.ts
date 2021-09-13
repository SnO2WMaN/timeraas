import {useMemo} from 'react';
import gql from 'graphql-tag';

import {useGetViewerQuery} from './useViewer.graphql';

const GetViewerQuery = gql`
  query GetViewer {
    viewer {
      alias
      displayName
      picture
    }
  }
`;

export const useViewer = ():
  | {alias: string; displayName: string; image: string}
  | null
  | undefined => {
  const {data, loading} = useGetViewerQuery();
  const user = useMemo(() => {
    if (loading) return undefined;
    else if (data?.viewer)
      return {
        alias: data.viewer.alias,
        displayName: data.viewer.displayName,
        image: data.viewer.picture,
      };
    else return null;
  }, [data, loading]);

  return user;
};
