import React from "react";
import GalleryImg from "@/assets/images/GalleryAi.png";
import Image from "next/image";

function Gallery(props: { width?: number; height?: number }) {
  return (
    <Image src={GalleryImg} alt="Gallery" height={60} width={65} {...props} />
  );
}

export default Gallery;
