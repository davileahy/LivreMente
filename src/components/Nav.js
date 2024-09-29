import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <Box as="nav" bg="white" py={4} px={8} className="fixed w-full z-10">
      <Flex justify="space-between" align="center">
        <Box color="#0D415D" fontWeight="bold" fontSize="xl">
          Comunicação Sem Fronteiras
        </Box>
        <Flex gap={4}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <Button variant="link" color="#0D415D">
              Home
            </Button>
          </ScrollLink>
          <ScrollLink to="sobre" smooth={true} duration={500} offset={-70}>
            <Button variant="link" color="#0D415D">
              Sobre
            </Button>
          </ScrollLink>
          <ScrollLink to="cursos" smooth={true} duration={500} offset={-70}>
            <Button variant="link" color="#0D415D">
              Cursos
            </Button>
          </ScrollLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
