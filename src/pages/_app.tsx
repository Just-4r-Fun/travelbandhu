import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
});
export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname = "" } = router;

  return (
    <ChakraProvider>
      <main
        className={`${inter.className} bg-[rgb(52,53,65)] flex items-center align-middle w-full justify-center`}
      >
        <div className="max-w-[1224px] w-full">
          {pathname !== "/" && <Header />}
          <Component router={router} {...pageProps} />
        </div>
      </main>
    </ChakraProvider>
  );
}
