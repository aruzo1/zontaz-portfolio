import { useCallback, useState } from "react";

export function useInput<T>(defaultValue?: T) {
  const [value, setValue] = useState(defaultValue);

  const handler = useCallback((v: T) => setValue(v), []);

  return { value, handler };
}
