import React from 'react';
import {signIn} from 'next-auth/react';
import clsx from 'clsx';

import {IconSignin} from '../Icon';

import {useTranslation} from '~/i18n/useTranslation';

export type SigninProps = {
  className?: string;
};
export const Signin: React.VFC<SigninProps> = ({className}) => {
  const {LL} = useTranslation();
  return (
    <a
      className={clsx(
        className,
        ['inline-flex', 'items-center'],
        ['bg-night-4', 'hover:bg-frost-1'],
        ['text-snow-3', 'hover:text-night-1'],
        ['px-4'],
        ['py-2'],
        ['rounded-md'],
      )}
      href="/api/auth/signin"
      onClick={(event) => {
        event.preventDefault();
        signIn();
      }}
    >
      <IconSignin className={clsx('text-sm')} />
      <span className={clsx('ml-2', ['text-sm'], ['font-bold'])}>
        {LL.Signin()}
      </span>
    </a>
  );
};
