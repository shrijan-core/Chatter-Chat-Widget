import ResizeObserver from 'resize-observer-polyfill';
import { useState, useEffect, useCallback } from 'react';

function useCallbackRef() {
  const [ref, setRef] = useState<any>(null);
  const fn = useCallback((node: any) => {
    setRef(node);
  }, []);

  return [ref, fn];
}

type BoundsProps = {
  height: number;
};

export function useMeasure(ref: any) {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState<BoundsProps>({ height: 0 });

  useEffect(() => {
    function onResize([entry]: any) {
      setBounds({
        height: entry.contentRect.height,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  useEffect(() => {
    attachRef(ref);
  }, [attachRef, ref]);

  return bounds;
}
