import * as React from "react";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | "1em";
};

export const AccountIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0002 2.75C9.65294 2.75 7.75015 4.65279 7.75015 7C7.75015 9.34721 9.65294 11.25 12.0002 11.25C14.3474 11.25 16.2502 9.34721 16.2502 7C16.2502 4.65279 14.3474 2.75 12.0002 2.75ZM6.25015 7C6.25015 3.82436 8.82452 1.25 12.0002 1.25C15.1758 1.25 17.7502 3.82436 17.7502 7C17.7502 10.1756 15.1758 12.75 12.0002 12.75C8.82452 12.75 6.25015 10.1756 6.25015 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.66016 22C2.66016 17.5791 6.99728 14.25 12.0002 14.25C17.003 14.25 21.3401 17.5791 21.3401 22C21.3401 22.4142 21.0044 22.75 20.5901 22.75C20.1759 22.75 19.8401 22.4142 19.8401 22C19.8401 18.6809 16.4773 15.75 12.0002 15.75C7.52303 15.75 4.16016 18.6809 4.16016 22C4.16016 22.4142 3.82437 22.75 3.41016 22.75C2.99594 22.75 2.66016 22.4142 2.66016 22Z"
      fill="currentColor"
    />
  </svg>
);
