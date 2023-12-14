import React from "react";

function Buddy(props: { width?: number; height?: number }) {
  return (
    <svg
      width="72"
      height="70"
      viewBox="0 0 72 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_485)">
        <path
          d="M35.7428 15C39.4353 15 42.4286 12.0899 42.4286 8.5C42.4286 4.91015 39.4353 2 35.7428 2C32.0504 2 29.0571 4.91015 29.0571 8.5C29.0571 12.0899 32.0504 15 35.7428 15Z"
          fill="black"
        />
        <path
          d="M48.7466 21.8575C47.4429 20.59 45.2031 18.25 40.8574 18.25C40.1554 18.25 36.1106 18.25 32.3666 18.25C23.1737 18.2175 15.6857 10.9375 15.6857 2H9C9 12.27 16.0534 20.98 25.7143 23.8075V67H32.4V47.5H39.0857V67H45.7714V28.1625L58.9757 41L63.6891 36.4175L48.7466 21.8575Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_485">
          <rect width="72" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Buddy;
