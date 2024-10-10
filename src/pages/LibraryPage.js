import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

// URL da API e chave sendo acessadas de variáveis de ambiente
const API_URL = process.env.REACT_APP_BOOKS_API_URL; // URL da API no .env
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY; // Chave da API no .env

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os livros da API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY, // Passando a chave da API nos parâmetros
        },
      });
      setBooks(response.data.items); // Assumindo que os livros vêm no campo "items"
      setLoading(false);
    } catch (err) {
      setError("Erro ao carregar os livros");
      setLoading(false);
    }
  };

  // Chama a função de busca quando o componente monta
  useEffect(() => {
    fetchBooks();
  }, []);

  // Retorna enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  // Caso haja erro, exibe uma mensagem de alerta
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Biblioteca de Livros de Ensino de Inglês
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {books.map((book, index) => (
          <GridItem
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            boxShadow="md"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              src={book.volumeInfo.imageLinks?.thumbnail || "/no-image.jpg"}
              alt={book.volumeInfo.title}
              borderRadius="md"
              mb={4}
              w="100%"
              h="300px"
              objectFit="cover"
            />
            <Heading as="h3" size="md" mb={2}>
              {book.volumeInfo.title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {book.volumeInfo.authors?.join(", ")}
            </Text>
            <Text fontSize="sm" mt={2} noOfLines={3}>
              {book.volumeInfo.description || "Sem descrição disponível."}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default LibraryPage;
