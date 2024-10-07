import React, { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Tag,
  Wrap,
  WrapItem,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

const MiniCourseCard = ({ title, logo, description, categories, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Card com a logo */}
      <Box
        as="button"
        onClick={onOpen}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        boxSize="150px" // Mantém o quadrado
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        transition="transform 0.2s ease-in-out"
      >
        <Image src={logo} alt={`${title} logo`} maxH="90%" maxW="90%" />
      </Box>

      {/* Modal com as informações detalhadas */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>{description}</Text>

            {/* Exibição das categorias */}
            <Wrap spacing={2} mb={4}>
              {categories.map((category, index) => (
                <WrapItem key={index}>
                  <Tag colorScheme="teal">{category}</Tag>
                </WrapItem>
              ))}
            </Wrap>

            {/* Link para o curso */}
            <Link href={link} isExternal color="teal.500">
              Acesse o curso
            </Link>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MiniCourseCard;
