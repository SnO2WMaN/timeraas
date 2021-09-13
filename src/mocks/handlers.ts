import {graphql} from 'msw';

import {GetViewerQuery, GetViewerQueryVariables} from '~/lib/useViewer.graphql';

export const dev = [
  graphql.query<GetViewerQuery, GetViewerQueryVariables>(
    'GetViewer',
    (req, res, ctx) => {
      return res(
        ctx.data({
          viewer: {
            alias: 'alias',
            displayName: 'DisplayName',
            picture:
              'https://pbs.twimg.com/profile_images/1413844612368658432/bT8eYwSC_400x400.png',
          },
        }),
      );
    },
  ),
];

export const handlers = [];
