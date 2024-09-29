import * as React from "react";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | "1em";
};

export const NoteIcon = ({ size = 24, ...props }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.6599 10.4395L20.6799 14.6195C19.8399 18.2295 18.1799 19.6895 15.0599 19.3895C14.5599 19.3495 14.0199 19.2595 13.4399 19.1195L11.7599 18.7195C7.58994 17.7295 6.29994 15.6695 7.27994 11.4895L8.25994 7.29952C8.45994 6.44952 8.69994 5.70952 8.99994 5.09952C10.1699 2.67952 12.1599 2.02952 15.4999 2.81952L17.1699 3.20952C21.3599 4.18952 22.6399 6.25952 21.6599 10.4395Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0601 19.3896C14.4401 19.8096 13.6601 20.1596 12.7101 20.4696L11.1301 20.9896C7.1601 22.2696 5.0701 21.1996 3.7801 17.2296L2.5001 13.2796C1.2201 9.30961 2.2801 7.20961 6.2501 5.92961L7.8301 5.40961C8.2401 5.27961 8.6301 5.16961 9.0001 5.09961C8.7001 5.70961 8.4601 6.44961 8.2601 7.29961L7.2801 11.4896C6.3001 15.6696 7.5901 17.7296 11.7601 18.7196L13.4401 19.1196C14.0201 19.2596 14.5601 19.3496 15.0601 19.3896Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6399 8.53027L17.4899 9.76027"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6599 12.4004L14.5599 13.1404"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);