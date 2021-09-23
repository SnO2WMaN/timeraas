import clsx from 'clsx';
import React from 'react';

import {LinkCountdownDetails} from '../Link';

import {Image} from '~/components/Image';
import {useTranslation} from '~/i18n/useTranslation';

export const Details: React.VFC<{
  className?: string;
  id: string;
  createdBy: {image: string; name: string};
}> = ({className, id, createdBy}) => {
  const {LL} = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ['flex'],
        ['flex-col'],
        ['bg-night-4'],
        ['rounded-md'],
        ['px-4'],
        ['py-2'],
      )}
    >
      <LinkCountdownDetails id={id}>
        <a className={clsx('text-sm', 'text-frost-2', 'underline')}>
          {LL.CountdownPage.details()}
        </a>
      </LinkCountdownDetails>
      <div className={clsx('mt-2', 'flex', 'items-center')}>
        <Image
          className={clsx('rounded-full')}
          src={createdBy.image}
          width={16}
          height={16}
        />
        <span className={clsx('text-xs', 'text-snow-3', 'ml-2')}>
          {createdBy.name}
        </span>
      </div>
    </div>
  );
};
