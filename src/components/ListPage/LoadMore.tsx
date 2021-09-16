import React from 'react';
import clsx from 'clsx';

import {IconMore} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';
import {LinkList} from '~/components/Link';

export type LoadMoreProps = {className?: string; endCursor: string};
export const LoadMore: React.VFC<LoadMoreProps> = ({className, endCursor}) => {
  const {LL} = useTranslation();
  return (
    <LinkList after={endCursor}>
      <a
        className={clsx(
          className,
          ['py-4'],
          ['rounded-md'],
          ['inline-flex', 'justify-center', 'items-center'],
          ['border', 'border-night-4'],
          ['bg-night-1', 'hover:bg-frost-1'],
          ['text-snow-3', 'hover:text-night-1'],
        )}
      >
        <IconMore className={clsx('text-sm')} />
        <span className={clsx('ml-2', ['font-bold'])}>
          {LL.ListPage.LoadMore()}
        </span>
      </a>
    </LinkList>
  );
};
