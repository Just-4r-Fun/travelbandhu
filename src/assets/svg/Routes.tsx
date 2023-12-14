import React from "react";
import RoutesImg from "@/assets/images/Itinerary.png";
import Image from "next/image";

function Routes(props: { width?: number; height?: number }) {
  return (
    <Image src={RoutesImg} alt="Routes" height={60} width={65} {...props} />
  );
}

export default Routes;
