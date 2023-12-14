import React from "react";
import BaseLayout from "@/components/BaseLayout";
import SearchPlaceholder from "@/components/SearchPlaceholder";
import { Button } from "@chakra-ui/react";

function Askbandhu() {
  return (
    <BaseLayout className="pt-[48px]">
      <span className="text-3xl font-medium">
        {'"Travel Bandhu: Your Trusted Companion on Every Journey!"'}
      </span>
      <div className="flex mt-10 items-center">
        <SearchPlaceholder />
      </div>
    </BaseLayout>
  );
}

export default Askbandhu;
