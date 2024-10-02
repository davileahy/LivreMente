import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import small_logo from '../assets/favicon.png'

const Navbar = () => {
  return (
    <Box as="nav" bg="white" py={8} px={10} className="fixed w-full z-10">
      <Flex justify="space-between" align="center" >
        <ScrollLink to="inicio" smooth={true} duration={500} offset={-70}>
          <img src={small_logo} alt='logo' className='h-auto max-w-16 hover:scale-125 duration-[0.5s] hover:cursor-pointer'/>
        </ScrollLink>

        <Flex gap={10}>
          <ScrollLink to="sobre" smooth={true} duration={500} offset={-70}>
            <Button variant="link" color="#0D415D" size='lg' className='hover:scale-125 duration-[0.5s]'>
              Sobre
            </Button>
          </ScrollLink>
          <ScrollLink to="cursos" smooth={true} duration={500} offset={-70}>
            <Button variant="link" color="#0D415D" size='lg' className='hover:scale-125 duration-[0.5s]'>
              Cursos
            </Button>
          </ScrollLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
