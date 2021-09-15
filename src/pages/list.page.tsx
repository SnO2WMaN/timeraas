import {NextPage} from 'next';
import React from 'react';

import {
  List,
  ListProps,
  CountdownOrderField,
  OrderDirection,
} from '~/components/templates/ListPage/List';
import {withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  const firstByte: ListProps['firstByte'] = {
    first: 10,
    order: OrderDirection.Asc,
    field: CountdownOrderField.IgniteAt,
  };

  return (
    <>
      <List firstByte={firstByte} />
    </>
  );
};
export default withSignin(Page);
