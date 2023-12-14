import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

interface IOwnProps {
    rating:  number;
    setRating?: (rating: number) =>  void;
    count?: number;
    size?: number
}

const StarRating: React.FC<IOwnProps> = ({ rating, setRating, count, size }) => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating && setRating(ratingValue)}
          >
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              transition="color 200ms"
            />
          </Box>
        );
      })}
    </HStack>
  );
}

export default StarRating
