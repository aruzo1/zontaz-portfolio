import React from "react";

export function useInput<T>(defaultValue?: T) {
  const [value, setValue] = React.useState(defaultValue);

  const handler = React.useCallback((v: T) => setValue(v), []);

  return { value, handler };
}
