/* eslint-disable no-process-env */
/* eslint-disable import/extensions */

import {graphql} from 'msw';
import * as faker from 'faker';

import {
  GetCountdownsQuery,
  GetCountdownsQueryVariables,
} from '~/components/ListPage/List.codegen';
import {GetViewerQuery, GetViewerQueryVariables} from '~/lib/useViewer.codegen';
import {
  CreateCountdownMutationVariables,
  CreateCountdownMutation,
} from '~/components/NewPage/Form/index.codegen';

const NextMocks = [
  graphql.query<GetViewerQuery, GetViewerQueryVariables>(
    'GetViewer',
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: 'Query',
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
          __typename: 'Query',
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
  graphql.mutation<CreateCountdownMutation, CreateCountdownMutationVariables>(
    'CreateCountdown',
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: 'Mutation',
          createCountdown: {
            countdown: {
              __typename: 'Countdown',
              id: faker.datatype.uuid(),
              title: req.variables.title,
              igniteAt: req.variables.igniteAt,
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
