import React from 'react';

import {
  List,
  ListProps,
  CountdownOrderField,
  OrderDirection,
} from '~/components/ListPage/List';
import {SignedInNextPage, withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: SignedInNextPage<PageProps> = ({viewer, ...props}) => {
  const firstByte: ListProps['firstByte'] = {
    viewerId: viewer.id,
    first: 10,
    order: OrderDirection.Asc,
    field: CountdownOrderField.IgniteAt,
    after: null,
  };

  return (
    <>
      <List firstByte={firstByte} />
    </>
  );
};
export default withSignin(Page);
