import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Cursos = () => {
  return (
    <Box
      as={motion.div}
      className="p-10"
      bg="white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Heading as="h2" size="lg" mb={4} fontWeight="bold">
        Nossos Cursos
      </Heading>
      <Text fontSize="lg">
        Explore diversas plataformas que oferecemos para você aprender inglês de forma gratuita.
      </Text>
    </Box>
  );
};

export default Cursos;
