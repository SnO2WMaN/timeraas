import clsx from 'clsx';
import React from 'react';

import {IconLoading, IconMore} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';

export type LoadMoreProps = {
  className?: string;
  loading: boolean;
  onClick(): void;
};
export const LoadMore: React.VFC<LoadMoreProps> = ({
  className,
  loading,
  onClick,
}) => {
  const {LL} = useTranslation();
  return (
    <button
      type="button"
      disabled={loading}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
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
      {loading && (
        <>
          <IconLoading className={clsx('text-sm')} />
          <span className={clsx('ml-2', ['font-bold'])}>{LL.Loading()}</span>
        </>
      )}
      {!loading && (
        <>
          <IconMore className={clsx('text-sm')} />
          <span className={clsx('ml-2', ['font-bold'])}>
            {LL.ListPage.LoadMore()}
          </span>
        </>
      )}
    </button>
  );
};
