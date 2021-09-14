import React from 'react';
import clsx from 'clsx';

import {Link} from '~/components/Link';

export const AccordionItem: React.VFC<{
  className?: string;
  href: React.ComponentProps<typeof Link>['href'];
  Icon: React.VFC<{className?: string}>;
  text: string;
}> = ({className, href, Icon, text}) => (
  <Link href={href}>
    <a
      className={clsx(
        className,
        'w-full',
        ['inline-flex', 'items-center'],
        ['px-6'],
        ['py-2'],
        'whitespace-nowrap',
        ['hover:bg-frost-1'],
        ['text-snow-3', 'hover:text-night-1'],
      )}
    >
      <Icon className={clsx('text-xs')} />
      <span className={clsx('ml-2', ['text-xs'], ['font-bold'])}>{text}</span>
    </a>
  </Link>
);
