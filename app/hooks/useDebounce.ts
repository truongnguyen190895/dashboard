import { useState, useEffect } from "react";

export const useDebounce = (
  callback: (searchQuery: string) => void,
  timeout: number
) => {
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    const debounceTimeOut = setTimeout(() => {
      callback(query);
    }, timeout);
    return () => clearTimeout(debounceTimeOut);
  }, [query]);
  return { query, setQuery };
};
