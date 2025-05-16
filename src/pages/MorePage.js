import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Image,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  BsPalette,
  BsCodeSquare,
  BsLinkedin,
  BsCheck2Circle,
  BsEnvelope,
} from "react-icons/bs";
import { motion } from "framer-motion";

import foto_ilana from "../assets/developers_images/foto_ilana.jpeg";
import foto_davi from "../assets/developers_images/foto_davi.jpeg";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Nav";

const MorePage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        p={8}
        bg="#f9f9f9"
        minH="100vh"
        className="flex justify-center items-center"
        backgroundPosition={"center"}
        backgroundColor={"BFBFBF"}
      >
        <VStack spacing={10} align="start" className="w-full max-w-4xl mx-auto">
          <HomeButton />
          {/* Animação do título */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="2xl"
              color="blue.400"
              textAlign="center"
              className="mt-10"
            >
              Saiba Mais!
            </Heading>
          </motion.div>
          {/* Seção do Projeto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
              <Heading as="h2" size="lg" mb={4} color="#2980B9">
                O Projeto
              </Heading>
              <Text fontSize="lg" color="#34495E">
                O <strong>Livre Mente</strong> surgiu como um projeto de
                extensão da nossa universidade. No entanto, agora é muito mais
                do que isso. <br /> <br />
                Servindo como um hub de plataformas e e-books, o acesso à{" "}
                <strong>educação</strong> e ao <strong>conhecimento</strong>{" "}
                está aqui, livre para todos. <br /> <br />
                Temos como objetivo proporcionar acesso a plataformas gratuitas
                para o aprendizado. Nossa missão é democratizar o
                aprendizado e facilitar a educação de qualidade para todos.
              </Text>
            </Box>
          </motion.div>
          {/* Seção de Objetivos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
              <Heading as="h2" size="lg" mb={4} color="#2980B9">
                Objetivos
              </Heading>
              <Stack spacing={2}>
                <Text fontSize="lg" color="#34495E">
                  <Icon as={BsCheck2Circle} /> Oferecer uma lista de recursos
                  gratuitos para aprendizado.
                </Text>
                <Text fontSize="lg" color="#34495E">
                  <Icon as={BsCheck2Circle} /> Facilitar o acesso a plataformas
                  de ensino interativas.
                </Text>
                <Text fontSize="lg" color="#34495E">
                  <Icon as={BsCheck2Circle} /> Promover a inclusão e a educação
                  de qualidade.
                </Text>
              </Stack>
            </Box>
          </motion.div>
          {/* Seção da Equipe */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
              <Heading as="h2" size="lg" mb={4} color="#2980B9">
                Desenvolvido por:
              </Heading>
              <Stack spacing={4}>
                <Box display="flex" alignItems="center">
                  <Image
                    src={foto_davi}
                    alt="Membro da Equipe"
                    borderRadius="full"
                    boxSize="50px"
                  />
                  <Box ml={4}>
                    <Text fontSize="lg" color="#34495E">
                      <Icon as={BsCodeSquare} mx={1} /> Davi Leahy -
                      Desenvolvimento Web
                    </Text>
                    <Box display="flex" alignItems="center">
                      <Button
                        as={Link}
                        href="https://www.linkedin.com/in/davileahy"
                        mx={1}
                      >
                        <BsLinkedin />
                      </Button>
                      <Button as={Link} href="mailto:davileahy2@gmail.com">
                        <BsEnvelope />
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Image
                    src={foto_ilana}
                    alt="Membro da Equipe"
                    borderRadius="full"
                    boxSize="50px"
                  />
                  <Box ml={4}>
                    <Text fontSize="lg" color="#34495E">
                      <Icon as={BsPalette} mx={1} /> Ilana Andrade - Design
                    </Text>
                    <Box display="flex" alignItems="center">
                      <Button
                        as={Link}
                        href="https://www.linkedin.com/in/ilana-andrade-9a3111331/"
                        mx={1}
                      >
                        <BsLinkedin />
                      </Button>
                      <Button as={Link} href="mailto:">
                        <BsEnvelope />
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Text>
                  Tem alguma dúvida ou pedido? Não hesite em nos contatar!
                </Text>
              </Stack>
            </Box>
            <div className="text-center mt-5">
              <a href="/politica_de_privacidade">Politica de Privacidade</a>
              <br />
              <a href="/termos_de_uso">Termos de Uso</a>
            </div>
          </motion.div>
          {/* Botão de voltar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </VStack>
      </Box>
    </Box>
  );
};

export default MorePage;
