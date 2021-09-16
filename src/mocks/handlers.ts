/* eslint-disable no-process-env */
/* eslint-disable import/extensions */

import {graphql} from 'msw';
import * as faker from 'faker';

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
                hasNextPage: true,
                endCursor: 'endCursor',
              },
              edges: [...new Array(req.variables.first)].map(() => ({
                __typename: 'CountdownEdge',
                node: {
                  __typename: 'Countdown',
                  id: faker.datatype.uuid(),
                  title: faker.lorem.words(),
                  igniteAt: faker.date.recent().toISOString(),
                  createdAt: faker.date.recent().toISOString(),
                  updatedAt: faker.date.recent().toISOString(),
                },
              })),
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
