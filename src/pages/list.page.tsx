import clsx from 'clsx';
import React from 'react';

import {Head} from '~/components/Head';
import {
  List,
  ListProps,
  CountdownOrderField,
  OrderDirection,
} from '~/components/ListPage/List';
import {useTranslation} from '~/i18n/useTranslation';
import {SignedInNextPage, withSignin} from '~/lib/withSignin';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: SignedInNextPage<PageProps> = ({viewer, ...props}) => {
  const {LL} = useTranslation();
  const firstByte: ListProps['firstByte'] = {
    viewerId: viewer.id,
    first: 6,
    order: OrderDirection.Asc,
    field: CountdownOrderField.IgniteAt,
    after: null,
  };

  return (
    <>
      <Head title={LL.Head.Title.ListPage()} />
      <div className={clsx(['py-8'])}>
        <List className={clsx('w-full')} firstByte={firstByte} />
      </div>
    </>
  );
};
export default withSignin(Page);
