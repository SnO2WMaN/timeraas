import {NextPage} from 'next';
import React from 'react';

import {List} from '~/components/templates/ListPage/List';
import {withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  return (
    <>
      <List />
    </>
  );
};
export default withSignin(Page);
