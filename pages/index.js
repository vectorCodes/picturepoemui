import Header from "../components/header";
import { Box, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import Content from "../components/content";
export default function Home() {
  return (
    <div>
      <Header />
      <Box>
        <HStack spacing={30}>
          <HStack px={32}>
            <Box h="1200px" w="3px" bg="gray.100" position="relative">
              <Box position="absolute">
                <Content />
              </Box>
            </Box>
          </HStack>
          <HStack px={48}>
            <Box h="1200px" w="3px" bg="gray.100"></Box>
          </HStack>
          <HStack px={32}>
            <Box h="1200px" w="3px" bg="gray.100"></Box>
          </HStack>
          <HStack px={32}>
            <Box h="1200px" w="3px" bg="gray.100"></Box>
          </HStack>
          <HStack px={24}>
            <Box h="1200px" w="3px" bg="gray.100"></Box>
          </HStack>
        </HStack>
      </Box>
    </div>
  );
}
