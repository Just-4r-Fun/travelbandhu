import React from "react";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

function UserAvatar() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar
            name={"Kola Tioluwani"}
            src="https://bit.ly/tioluwani-kolawole"
          />
        </WrapItem>
      </Wrap>
    </>
  );
}

export default UserAvatar;
