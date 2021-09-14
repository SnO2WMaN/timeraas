import React from 'react';
import clsx from 'clsx';

import {IconLoading} from '../Icon';

import {Signin} from './Signin';
import {UserInfo} from './UserInfo';

import {useTranslation} from '~/i18n/useTranslation';
import {useViewer} from '~/lib/useViewer';
import {Link} from '~/components/Link';

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
        {LL.Loading()}
      </span>
    </span>
  );
};

export type ViewProps = {
  className?: string;
  user: undefined | null | {image: string; name: string};
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  const {LL} = useTranslation();
  return (
    <header className={clsx(className, ['h-16'], ['bg-night-2'])}>
      <div
        className={clsx(['h-full'], 'container', 'mx-auto', [
          'flex',
          'items-center',
        ])}
      >
        <Link href="/">
          <a className={clsx('text-snow-3', 'text-xl', 'italic', 'font-bold')}>
            {LL.ServiceName()}
          </a>
        </Link>
        <div className={clsx('flex-grow')} />
        <>
          {user === undefined && <Loading />}
          {user === null && <Signin />}
          {user && <UserInfo user={user} />}
        </>
      </div>
    </header>
  );
};
export const HeaderNav: React.VFC<{className?: string}> = ({...props}) => {
  const user = useViewer();
  return <View {...props} user={user} />;
};
