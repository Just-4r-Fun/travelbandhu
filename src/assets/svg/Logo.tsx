import * as React from "react";
const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={61}
    height={80}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h61v80H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.01205 0 0 .00919 0 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={83}
        height={109}
      />
    </defs>
  </svg>
);
export default Logo;
