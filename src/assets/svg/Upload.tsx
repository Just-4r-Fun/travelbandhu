import React from "react";

function Upload(props: { width?: number; height?: number }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15V19H19V15" stroke="black" stroke-width="1.00088" stroke-linejoin="round"/>
      <path d="M12 15.5V5.00001" stroke="black" stroke-width="1.00088" stroke-linejoin="round"/>
      <path d="M15 13C13.8284 14.1716 13.1716 14.8284 12 16L9 13" stroke="black" stroke-width="1.00088" stroke-linejoin="round"/>
    </svg>
  );
}

export default Upload;
