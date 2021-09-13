import gql from 'graphql-tag';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';

import {getSdk} from './index.page.graphql';

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
  {id: string; title: string; igniteAt: Date},
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
> = ({...props}) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.igniteAt}</p>
    </>
  );
};
export default Page;
