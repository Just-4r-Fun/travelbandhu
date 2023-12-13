import Image from "next/image";
import HomePageIllustration from "@/assets/images/HomePageIllustration.png";
import { Text } from "@chakra-ui/react";
import SearchPlaceholder from "@/components/SearchPlaceholder";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Image
          src={HomePageIllustration}
          alt={"HomePage"}
          className="w-full max-h-[320px]"
        />
        <div className="h-full bg-white flex-1 flex items-center flex-col">
          <Text fontSize={"xxx-large"} fontWeight={500} className="mt-4">
            TRAVEL BANDHU
          </Text>
          <Text fontSize={"medium"} fontWeight={500} className="mb-4">
            Turning Travel Dreams into Effortless Realities
          </Text>
          <SearchPlaceholder />
        </div>
      </div>
    </>
  );
}
