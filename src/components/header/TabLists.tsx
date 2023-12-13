import { Tabs, TabList, Tab } from "@chakra-ui/react";
import React from "react";

function TabLists() {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
      </Tabs>
    </>
  );
}

export default TabLists;
