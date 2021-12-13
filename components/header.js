import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  HStack,
  Divider,
  VStack,
} from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <Box px={16} py={6}>
        <SimpleGrid columns={2} spacing={40}>
          <Box>
            <Text textColor="black" fontSize="3xl" fontWeight="bold">
              Vexhibition
            </Text>
          </Box>
          <Box>
            <HStack
              mt={4}
              textColor="gray.500"
              px={24}
              spacing={10}
              cursor="pointer"
            >
              <Text>Home</Text>
              <Text>Portfolio</Text>
              <Text>Gallery</Text>
              <Text>About us</Text>
              <Text>Contact us</Text>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
      <Divider mt={1} />
    </Box>
  );
}

export default Header;
