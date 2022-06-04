import { useState, useEffect } from "react";

type Props = { key: string; defaultValue: string };

const getSessionStorageOrDefault = ({ key, defaultValue }: Props): string => {
  if (typeof window !== "undefined") {
    const stored = window.sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  return defaultValue;
};

export const useSessionStorage = ({ key, defaultValue }: Props) => {
  const [value, setValue] = useState(
    getSessionStorageOrDefault({ key, defaultValue })
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
