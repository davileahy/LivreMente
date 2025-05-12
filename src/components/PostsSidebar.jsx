import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from 'react'

const PostsSidebar = () => {
  return (
        <Box flex="1" display={{ base: "none", md: "block" }}>
          <Box bg="white" p={4} borderRadius="md" shadow="md">
            <Heading as="h3" size="md" mb={4} color="teal.500">
              Related Posts
            </Heading>
            <VStack spacing={4} align="start">
              <Text as="a" href="/posts/time-management" color="teal.600">
                Time Management for Students
              </Text>
              <Text as="a" href="/posts/motivation" color="teal.600">
                Staying Motivated While Studying
              </Text>
            </VStack>
          </Box>
        </Box>
  )
}

export default PostsSidebar
