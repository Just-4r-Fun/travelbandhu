import Image from "next/image";
import { Inter } from "next/font/google";
import HomePageIllustration from "@/assets/images/HomePageIllustration.png";
import Header from "@/components/header/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Image src={HomePageIllustration} alt={"HomePage"} />
        <Header />
      </div>
    </>
  );
}
