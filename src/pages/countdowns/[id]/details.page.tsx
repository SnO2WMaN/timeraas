import gql from 'graphql-tag';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import clsx from 'clsx';

import {getSdk} from './details.page.codegen';

import {Head} from '~/components/Head';
import {ClockFC} from '~/components/CountdownPage/Clock';
import {graphqlClient} from '~/graphql-request/client';
import {useTranslation} from '~/i18n/useTranslation';

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
  const {LL} = useTranslation();

  return (
    <>
      <Head title={LL.Head.Title.CountdownDetailsPage({title})} />
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
