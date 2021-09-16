/* eslint-disable no-process-env */
/* eslint-disable import/extensions */
import {graphql} from 'msw';

import {
  GetCountdownsQuery,
  GetCountdownsQueryVariables,
} from '~/components/templates/ListPage/List.codegen';
import {GetViewerQuery, GetViewerQueryVariables} from '~/lib/useViewer.codegen';

const NextMocks = [
  graphql.query<GetViewerQuery, GetViewerQueryVariables>(
    'GetViewer',
    (req, res, ctx) => {
      return res(
        ctx.data({
          viewer: {
            __typename: 'User',
            id: 'user-1',
            name: 'SnO2WMaN',
            image:
              'https://pbs.twimg.com/profile_images/1413844612368658432/bT8eYwSC_400x400.png',
          },
        }),
      );
    },
  ),
  graphql.query<GetCountdownsQuery, GetCountdownsQueryVariables>(
    'GetCountdowns',
    (req, res, ctx) => {
      return res(
        ctx.data({
          user: {
            __typename: 'User',
            id: 'user-1',
            createdCountdowns: {
              __typename: 'CountdownConnection',
              pageInfo: {
                __typename: 'PageInfo',
                hasNextPage: false,
                endCursor: null,
              },
              edges: [
                {
                  __typename: 'CountdownEdge',
                  node: {
                    __typename: 'Countdown',
                    id: 'countdown-1',
                    title: 'title 1',
                    createdAt: '2021-12-31T00:00:00.000Z',
                    updatedAt: '2021-01-01T00:00:00.000Z',
                    igniteAt: '2021-01-01T00:00:00.000Z',
                  },
                },
                {
                  __typename: 'CountdownEdge',
                  node: {
                    __typename: 'Countdown',
                    id: 'countdown-2',
                    title: 'title 2',
                    createdAt: '2021-12-31T00:00:00.000Z',
                    updatedAt: '2021-01-01T00:00:00.000Z',
                    igniteAt: '2021-01-01T00:00:00.000Z',
                  },
                },
              ],
            },
          },
        }),
      );
    },
  ),
];

export const handlers = [
  ...(process.env.NEXT_PUBLIC_API_MOCKING_ENABLED ? NextMocks : []),
];
