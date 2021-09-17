import gql from 'graphql-tag';
import {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next';
import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import {getSdk} from './index.page.codegen';

import {ClockFC} from '~/components/Clock';
import {CountdownLayout} from '~/components/Layout';
import {graphqlClient} from '~/graphql-request/client';
import {LinkCountdownDetails} from '~/components/Link';

const CountdownPageQuery = gql`
  query CountdownPage($id: ID!) {
    findCountdown(id: $id) {
      countdown {
        id
        title
        igniteAt
        createdBy {
          id
          name
          image
        }
      }
    }
  }
`;
const graphqlSdk = getSdk(graphqlClient);
export const getServerSideProps: GetServerSideProps<
  {id: string; title: string; igniteAt: string},
  {id: string}
> = async ({query}) => {
  if (!query || typeof query.id !== 'string') return {notFound: true};
  return graphqlSdk
    .CountdownPage({id: query.id})
    .then(({findCountdown: {countdown}}) =>
      countdown
        ? {
            props: {
              id: countdown.id,
              title: countdown.title,
              igniteAt: countdown.igniteAt,
            },
          }
        : {notFound: true},
    );
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> & {layout?: React.FC} = ({id, title, igniteAt, ...props}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={clsx(
          ['w-full', 'h-full'],
          ['flex', 'items-center', 'justify-center'],
        )}
      >
        <ClockFC igniteAt={new Date(igniteAt)} />
        <LinkCountdownDetails id={id}>
          <a>Details</a>
        </LinkCountdownDetails>
      </div>
    </>
  );
};
Page.layout = CountdownLayout;
export default Page;