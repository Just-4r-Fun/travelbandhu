import { Button } from "@chakra-ui/react";
import React from "react";

function BuddyContainer({ onAddBuddy }: { onAddBuddy: () => void }) {
  return (
    <div className="w-full">
      <div className="flex justify-end">
        <Button
          className="!rounded-[14px] border-2"
          color={"var(--primary-color)"}
          variant={"outline"}
        >
          My Buddy Trips
        </Button>
        <Button
          className="!rounded-[14px] ml-4"
          background={"var(--primary-color)"}
          _hover={{
            background: "var(--primary-color-light)",
          }}
          color={"white"}
        >
          I am looking for travel Buddy
        </Button>
      </div>
    </div>
  );
}

export default BuddyContainer;
