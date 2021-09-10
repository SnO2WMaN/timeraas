import React from 'react';
import {signIn} from 'next-auth/client';
import clsx from 'clsx';

import {useTranslation} from '~/i18n/useTranslation';

export const Signin: React.VFC<{className?: string}> = ({className}) => {
  const {LL} = useTranslation();
  return (
    <a
      className={clsx(className, ['bg-frost-1'])}
      href="/api/auth/signin"
      onClick={(event) => {
        event.preventDefault();
        signIn();
      }}
    >
      {LL.signin()}
    </a>
  );
};
