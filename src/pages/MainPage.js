import React from "react";
import { Box, Heading, Img, Button, Highlight } from "@chakra-ui/react";

import { motion } from "framer-motion";
import About from "../components/About";
import Courses from "../components/Courses";
import Navbar from "../components/Nav";
import logo_branca from "../assets/logo-branca.png";
import ChatBotButton from "../components/ChatBotButton";
import Tips from "../components/Tips";

const MainPage = () => {
  return (
    <Box>
      <Navbar />
      <ChatBotButton />

      {/* Seção de Início */}
      <Box
        as={motion.section}
        id="inicio"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-[#BFBFBF] flex flex-col items-center justify-center"
      >
        {/* Logo Responsivo */}
        <Img
          src={logo_branca}
          alt="logo comunicação sem fronteiras"
          maxW={{ base: "80%", sm: "60%", md: "40%", lg: "30%" }} // Ajuste dinâmico de tamanho
          mx="auto"
        />
      </Box>

      <Box
        as="section"
        id="ENEM"
        textAlign={"center"}
        backgroundColor={"whitesmoke"}
        borderRadius={50}
        mt={3}
        mx={5}
        py={3}
        textColor={"darkslategray"}
      >
        <Heading size={"md"} textColor={""} mt={2} as={"h2"}>
          Quer práticar para o{" "}
          <Highlight
            query={"ENEM"}
            styles={{ rounded: "full", bg: "purple.100", px: "2", py: "0" }}
          >
            ENEM
          </Highlight>
          ? <br /> Resolva questões de inglês e espanhol agora!
        </Heading>
        <Button
          as={"a"}
          variant={"outline"}
          colorScheme="purple"
          href="/pratica_enem"
          mt={2}
          size={"sm"}
        >
          ENEM ✍️
        </Button>
      </Box>

      {/* Seção Sobre */}
      <h1 className="text-transparent p-0 m-0 size-0">
        Comunicação Sem Fronteiras
      </h1>
      {/* Seção Posts */}
      <Box as="section" id="posts" className="py-10 px-4 sm:px-8 lg:px-20">
        <Tips />
      </Box>
      {/* Seção de Cursos */}
      <Box
        as="section"
        id="cursos"
        className="py-10 px-4 sm:px-8 lg:px-20 bg-gray-50"
      >
        <Courses />
      </Box>
      <Box as="section" id="sobre" className="py-10 px-4 sm:px-8 lg:px-20">
        <About />
      </Box>
      <div className="text-center mt-5">
        <a href="/politica_de_privacidade">Politica de Privacidade</a>
        <br />
        <a href="/termos_de_uso">Termos de Uso</a>
      </div>
    </Box>
  );
};

export default MainPage;
