import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Tooltip,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";
import { CloseIcon } from "@chakra-ui/icons";

const LanguageSelectionPage = () => {
  const navigate = useNavigate();

  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const handleLanguageSelect = (language) => {
    navigate(`/pratica_enem/${language}`);
  };

  return (
    <Box bg="#008080" minH="100vh" color="white">
      {isAlertVisible && (
        <Alert status="info" textAlign={"center"} textColor={"darkslategray"}>
          <AlertIcon />
          <AlertTitle> Pratique para o ENEM! </AlertTitle>
          <AlertDescription>
            Teste seu conhecimento com questões diretamente de diferentes
            edições do ENEM aqui. Domine as questões de idiomas.
          </AlertDescription>
          <Button onClick={() => setIsAlertVisible(false)} size={"sm"} ml={5}>
            <CloseIcon />
          </Button>
        </Alert>
      )}
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading mb={2} mt={28} as={"h1"}>
          Prática para o ENEM
        </Heading>
        <Text fontSize={"xl"} mb={3} as={"h2"}>
          Garanta 4 pontos na prova!
        </Text>
        <Text fontSize={"lg"} mb={3} as={"h3"}>
          Selecione o idioma desejado para começar a praticar questões.
        </Text>

        <Button
          onClick={() => handleLanguageSelect("english")}
          colorScheme="purple"
          mb={4}
          size={"lg"}
        >
          Inglês
        </Button>
        <Tooltip label="A prática de questões de espanhol do ENEM ainda está em desenvolvimento! Teremos atualizações em breve!">
          <Button
            onClick={() => handleLanguageSelect("spanish")}
            size={"lg"}
            colorScheme="purple"
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
