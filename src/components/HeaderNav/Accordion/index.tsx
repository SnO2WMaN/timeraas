import React from 'react';
import clsx from 'clsx';

import {AccordionItem} from './AccordionItem';

import {Image} from '~/components/Image';
import {IconList, IconPlus, IconSignout} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';
import {LinkList, LinkNew, LinkSignOut} from '~/components/Link';

export type AccordionProps = {
  className?: string;
  user: {name: string; image: string};
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
      <div className={clsx(['flex', 'items-center'], ['px-4'], ['py-2'])}>
        <div className={clsx('w-8', 'h-8')}>
          <Image
            className={clsx('rounded-full')}
            src={user.image}
            width={128}
            height={128}
          />
        </div>
        <span
          className={clsx(
            'text-snow-3',
            'ml-2',
            ['text-sm'],
            ['font-bold'],
            ['break-all'],
          )}
        >
          {user.name}
        </span>
      </div>
      <div className={clsx(['pt-1', 'pb-1'], ['border-t', 'border-night-4'])}>
        <AccordionItem
          Link={LinkNew}
          Icon={IconPlus}
          text={LL.HeaderNav.CreateNew()}
        />
        <AccordionItem
          Link={LinkList}
          Icon={IconList}
          text={LL.HeaderNav.List()}
        />
      </div>
      <div className={clsx(['pt-1'], ['border-t', 'border-night-4'])}>
        <AccordionItem
          Link={LinkSignOut}
          Icon={IconSignout}
          text={LL.Signout()}
        />
      </div>
    </nav>
  );
};
