// Testimonial.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaRegComments } from 'react-icons/fa';

const Testimonial = ({ message }) => {
  return (
    <Box
      p={4}
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxW="sm"
      zIndex={1}
    >
      <Text fontSize="small" color="gray.800" textAlign="center">
        {message}
      </Text>
    </Box>
  );
};

export default Testimonial;
