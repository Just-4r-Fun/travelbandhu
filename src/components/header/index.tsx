import React from "react";

import { Box, Center, Container, Text } from "@chakra-ui/react";

import Logo from "@/assets/svg/Logo";
import UserAvatar from "./UserAvatar";
import TabLists from "./TabLists";

function Header() {
  return (
    <Container
      width={"100%"}
      display="flex"
      position="absolute"
      top={100}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={"30px"} width={"217px"}>
        <Logo />
        <Text
          css={{
            color: " #FDFDFD",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Krub",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            width: "125px",
          }}
        >
          Travel Bandhu
        </Text>
      </Box>

      <Box display={"flex"} gap={"80px"}>
        <TabLists />
        <UserAvatar />
      </Box>
    </Container>
  );
}

export default Header;
