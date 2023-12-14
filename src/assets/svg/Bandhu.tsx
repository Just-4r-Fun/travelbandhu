import React from "react";
import Image from "next/image";
import BandhuImg from "@/assets/images/Communicate.png";

function Bandhu(props: { width?: number; height?: number }) {
  return (
    <Image src={BandhuImg} alt="Bandhu" width={60} height={60} {...props} />
  );
}

export default Bandhu;
