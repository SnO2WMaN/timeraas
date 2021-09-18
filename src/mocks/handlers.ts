/* eslint-disable no-process-env */
/* eslint-disable import/extensions */

import {graphql} from 'msw';
import faker from 'faker';

import {
  GetCountdownsQuery,
  GetCountdownsQueryVariables,
} from '~/components/ListPage/List.codegen';
import {GetViewerQuery, GetViewerQueryVariables} from '~/lib/useViewer.codegen';
import {
  CreateCountdownMutationVariables,
  CreateCountdownMutation,
} from '~/components/NewPage/Form/index.codegen';
import {
  CountdownPageQuery,
  CountdownPageQueryVariables,
} from '~/pages/countdowns/[id]/index.page.codegen';
import {
  CountdownDetailsPageQuery,
  CountdownDetailsPageQueryVariables,
} from '~/pages/countdowns/[id]/details.page.codegen';

const devMocks = [
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
                  createdAt: faker.date.past().toISOString(),
                  updatedAt: faker.date.past().toISOString(),
                },
              })),
            },
          },
        }),
      );
    },
  ),
  graphql.query<CountdownPageQuery, CountdownPageQueryVariables>(
    'CountdownPage',
    (req, res, ctx) =>
      res(
        ctx.data({
          __typename: 'Query',
          findCountdown: {
            __typename: 'FindCountdownPayload',
            countdown: {
              id: req.variables.id,
              title: faker.lorem.words(),
              igniteAt: faker.date.future().toISOString(),
              createdBy: {
                id: 'user-1',
                name: 'SnO2WMaN',
                image:
                  'https://pbs.twimg.com/profile_images/1413844612368658432/bT8eYwSC_400x400.png',
              },
            },
          },
        }),
      ),
  ),
  graphql.query<CountdownDetailsPageQuery, CountdownDetailsPageQueryVariables>(
    'CountdownDetailsPage',
    (req, res, ctx) =>
      res(
        ctx.data({
          __typename: 'Query',
          findCountdown: {
            __typename: 'FindCountdownPayload',
            countdown: {
              id: req.variables.id,
              title: faker.lorem.words(),
              igniteAt: faker.date.future().toISOString(),
              createdBy: {
                id: 'user-1',
                name: 'SnO2WMaN',
                image:
                  'https://pbs.twimg.com/profile_images/1413844612368658432/bT8eYwSC_400x400.png',
              },
            },
          },
        }),
      ),
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
  ...(process.env.NODE_ENV === 'development' ? devMocks : []),
];
