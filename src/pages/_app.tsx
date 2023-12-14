import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from "next/font/google";
import { wrapper } from "@/redux/configureStore";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
});
function App({ Component, pageProps, router }: AppProps) {
  const { pathname = "" } = router;

  const isHomePage = pathname === "/";

  return (
    <ChakraProvider>
      <main
        className={`${inter.className} bg-[#223040] flex items-center align-middle w-full justify-center`}
      >
        <div
          className={`w-full ${
            isHomePage ? "" : "max-w-[1224px]"
          } h-screen flex flex-col`}
        >
          {!isHomePage && <Header />}
          <Component router={router} {...pageProps} />
        </div>
      </main>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
