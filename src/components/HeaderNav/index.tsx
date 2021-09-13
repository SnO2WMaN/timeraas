import React from 'react';
import clsx from 'clsx';

import {IconLoading} from '../Icon';

import {Signin} from './Signin';
import {UserInfo} from './UserInfo';

import {useTranslation} from '~/i18n/useTranslation';
import {useViewer} from '~/lib/useViewer';

export const Loading: React.VFC<{className?: string}> = ({className}) => {
  const {LL} = useTranslation();
  return (
    <span
      className={clsx(
        className,
        ['inline-flex', 'items-center'],
        ['px-4'],
        ['py-2'],
      )}
    >
      <IconLoading className={clsx(['text-frost-3'], ['text-sm'])} />
      <span
        className={clsx('ml-2', ['text-frost-3'], ['text-sm'], ['font-bold'])}
      >
        {LL.loading()}
      </span>
    </span>
  );
};

export type ViewProps = {
  className?: string;
  user: undefined | null | {image: string; alias: string; displayName: string};
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <header className={clsx(className, ['h-16'], ['bg-night-2'])}>
      <div
        className={clsx(['h-full'], 'container', 'mx-auto', [
          'flex',
          'items-center',
          'justify-end',
        ])}
      >
        {user === undefined && <Loading />}
        {user === null && <Signin />}
        {user && <UserInfo user={user} />}
      </div>
    </header>
  );
};
export const HeaderNav: React.VFC<{className?: string}> = ({...props}) => {
  const user = useViewer();
  return <View {...props} user={user} />;
};
