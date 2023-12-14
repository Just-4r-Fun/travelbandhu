import Search from "@/assets/svg/Search";
import React from "react";

function SearchPlaceholder() {
  return (
    <div
      className="p-3 rounded-[28px] border border-gray-400 w-[673px] flex items-center"
      style={{
        borderRadius: "50px",
        border: "1px solid rgba(0, 0, 0, 0.24)",
        background: "#FFF",
        boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Search className={"mr-2"} /> Search
    </div>
  );
}

export default SearchPlaceholder;
