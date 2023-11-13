import { ComponentProps, forwardRef } from "react";
import { useClassNameMerged } from "@/hooks";
import { SpinnerIcon } from "@/components/atoms";

type Props = {
  loading?: boolean;
} & ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>(
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
