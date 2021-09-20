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
      <p
        className={clsx(
          ['font-timeleap'],
          'text-3xl',
          'text-frost-1',
          'select-none',
        )}
      >
        {countdown}
      </p>
    </>
  );
};
