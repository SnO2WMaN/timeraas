import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styled from 'styled-components';

import {Accordion} from './Accordion';

const Details = styled.details`
  & > summary::-webkit-details-marker {
    display: none;
  }

  & > summary:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  &:not([open]) > summary::before {
    display: none;
  }
`;

export const UserInfo: React.VFC<{
  className?: string;
  user: {image: string; alias: string; displayName: string};
}> = ({className, user}) => {
  return (
    <Details className={clsx(className, 'flex', ['relative'])}>
      <summary className={clsx('cursor-pointer', 'flex')}>
        <div className={clsx('w-12', 'h-12')}>
          <Image
            className={clsx('rounded-full')}
            src={user.image}
            width={128}
            height={128}
          />
        </div>
      </summary>
      <Accordion
        className={clsx(
          ['absolute'],
          ['top-full'],
          ['right-0'],
          ['mt-1'],
          ['z-1'],
        )}
        user={{alias: user.alias, displayName: user.displayName}}
      />
    </Details>
  );
};
