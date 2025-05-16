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
              <Text as="a" href="/posts/dicas-de-estudo" color="purple.600">
                Dicas para Melhorar seus Estudos
              </Text>
              <Text as="a" href="/posts/pomodoro" color="purple.600">
                Método Pomodoro: o Guia Completo
              </Text>
              <Text as="a" href="/posts/rotina-estudos" color="purple.600">
                Como Organizar sua Rotina de Estudos
              </Text>
            </VStack>
          </Box>
        </Box>
  )
}

export default PostsSidebar
