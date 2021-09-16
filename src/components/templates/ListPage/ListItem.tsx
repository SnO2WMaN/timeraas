import clsx from 'clsx';
import React from 'react';

import {IconCreatedAt, IconIgniteAt, IconUpdatedAt} from '~/components/Icon';
import {Link} from '~/components/Link';
import {useTranslation} from '~/i18n/useTranslation';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  igniteAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  title,
  igniteAt,
  createdAt,
  updatedAt,
}) => {
  const {LL} = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ['py-2'],
        ['px-4'],
        ['inline-grid'],
        ['grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-1', 'xl:grid-cols-2'],
        ['gap-y-2'],
        ['gap-x-4'],
        ['rounded'],
        ['bg-night-1'],
        ['border', 'border-night-4'],
      )}
    >
      <a className={clsx(['col-span-full'])}>
        <Link href={`/countdowns/${id}`}>
          <a className={clsx('text-snow-3', ['text-2xl'], ['font-bold'])}>
            {title}
          </a>
        </Link>
      </a>
      <div className={clsx(['col-span-full'], ['flex', 'items-center'])}>
        <IconIgniteAt className={clsx(['text-aurora-2'], ['text-sm'])} />
        <span className={clsx(['text-snow-1'], ['text-sm'], ['ml-1'])}>
          {LL.IgniteAt()}
        </span>
        <span className={clsx(['text-snow-3'], ['text-base'], ['ml-2'])}>
          {LL.FormatDate.MediumDateTime(igniteAt)}
        </span>
      </div>
      <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
        <IconCreatedAt className={clsx(['text-frost-2'], ['text-sm'])} />
        <span className={clsx(['text-snow-1'], ['text-sm'], ['ml-1'])}>
          {LL.CreatedAt()}
        </span>
        <span className={clsx(['text-snow-3'], ['text-base'], ['ml-2'])}>
          {LL.FormatDate.MediumDateTime(createdAt)}
        </span>
      </div>
      <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
        <IconUpdatedAt className={clsx(['text-frost-2'], ['text-sm'])} />
        <span className={clsx(['text-snow-1'], ['text-sm'], ['ml-1'])}>
          {LL.UpdatedAt()}
        </span>
        <span className={clsx(['text-snow-3'], ['text-base'], ['ml-2'])}>
          {LL.FormatDate.MediumDateTime(updatedAt)}
        </span>
      </div>
    </div>
  );
};

export type ListItemProps = {
  className?: string;
  countdown: {
    id: string;
    title: string;
    igniteAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };
};
export const ListItem: React.VFC<ListItemProps> = ({countdown, ...props}) => {
  return <Component {...props} {...countdown} />;
};
