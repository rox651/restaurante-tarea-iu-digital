import { useEffect, useState } from "react";
import getStorageValue from "../../services/common/getStorageValue";
import setStorageValue from "../../services/common/setStorageValue";

type UseLocalStorage<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): UseLocalStorage<T> => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    setStorageValue(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
