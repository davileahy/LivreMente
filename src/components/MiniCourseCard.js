import React from "react";
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
import { motion } from "framer-motion";

const MiniCourseCard = ({ title, logo, description, categories, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Animação para o modal
  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* Card com a logo */}
      <Box
        as="button"
        onClick={onOpen}
        borderWidth="1px"
        borderRadius={30}
        background={"white"}
        p={3}
        overflow="hidden"
        cursor="pointer"
        boxSize={{ base: "120px", md: "150px" }} // Responsivo
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        transition="transform 0.2s ease-in-out"
      >
        <Image
          src={logo}
          alt={`${title} logo`}
          maxH="90%"
          maxW="90%"
          borderRadius={"20px"}
        />
      </Box>

      {/* Modal com as informações detalhadas */}
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
            <Button colorScheme="blue" mr={3}>
              {/* Link para o curso */}
              <Link href={link} isExternal fontSize={"lg"}>
                Acessar
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MiniCourseCard;
