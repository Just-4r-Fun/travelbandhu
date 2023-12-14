import React from "react";

function Feed(props: { width?: number; height?: number }) {
  return (
    <svg
      width="78"
      height="71"
      viewBox="0 0 78 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_499)">
        <path
          d="M67.6363 56.9748V15.7984C67.6363 12.5631 64.7726 9.91602 61.2726 9.91602H16.7272C13.2272 9.91602 10.3635 12.5631 10.3635 15.7984V56.9748C10.3635 60.2101 13.2272 62.8572 16.7272 62.8572H61.2726C64.7726 62.8572 67.6363 60.2101 67.6363 56.9748ZM27.8635 40.7984L35.8181 49.6513L46.9544 36.3866L61.2726 54.0337H16.7272L27.8635 40.7984Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_499">
          <rect
            width="76.3636"
            height="70.5882"
            fill="white"
            transform="translate(0.818115 0.0927734)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Feed;
