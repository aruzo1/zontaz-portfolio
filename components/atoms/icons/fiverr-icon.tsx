import { ComponentProps, forwardRef } from "react";

export const FiverrIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        {...props}
      >
        <path
          d="M18.613 5.8149H7.52523V5.12594C7.52523 3.7724 8.95369 3.74805 9.67935 3.74805C10.0848 3.73795 10.4903 3.76377 10.8907 3.82519V0.101609C10.3012 0.0320808 9.7077 -0.0018428 9.11369 7.71344e-05C6.79814 7.71344e-05 2.51844 0.611883 2.51844 5.25453V5.84468H0.5V9.28808H2.51986V16.5566H0.635706V20H9.73221V16.5539H7.52523V9.28537H13.5791V16.5539H11.6978V19.9973H20.5V16.5539H18.6144L18.613 5.8149Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

FiverrIcon.displayName = "FiverrIcon";
