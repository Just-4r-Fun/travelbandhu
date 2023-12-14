import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/constants/common";
import { useRouter } from "next/router";

function TabLists() {
  const router = useRouter();

  const findSelectedIndex = ROUTES.findIndex(({ route }) => {
    return router.asPath === route;
  });

  return (
    <>
      <Tabs isManual variant="soft-rounded" index={findSelectedIndex}>
        <TabList>
          {ROUTES.map(({ route, name }) => {
            return (
              <Tab
                key={`${route}_nav_tabs`}
                color={"white"}
                marginRight={"18px"}
                _selected={{ color: "#223040", bg: "white" }}
              >
                <Link href={route}>{name}</Link>
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </>
  );
}

export default TabLists;
