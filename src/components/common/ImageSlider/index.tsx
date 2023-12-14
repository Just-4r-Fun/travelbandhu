import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Carousel infiniteLoop className="w-12/12 h-200">
      {images.map((imageUrl, index) => {
        return <Image src={imageUrl} alt="" key={"carousel" + index} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
