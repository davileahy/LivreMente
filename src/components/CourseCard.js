import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Wrap,
  WrapItem,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Animação de entrada dos cards
const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.02, transition: { duration: 0 } },
};

// Animação para o modal
const modalAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const CourseCard = ({ title, logo, description, categories, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as={motion.a}
      onClick={onOpen}
      initial="hidden"
      cursor={"pointer"}
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardAnimation}
      className="p-6 shadow-lg bg-white transition-transform transform hover:scale-105 duration-[0.2s]"
      w="100%"
      maxW={{ base: "100%", md: "700px" }} // Responsivo, se adapta ao tamanho da tela
      borderRadius="20px"
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
          borderRadius="20px"
          overflow="hidden"
          mb={{ base: 4, md: 0 }} // Margem inferior para mobile
        >
          <Image
            src={logo}
            alt="Logo do Curso"
            objectFit="contain"
            borderRadius={"20px"}
          />
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
            noOfLines={8}
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
                colorScheme="purple"
                fontSize={{ base: "xs", md: "sm" }}
              >
                {category}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "sm", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalAnimation}
          transition={{ duration: 0.3 }}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={logo}
              alt={`${title} logo`}
              mb={4}
              borderRadius={"10px"}
              maxW={"auto"}
              height={"150px"}
            />
            <Text mb={4}>{description}</Text>

            {/* Exibição das categorias */}
            <Wrap spacing={2} mb={4}>
              {categories.map((category, index) => (
                <WrapItem key={index}>
                  <Tag colorScheme="purple">{category}</Tag>
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3}>
              {/* Link para o curso */}
              <Link href={link} isExternal fontSize={"lg"}>
                Acessar
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CourseCard;
