import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import {useTranslation} from '~/i18n/useTranslation';

export const UserInfo: React.VFC<{className?: string; user: {image: string}}> =
  ({className, user}) => {
    const {LL} = useTranslation();
    return (
      <div className={clsx(className, 'flex')}>
        <Image
          className={clsx('rounded-full')}
          src={user.image}
          width={48}
          height={48}
        />
      </div>
    );
  };
