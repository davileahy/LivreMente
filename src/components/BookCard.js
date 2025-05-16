import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Link,
} from "@chakra-ui/react";

const BookCard = ({ title, authors, thumbnail, description, infoLink }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={4}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
        transition="transform 0.2s ease-in-out"
        onClick={onOpen}
        backgroundColor={"white"}
      >
        <Box display="flex" justifyContent="center">
          <Image
            src={thumbnail}
            alt={title}
            maxH="200px"
            objectFit="cover"
            mb={4}
          />
        </Box>

        <Heading as="h4" size="md" mb={2} textAlign="center">
          {title}
        </Heading>

        {authors && (
          <Wrap justify="center" mb={4}>
            {authors.map((author, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="purple">{author}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}

        <Text noOfLines={3} textAlign="center">
          {description ? description : "Sem descrição disponível."}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <Image
              src={thumbnail}
              alt={title}
              maxH="300px"
              objectFit="cover"
              mb={4}
            />
            <Text mb={4}>
              {description ? description : "Sem descrição disponível."}
            </Text>

            <Wrap>
              {authors &&
                authors.map((author, index) => (
                  <WrapItem key={index}>
                    <Tag colorScheme="purple" mr={2}>
                      {author}
                    </Tag>
                  </WrapItem>
                ))}
            </Wrap>
          </ModalBody>
          <ModalFooter>
            <Link
              href={infoLink}
              variant={""}
              isExternal
              color="purple.500"
              mr={3}
            >
              Acessar Livro
            </Link>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookCard;
