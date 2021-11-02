import { useEffect, useState } from "react";

export const isVoid = (value: unknown) => value == null || value === "";

export const cleanObject = (object: Record<string, unknown>) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounce;
};

export const useArray = <T>(initialArray: T[]) => {
  const [array, setArray] = useState(initialArray);

  return {
    array,
    setArray,
    add: (item: T) => {
      setArray([...array, item]);
    },
    spliceArray: (index: number) => {
      const copyArray = [...array];
      copyArray.splice(index, 1);
      setArray(copyArray);
    },
    clear: () => {
      setArray([]);
    },
  };
};
