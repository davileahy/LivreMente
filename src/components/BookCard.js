import React from "react";
import { Box, Image, Text, Heading, Tag, Wrap, WrapItem } from "@chakra-ui/react";

const BookCard = ({ title, authors, thumbnail, description }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="transform 0.2s ease-in-out"
    >
      {/* Imagem do livro */}
      <Box display="flex" justifyContent="center">
        <Image
          src={thumbnail}
          alt={title}
          maxH="200px"
          objectFit="cover"
          mb={4}
        />
      </Box>

      {/* Título do livro */}
      <Heading as="h4" size="md" mb={2} textAlign="center">
        {title}
      </Heading>

      {/* Autores */}
      {authors && (
        <Wrap justify="center" mb={4}>
          {authors.map((author, index) => (
            <WrapItem key={index}>
              <Tag colorScheme="teal">{author}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      )}

      {/* Descrição */}
      <Text noOfLines={3} textAlign="center">
        {description ? description : "Sem descrição disponível."}
      </Text>
    </Box>
  );
};

export default BookCard;
