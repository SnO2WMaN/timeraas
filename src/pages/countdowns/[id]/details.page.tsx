import gql from 'graphql-tag';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import {getSdk} from './details.page.codegen';

import {ClockFC} from '~/components/CountdownPage/Clock';
import {graphqlClient} from '~/graphql-request/client';

const CountdownDetailsPageQuery = gql`
  query CountdownDetailsPage($id: ID!) {
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
    .CountdownDetailsPage({id: query.id})
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
> = ({title, igniteAt, ...props}) => {
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
      </div>
    </>
  );
};
export default Page;
