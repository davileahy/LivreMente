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
      transition={{ duration: 1 }}
    >
      <Box className="flex flex-col items-center justify-center h-screen p-4 overflow-y-hidden">
        <motion.img 
          src={logo} 
          alt='logo comunicação sem fronteiras' 
          className='w-[500px] h-auto'
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 0.8 }}
        />
        <Text fontSize="3xl" fontWeight="bold" className="text-center text-gray-900">
          Bem-vindo!
        </Text>
        <Text fontSize="xl" className="text-center mt-4 text-gray-700">
          Entre e descubra cursos de graça para o seu aprendizado de idiomas!
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
