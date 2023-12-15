import React from "react";

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_145)">
        <path
          d="M25.8333 23.3333H24.5167L24.05 22.8833C25.6833 20.9833 26.6667 18.5167 26.6667 15.8333C26.6667 9.85 21.8167 5 15.8333 5C9.85 5 5 9.85 5 15.8333C5 21.8167 9.85 26.6667 15.8333 26.6667C18.5167 26.6667 20.9833 25.6833 22.8833 24.05L23.3333 24.5167V25.8333L31.6667 34.15L34.15 31.6667L25.8333 23.3333ZM15.8333 23.3333C11.6833 23.3333 8.33333 19.9833 8.33333 15.8333C8.33333 11.6833 11.6833 8.33333 15.8333 8.33333C19.9833 8.33333 23.3333 11.6833 23.3333 15.8333C23.3333 19.9833 19.9833 23.3333 15.8333 23.3333Z"
          fill="#223040"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_145">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Search;
