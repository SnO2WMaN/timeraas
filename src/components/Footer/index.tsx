import clsx from 'clsx';
import React from 'react';

import {LinkIndex} from '~/components/Link';

export const Footer: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <footer className={clsx(className, 'bg-night-3', 'py-4')}>
      <div className={clsx('container', 'mx-auto')}>
        <p className={clsx('text-snow-1')}>footer</p>
        <LinkIndex>Home</LinkIndex>
      </div>
    </footer>
  );
};
