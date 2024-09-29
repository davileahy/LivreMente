import React from 'react';
import { Box, Heading, Img } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Courses from '../components/Courses';
import Navbar from '../components/Nav';
import logo_branca from '../assets/logo-branca.png';

const MainPage = () => {
  return (
    <Box>
        <Navbar/>
        <Box 
            as={motion.section} 
            id="home"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="p-10 bg-[#06524B]"
        >

            <Heading 
            as="h1" 
            size="2xl" 
            textAlign="center" 
            fontWeight="bold" 
            className="text-4xl"
            >
            <img src={logo_branca} alt='logo comunicação sem fronteiras' className='text-center'/>
            </Heading>

        </Box>

        <Box as="section" id="sobre">
            <About />
        </Box>

        <Box as="section" id="cursos">
            <Courses />
        </Box>
    </Box>
  );
};

export default MainPage;
