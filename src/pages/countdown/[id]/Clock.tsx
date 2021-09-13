import clsx from 'clsx';
import React, {useState} from 'react';
import styled from 'styled-components';

import {useAnimationFrame} from '~/lib/useAnimationFrame';

export const TimeleapP = styled.p`
  font-family: 'Timeleap', monospace;
`;

export const ClockFC: React.VFC<{className?: string; igniteAt: Date}> = ({
  igniteAt,
}) => {
  const [countdown, setCountdown] = useState(0);
  useAnimationFrame(() => {
    setCountdown(igniteAt.getTime() - Date.now());
  });

  return (
    <>
      <TimeleapP className={clsx('text-3xl', 'text-frost-1', 'select-none')}>
        {`${Math.floor((countdown / 10 ** 10) % 100)}`.padStart(2, '0')}:
        {`${Math.floor((countdown / 10 ** 8) % 100)}`.padStart(2, '0')}:
        {`${Math.floor((countdown / 10 ** 6) % 100)}`.padStart(2, '0')}:
        {`${Math.floor((countdown / 10 ** 4) % 100)}`.padStart(2, '0')}:
        {`${Math.floor((countdown / 10 ** 2) % 100)}`.padStart(2, '0')}:
        {`${Math.floor((countdown / 10 ** 0) % 100)}`.padStart(2, '0')}
      </TimeleapP>
    </>
  );
};
