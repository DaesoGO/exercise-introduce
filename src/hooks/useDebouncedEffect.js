import { useCallback, useEffect } from "react";

export const useDebouncedEffect = (func, delay, deps) => {
    // func과 deps가 바뀌지 않는다면 계속 재정의 해줄 필요가 없어서 useCallback

    useEffect(() => {
      const timer = setTimeout(() => {
        func();
      }, delay);

      return () => {

        clearTimeout(timer);
      };
    }, [deps, delay]);
};
