import React from "react";

function BaseLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mt-10 h-full flex-1 bg-white rounded-t-3xl flex flex-col p-4 items-center w-full ${className}`}
    >
      {children}
    </div>
  );
}

export default BaseLayout;
