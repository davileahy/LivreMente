import React from "react";
import { Box, Button, Heading, Flex, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";

const LanguageSelectionPage = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    navigate(`/pratica_enem/${language}`);
  };

  return (
    <Box bg="#008080" minH="100vh" color="white">
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading mb={8} mt={28}>Selecione o idioma para praticar</Heading>
        <Button
          onClick={() => handleLanguageSelect("english")}
          colorScheme="teal"
          mb={4}
        >
          Inglês
        </Button>
        <Tooltip label="A prática de questões de espanhol do ENEM ainda está em desenvolvimento! Teremos atualizações em breve!">
          <Button
            onClick={() => handleLanguageSelect("spanish")}
            colorScheme="teal"
            isDisabled
          >
            Espanhol
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default LanguageSelectionPage;
