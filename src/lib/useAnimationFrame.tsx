import {useCallback, useEffect, useRef} from 'react';

export const useAnimationFrame = (callback: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  // callback関数に変更があった場合のみanimateを再生成する
  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  // callback関数に変更があった場合は一度破棄して再度呼び出す
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        return cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};
