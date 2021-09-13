import {useEffect, useState} from 'react';
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

export type Viewer = {alias: string; displayName: string; image: string};
export const useViewer = (): Viewer | null | undefined => {
  const [viewer, setViewer] = useState<Viewer | null | undefined>(undefined);
  const {data, loading} = useGetViewerQuery();

  useEffect(() => {
    if (!loading && data?.viewer)
      setViewer({
        alias: data.viewer.alias,
        displayName: data.viewer.displayName,
        image: data.viewer.picture,
      });
    else if (!loading && !data?.viewer) setViewer(null);
  }, [data, loading]);

  return viewer;
};
