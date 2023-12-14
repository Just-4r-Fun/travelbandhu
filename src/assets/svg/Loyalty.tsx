import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaMedal } from 'react-icons/fa'; // You can use any other icon from the react-icons library

const LoyaltyIcon: React.FC<{value: number}> = ({ value }) => {
  return (
    <Flex alignItems="center">
      <Icon as={FaMedal} boxSize={6} color="gold" />
      <Text ml={2} fontWeight="bold" fontSize="md" color="white">
        {value}
      </Text>
    </Flex>
  );
};

export default LoyaltyIcon;