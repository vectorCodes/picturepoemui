import React from "react";
import { Box, Text, SimpleGrid, HStack, VStack } from "@chakra-ui/react";
function Content() {
  return (
    <Box py={14}>
      <SimpleGrid columns={2} w="8xl" spacing={40}>
        <Box>
          <Text textColor="black" fontSize="6xl" fontWeight="bold">
            A Picture Is A Poem Without Words -Horace
          </Text>
        </Box>
        <Box>
          <HStack>
            <VStack px={36} pb={8}>
              <Text textColor="black" fontSize="4xl" fontWeight="bold">
                Partnership
              </Text>
              <Text textColor="gray.500">Get in touch with us</Text>
            </VStack>
            <VStack textColor="gray.500" py={6} spacing={4}>
              <Text>Email us</Text>
              <Text>Instagram</Text>
              <Text>Twitter</Text>
            </VStack>
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Content;
