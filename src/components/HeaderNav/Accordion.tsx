import React from 'react';
import clsx from 'clsx';
import {signOut} from 'next-auth/react';

import {IconSignout} from '../Icon';

import {useTranslation} from '~/i18n/useTranslation';

export type AccordionProps = {
  className?: string;
  user: {alias: string; displayName: string};
};
export const Accordion: React.VFC<AccordionProps> = ({className, user}) => {
  const {LL} = useTranslation();
  return (
    <nav
      className={clsx(
        className,
        'rounded',
        'w-48',
        ['py-1'],
        ['inline-flex'],
        ['flex-col'],
        ['bg-night-1'],
        ['border', 'border-night-4'],
      )}
    >
      <div className={clsx(['flex', 'flex-col'], ['px-4'], ['py-2'])}>
        <span
          className={clsx(
            'text-snow-3',
            ['text-sm'],
            ['font-bold'],
            ['break-all'],
          )}
        >
          {user.displayName}
        </span>
        <span className={clsx('text-snow-1', ['text-xs'])}>@{user.alias}</span>
      </div>
      <div className={clsx(['mt-1'], ['border-t', 'border-night-4'])}>
        <a
          className={clsx(
            'w-full',
            ['inline-flex', 'items-center'],
            ['px-6'],
            ['py-2'],
            'whitespace-nowrap',
            ['hover:bg-frost-1'],
            ['text-snow-3', 'hover:text-night-1'],
          )}
          href="/api/auth/signout"
          onClick={(event) => {
            event.preventDefault();
            signOut();
          }}
        >
          <IconSignout className={clsx('text-xs')} />
          <span className={clsx('ml-2', ['text-xs'], ['font-bold'])}>
            {LL.signout()}
          </span>
        </a>
      </div>
    </nav>
  );
};
