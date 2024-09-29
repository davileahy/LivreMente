import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      as={motion.div}
      className="p-10"
      bg="gray.100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
        
      <Heading as="h2" size="lg" mb={4} fontWeight="bold">
        Sobre Nós
      </Heading>
      <Text fontSize="lg">
        O Comunicação Sem Fronteiras oferece acesso gratuito a plataformas de aprendizado de inglês, visando a inclusão e facilidade de acesso para todos.
      </Text>
    </Box>
  );
};

export default About;
