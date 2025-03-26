import React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const useClassNameMerged = (...classLists: ClassNameValue[]) => {
  return React.useMemo(() => twMerge(classLists), [classLists]);
};
