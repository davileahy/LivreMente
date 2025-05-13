import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from 'react'

const PostsSidebar = () => {
  return (
        <Box flex="1" display={{ base: "none", md: "block" }}>
          <Box bg="white" p={4} borderRadius="md" shadow="md">
            <Heading as="h3" size="md" mb={4} color="purple.500">
              Veja Também
            </Heading>
            <VStack spacing={4} align="start">
              <Text as="a" href="/posts/time-management" color="purple.600">
                post 1
              </Text>
              <Text as="a" href="/posts/motivation" color="purple.600">
                post 2
              </Text>
            </VStack>
          </Box>
        </Box>
  )
}

export default PostsSidebar
