import { ComponentProps, forwardRef } from "react";

export const InstagramIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        {...props}
      >
        <path
          d="M17.9986 23.9988H7.00027C5.27686 23.997 3.62458 23.3115 2.40595 22.0929C1.18732 20.8742 0.501871 19.222 0.5 17.4986V6.50027C0.501871 4.77686 1.18732 3.12458 2.40595 1.90595C3.62458 0.68732 5.27686 0.00187056 7.00027 0H17.9997C19.7231 0.00187056 21.3754 0.68732 22.5941 1.90595C23.8127 3.12458 24.4981 4.77686 24.5 6.50027V17.4997C24.4978 19.2231 23.8121 20.8753 22.5932 22.0937C21.3744 23.3121 19.722 23.9973 17.9986 23.9988ZM7.00027 2.00226C5.80749 2.00382 4.66401 2.47834 3.82058 3.32176C2.97716 4.16518 2.50264 5.30867 2.50108 6.50145V17.5009C2.50264 18.6937 2.97716 19.8372 3.82058 20.6806C4.66401 21.524 5.80749 21.9985 7.00027 22.0001H17.9997C19.1925 21.9985 20.336 21.524 21.1794 20.6806C22.0228 19.8372 22.4974 18.6937 22.4989 17.5009V6.50027C22.4974 5.30749 22.0228 4.16401 21.1794 3.32058C20.336 2.47716 19.1925 2.00264 17.9997 2.00108L7.00027 2.00226Z"
          fill="currentColor"
        />
        <path
          d="M12.4995 17.9992C11.3128 17.9992 10.1528 17.6473 9.1662 16.988C8.17956 16.3288 7.41056 15.3918 6.95646 14.2954C6.50235 13.1991 6.38354 11.9928 6.61504 10.829C6.84654 9.66515 7.41796 8.5961 8.25703 7.75703C9.0961 6.91796 10.1651 6.34654 11.329 6.11504C12.4928 5.88354 13.6991 6.00235 14.7954 6.45646C15.8918 6.91056 16.8288 7.67956 17.488 8.6662C18.1473 9.65285 18.4992 10.8128 18.4992 11.9995C18.4973 13.5901 17.8646 15.1151 16.7398 16.2398C15.6151 17.3646 14.0901 17.9973 12.4995 17.9992ZM12.4995 7.99966C11.7074 7.99966 10.9332 8.23452 10.2747 8.67454C9.61614 9.11456 9.10286 9.73998 8.79977 10.4717C8.49668 11.2034 8.41738 12.0086 8.57189 12.7854C8.72641 13.5622 9.1078 14.2758 9.66785 14.8358C10.2279 15.3958 10.9414 15.7772 11.7182 15.9317C12.495 16.0863 13.3002 16.007 14.0319 15.7039C14.7637 15.4008 15.3891 14.8875 15.8291 14.229C16.2691 13.5704 16.504 12.7962 16.504 12.0042C16.5034 10.9425 16.0812 9.92456 15.3302 9.17408C14.5793 8.42359 13.5611 8.00202 12.4995 8.00202V7.99966Z"
          fill="currentColor"
        />
        <path
          d="M18.8736 6.99825C19.6327 6.99825 20.2481 6.38287 20.2481 5.62376C20.2481 4.86465 19.6327 4.24927 18.8736 4.24927C18.1145 4.24927 17.4991 4.86465 17.4991 5.62376C17.4991 6.38287 18.1145 6.99825 18.8736 6.99825Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

InstagramIcon.displayName = "InstagramIcon";
