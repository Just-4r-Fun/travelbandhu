import Image from "next/image";
import HomePageIllustration from "@/assets/images/HomePageIllustration.png";

import { Text } from "@chakra-ui/react";
import SearchPlaceholder from "@/components/SearchPlaceholder";
import HomePageNavTabs from "@/components/HomePageNavTabs.tsx";
import Testinomial from "@/assets/images/testimonial.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Image
          src={HomePageIllustration}
          alt={"HomePage"}
          className="w-full max-h-[40vh]"
        />
        <div className="h-full bg-white flex-1 flex items-center flex-col">
          <Text fontSize={"xxx-large"} fontWeight={500} className="mt-4">
            TRAVEL BANDHU
          </Text>
          <Text fontSize={"medium"} fontWeight={500} className="mb-6">
            Turning Travel Dreams into Effortless Realities
          </Text>
          <SearchPlaceholder />
          <HomePageNavTabs />
          <div className="flex items-center justify-between mt-auto">
            <Image
              src={Testinomial}
              alt="Testinomial"
              width={1100}
              className="mt-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
