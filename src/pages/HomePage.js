import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logomarca.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <motion.img 
          src={logo} 
          alt='logo comunicação sem fronteiras' 
          className='w-[700px] h-auto'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <Text fontSize="3xl" fontWeight="bold" className="text-center text-gray-900">
          Bem-vindo!
        </Text>
        <Text fontSize="xl" className="text-center mt-4 text-gray-700">
          Plataformas gratuitas para aprender inglês ao seu alcance.
        </Text>
        <Button 
          colorScheme="teal" 
          size="lg" 
          className="mt-6"
          onClick={() => navigate('/inicio')}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Começar Agora
        </Button>
      </Box>
    </motion.div>
  );
};

export default HomePage;
