import Image from "next/image";
import React from "react";
import VlogsImg from "@/assets/images/VlogsImg.png";

function Vlogs(props: { width?: number; height?: number }) {
  return <Image src={VlogsImg} alt="Vlog" height={60} width={65} {...props} />;
}

export default Vlogs;
