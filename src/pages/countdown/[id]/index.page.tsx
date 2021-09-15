import gql from 'graphql-tag';
import {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next';
import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import {getSdk} from './index.page.graphql';

import {ClockFC} from '~/components/Clock';
import {Link} from '~/components/Link';
import {CountdownLayout} from '~/components/Layout';
import {graphqlClient} from '~/graphql-request/client';

const CountdownPageQuery = gql`
  query CountdownPage($id: ID!) {
    findCountdown(id: $id) {
      countdown {
        id
        title
        igniteAt
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
        <Link href={`/countdown/${id}/details`}>
          <a>Details</a>
        </Link>
      </div>
    </>
  );
};
Page.layout = CountdownLayout;
export default Page;
