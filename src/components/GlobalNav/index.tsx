import React from 'react';
import clsx from 'clsx';

import {Signin} from './Signin';
import {UserInfo} from './UserInfo';

import {useUser} from '~/lib/useUser';

export type ViewProps = {
  className?: string;
  user: undefined | null | {image: string};
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <header className={clsx(className, ['bg-night-1'])}>
      <div
        className={clsx(['h-full'], 'container', 'mx-auto', [
          'flex',
          'items-center',
        ])}
      >
        {user === undefined && <span>LOADING</span>}
        {user === null && <Signin />}
        {user && <UserInfo user={user} />}
      </div>
    </header>
  );
};

export const GlobalNav: React.VFC<{className?: string}> = ({...props}) => {
  const user = useUser();
  return <View {...props} user={user} />;
};
