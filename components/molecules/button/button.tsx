import { useClassNameMerged } from "@/hooks";
import { SpinnerIcon } from "@/components/atoms";
import React from "react";

type Props = {
  loading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, loading = false, ...rest }, ref) => {
    const classNameMerged = useClassNameMerged("btn-primary", className);

    return (
      <button
        ref={ref}
        className={classNameMerged}
        disabled={loading}
        {...rest}
      >
        {loading && <SpinnerIcon className="animate-spin text-white" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
