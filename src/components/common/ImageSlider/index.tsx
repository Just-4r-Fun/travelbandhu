import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider: React.FC<{images: string[]}> = ({ images }) => {
  return (
    <Carousel infiniteLoop className="w-12/12 h-200">
      {images.map((imageUrl) => {
        return <Image src={imageUrl} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
