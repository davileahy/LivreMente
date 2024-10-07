import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Animação de entrada dos cards
const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.02, transition: { duration: 0 } },
};

const CourseCard = ({ title, logo, description, categories, link }) => {
  return (
    <Box
      as={motion.a}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardAnimation}
      className="p-6 shadow-lg bg-white transition-transform transform hover:scale-105 duration-[0.5s]"
      w="100%"
      maxW={{ base: "100%", md: "700px" }} // Responsivo, se adapta ao tamanho da tela
      borderRadius="50px"
      overflow="hidden"
      boxShadow="lg"
      p={{ base: 4, md: 6 }} // Padding ajustável para mobile
    >
      <HStack
        spacing={{ base: 4, md: 6 }}
        align="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Logo do curso centralizada à esquerda */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={{ base: "100px", md: "150px" }}
          h={{ base: "100px", md: "150px" }}
          borderRadius="full"
          overflow="hidden"
          mb={{ base: 4, md: 0 }} // Margem inferior para mobile
        >
          <Image src={logo} alt="Logo do Curso" objectFit="contain" />
        </Box>

        {/* Conteúdo do card */}
        <VStack align="start" spacing={3} w="100%">
          <Text
            as="h4"
            fontSize={{ base: "lg", md: "2xl" }} // Tamanho de fonte responsivo
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }} // Centralizado no mobile
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "sm", md: "lg" }} // Fonte menor em dispositivos móveis
            textAlign={{ base: "center", md: "left" }} // Centralizado no mobile
            color="gray.600"
          >
            {description}
          </Text>

          <HStack
            wrap="wrap"
            spacing={2}
            mt={2}
            justify={{ base: "center", md: "start" }}
          >
            {categories.map((category, index) => (
              <Tag
                key={index}
                colorScheme="teal"
                fontSize={{ base: "xs", md: "sm" }}
              >
                {category}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CourseCard;
