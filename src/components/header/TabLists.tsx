import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { ROUTES } from "@/constants/common";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/redux/hooks";
import { setCurrentRoute } from "@/redux/manager/currentRoute";
import { useRouter } from "next/router";

function TabLists({ selectedRoute }: any) {
  console.log(" selectedRoute ", selectedRoute);

  const dispatch = useAppDispatch();
  const [tabIndex, setTabIndex] = useState(selectedRoute.index);

  const router = useRouter();
  const currentRoute = router.asPath.split("/")[1];

  console.log(" currentRoute ", currentRoute);
  
  const findSelectedIndex = ROUTES.findIndex((r)=> r === currentRoute);


  console.log(" findSlected Index ", findSelectedIndex);

  return (
    <>
      <Tabs
        isManual
        variant="soft-rounded"
        index={findSelectedIndex}
        onChange={(index) => {
          console.log(" onChagnge the nav tabs  ", index);

          setTabIndex(index);
          dispatch(
            setCurrentRoute({ routeName: ROUTES[tabIndex], index: tabIndex })
          );
        }}
      >
        <TabList>
          {ROUTES.map((route) => {
            return (
              <Tab
                key={`${route}_nav_tabs`}
                color={"white"}
                marginRight={"18px"}
                _selected={{ color: "#223040", bg: "white" }}
              >
                <Link href={`/${route}`}>{route}</Link>
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </>
  );
}

export default TabLists;
