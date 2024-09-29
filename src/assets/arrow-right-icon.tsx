import * as React from "react";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | "1em";
};

export const ArrowRightIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5662 5.39936C14.8591 5.10646 15.3339 5.10646 15.6268 5.39936L21.6968 11.4694C21.8375 11.61 21.9165 11.8008 21.9165 11.9997C21.9165 12.1986 21.8375 12.3894 21.6968 12.53L15.6268 18.6C15.3339 18.8929 14.8591 18.8929 14.5662 18.6C14.2733 18.3071 14.2733 17.8322 14.5662 17.5394L20.1058 11.9997L14.5662 6.46002C14.2733 6.16712 14.2733 5.69225 14.5662 5.39936Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.4165 11.9997C3.4165 11.5855 3.75229 11.2497 4.1665 11.2497H20.9965C21.4107 11.2497 21.7465 11.5855 21.7465 11.9997C21.7465 12.4139 21.4107 12.7497 20.9965 12.7497H4.1665C3.75229 12.7497 3.4165 12.4139 3.4165 11.9997Z"
      fill="currentColor"
    />
  </svg>
);
