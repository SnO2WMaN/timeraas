import {useEffect, useState} from 'react';
import gql from 'graphql-tag';

import {useGetViewerQuery} from './useViewer.codegen';

const GetViewerQuery = gql`
  query GetViewer {
    viewer {
      id
      name
      image
    }
  }
`;

export type Viewer = {id: string; image: string; name: string};
export const useViewer = (): Viewer | null | undefined => {
  const [viewer, setViewer] = useState<Viewer | null | undefined>(undefined);
  const [result] = useGetViewerQuery();
  const {data, fetching} = result;

  useEffect(() => {
    if (!fetching && data?.viewer)
      setViewer({
        id: data.viewer.id,
        name: data.viewer.name,
        image: data.viewer.image,
      });
    else if (!fetching && !data?.viewer) setViewer(null);
  }, [data, fetching]);

  return viewer;
};
