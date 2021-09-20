import clsx from 'clsx';
import React, {useState, useRef} from 'react';
import {Container, Stage, Text} from '@inlet/react-pixi';
import {useThrottle} from 'react-use';

export const Canvas: React.VFC<{className?: string}> = ({className}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({width: 0, height: 0});

  useThrottle(() => {
    setSize({
      width: ref.current?.clientWidth || 0,
      height: ref.current?.clientHeight || 0,
    });
  }, 250);

  return (
    <div ref={ref} className={clsx(className)}>
      <Stage
        className={clsx(className)}
        {...size}
        options={{backgroundAlpha: 0}}
      >
        <Container x={500}>
          <Text text="Hello World" />
        </Container>
      </Stage>
    </div>
  );
};

export default Canvas;
