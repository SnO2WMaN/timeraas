import clsx from 'clsx';
import React, {useState, useRef} from 'react';
import {Container, Stage, Text} from '@inlet/react-pixi';
import {useThrottle} from 'react-use';
import {TextStyle} from '@pixi/text';

import {useAnimationFrame} from '~/lib/useAnimationFrame';

export const Animation: React.VFC<{
  width: number;
  height: number;
  countdown: number;
}> = ({width, height, countdown}) => (
  <Stage options={{backgroundColor: 0xffffff}} width={width} height={height}>
    {countdown && (
      <Container position={[width / 2, height / 2]}>
        <Text
          anchor={0.5}
          x={0}
          y={0}
          text={String(countdown)}
          style={
            new TextStyle({
              fontSize: 24,
              fontFamily: 'monospace',
              fill: 0x000000,
            })
          }
        />
      </Container>
    )}
  </Stage>
);

export const useCountdown = (igniteAt: Date): number | null => {
  const [countdown, setCountdown] = useState<number | null>(null);
  useAnimationFrame(() => {
    setCountdown(igniteAt.getTime() - Date.now());
  });
  return countdown;
};

export const Canvas: React.VFC<{className?: string; igniteAt: Date}> = ({
  className,
  igniteAt,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({width: 0, height: 0});

  const countdown = useCountdown(igniteAt);

  useThrottle(() => {
    setSize({
      width: ref.current?.clientWidth || 0,
      height: ref.current?.clientHeight || 0,
    });
  }, 250);

  return (
    <div ref={ref} className={clsx(className)}>
      {countdown && <Animation countdown={countdown} {...size} />}
    </div>
  );
};

export default Canvas;
