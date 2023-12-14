import Search from "@/assets/svg/Search";
import { handleAskBundhuSearchSubmit } from "@/utils";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hooks";
import { setTripPlanDetails } from "@/redux/manager/tripPlan";

function SearchPlaceholder({ text = "Ask Bandhu" }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAskBundhuSearchSubmit(searchValue);
      dispatch(
        setTripPlanDetails({
          tripDescription: searchValue,
        })
      );

      router.push("/ask-bandhu");
    }
  };
  return (
    <div className="flex items-center">
      <div
        className="px-3 py-2 rounded-[28px] border border-gray-400 w-[673px] flex items-center"
        style={{
          borderRadius: "50px",
          border: "1px solid rgba(0, 0, 0, 0.24)",
          background: "#FFF",
          boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Search className={"mr-2"} />{" "}
        <input
          placeholder={text}
          className="w-full outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Button
        className="ml-4 !rounded-[14px]"
        background={"var(--primary-color)"}
        _hover={{
          background: "var(--primary-color-light)",
        }}
        color={"white"}
        onClick={() => {
          handleAskBundhuSearchSubmit(searchValue);
          router.push("/ask-bandhu");
          dispatch(
            setTripPlanDetails({
              tripDescription: searchValue,
            })
          );
        }}
      >
        Ask Bandhu
      </Button>
    </div>
  );
}

export default SearchPlaceholder;
