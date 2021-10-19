import { useEffect, useState } from "react";

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (value == null || value.trim() === "") {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    // callback();
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
