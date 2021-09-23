import gql from 'graphql-tag';
import {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next';
import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {getSdk} from './index.page.codegen';

import {CountdownLayout} from '~/components/Layout';
import {graphqlClient} from '~/graphql-request/client';
import {Details} from '~/components/CountdownPage/Details';

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
  {
    id: string;
    title: string;
    igniteAt: string;
    createdBy: {id: string; name: string; image: string};
  },
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
              createdBy: {
                id: countdown.createdBy.id,
                name: countdown.createdBy.name,
                image: countdown.createdBy.image,
              },
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
> & {layout?: React.FC} = ({id, title, igniteAt, createdBy, ...props}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NoSSRBackground
        className={clsx(['w-full', 'h-screen'])}
        igniteAt={new Date(igniteAt)}
      />
      <Details
        className={clsx(
          ['absolute'],
          ['z-1'],
          ['bottom-0'],
          ['right-0'],
          ['mr-4'],
          ['mb-4'],
        )}
        id={id}
        createdBy={createdBy}
      />
    </>
  );
};
Page.layout = CountdownLayout;
export default Page;
