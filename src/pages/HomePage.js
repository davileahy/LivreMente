import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <Text fontSize="3xl" fontWeight="bold" className="text-center text-gray-900">
        Bem-vindo ao Comunicação Sem Fronteiras!
      </Text>
      <Text fontSize="xl" className="text-center mt-4 text-gray-700">
        Plataformas gratuitas para aprender inglês ao seu alcance.
      </Text>
      <Button colorScheme="teal" size="lg" className="mt-6">
        Começar Agora
      </Button>
    </Box>
  );
};

export default HomePage;
