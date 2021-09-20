import gql from 'graphql-tag';
import {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next';
import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {getSdk} from './index.page.codegen';

import {CountdownLayout} from '~/components/Layout';
import {graphqlClient} from '~/graphql-request/client';

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

const NoSSRBackground = dynamic(
  () => import('~/components/CountdownPage/Canvas'),
  {ssr: false},
);

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> & {layout?: React.FC} = ({id, title, igniteAt, ...props}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NoSSRBackground className={clsx(['w-full', 'h-screen'])} />
    </>
  );
};
Page.layout = CountdownLayout;
export default Page;
