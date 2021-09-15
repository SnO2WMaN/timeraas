/* eslint-disable no-process-env */
/* eslint-disable import/extensions */
import {graphql} from 'msw';

import {GetViewerQuery, GetViewerQueryVariables} from '~/lib/useViewer.codegen';

const NextMocks = [
  graphql.query<GetViewerQuery, GetViewerQueryVariables>(
    'GetViewer',
    (req, res, ctx) => {
      return res(
        ctx.data({
          viewer: {
            name: 'SnO2WMaN',
            image:
              'https://pbs.twimg.com/profile_images/1413844612368658432/bT8eYwSC_400x400.png',
          },
        }),
      );
    },
  ),
];

export const handlers = [
  ...(process.env.NEXT_PUBLIC_API_MOCKING_ENABLED ? NextMocks : []),
];
