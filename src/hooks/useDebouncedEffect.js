import { useCallback, useEffect } from "react";

export const useDebouncedEffect = (func, delay, deps) => {
    // func과 deps가 바뀌지 않는다면 계속 재정의 해줄 필요가 없어서 useCallback
    const callback = useCallback(func, deps);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        callback();
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [callback, delay]);
};
