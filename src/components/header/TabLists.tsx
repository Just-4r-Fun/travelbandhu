import { Tabs, TabList, Tab } from "@chakra-ui/react";
import React from "react";

function TabLists() {
  return (
    <>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab color={"white"} _selected={{ color: "#223040", bg: "white" }}>
            Tab 1
          </Tab>
          <Tab color={"white"} _selected={{ color: "#223040", bg: "white" }}>
            Tab 2
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}

export default TabLists;
