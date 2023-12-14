import React from "react";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

function UserAvatar() {
  return (
    <>
      <Wrap>
        <WrapItem className="cursor-pointer">
          <Avatar
            name={"Kola Tioluwani"}
            src="https://bit.ly/tioluwani-kolawole"
            height={8}
            width={8}
          />
        </WrapItem>
      </Wrap>
    </>
  );
}

export default UserAvatar;
