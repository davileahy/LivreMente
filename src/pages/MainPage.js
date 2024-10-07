import React from "react";
import { Box, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";
import About from "../components/About";
import Courses from "../components/Courses";
import Navbar from "../components/Nav";
import logo_branca from "../assets/logo-branca.png";

const MainPage = () => {
  return (
    <Box>
      <Navbar />

      {/* Seção de Início */}
      <Box
        as={motion.section}
        id="inicio"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-[#06524B] flex flex-col items-center justify-center"
      >
        {/* Logo Responsivo */}
        <Img
          src={logo_branca}
          alt="logo comunicação sem fronteiras"
          className="mt-20"
          maxW={{ base: "80%", sm: "60%", md: "40%", lg: "30%" }} // Ajuste dinâmico de tamanho
          mx="auto"
        />
      </Box>

      {/* Seção Sobre */}
      <Box as="section" id="sobre" className="py-10 px-4 sm:px-8 lg:px-20">
        <About />
      </Box>

      {/* Seção de Cursos */}
      <Box
        as="section"
        id="cursos"
        className="py-10 px-4 sm:px-8 lg:px-20 bg-gray-50"
      >
        <Courses />
      </Box>
    </Box>
  );
};

export default MainPage;
