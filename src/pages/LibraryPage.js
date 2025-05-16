import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Spinner,
  Text,
  SimpleGrid,
  Button,
  Select,
  Flex,
  Checkbox,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";

import fundo from "../assets/fundo.png";
import placeholder from "../assets/placeholder.jpg";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Nav";

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [onlyFreeBooks, setOnlyFreeBooks] = useState(true);
  const [onlyPortuguese, setOnlyPortuguese] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [maxResults] = useState(9);

  const api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  const fetchBooks = async (page = 0) => {
    setLoading(true);
    setError("");
    const startIndex = page * maxResults;

    // Montagem dinâmica da query
    let queryParam = query ? `${query}` : "educacao";

    if (selectedCategory) {
      queryParam += `+${selectedCategory}`;
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${queryParam}&startIndex=${startIndex}&maxResults=${maxResults}&key=${api_key}`;

    if (onlyFreeBooks) {
      url += `&filter=free-ebooks`;
    }

    if (onlyPortuguese) {
      url += `&langRestrict=pt`;
    }

    try {
      const response = await axios.get(url);

      if (response.data && response.data.items) {
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems);
      } else {
        setBooks([]);
        setTotalItems(0);
        setError("Nenhum livro encontrado.");
      }
    } catch (err) {
      setError("Erro ao carregar livros: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = () => {
    setCurrentPage(0);
    fetchBooks(0);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchBooks(newPage);
  };

  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box
      backgroundImage={fundo}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="hidden"
    >
      <Navbar />
      <Box
        textAlign="center"
        px={4}
        borderRadius="50px"
        backgroundColor="white"
        boxShadow="lg"
        pb={5}
        mx="auto"
        w="70vw"
        mt={10}
      >
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          📖 Biblioteca
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={2} maxW="800px" mx="auto">
          Bem-vindo à biblioteca de aprendizado gratuito! Explore materiais de
          diversas áreas e idiomas, todos de acesso aberto.
        </Text>
      </Box>

      <Box pt={{ base: "80px", md: "100px" }} px={4}>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          mt={4}
          gap={4}
          wrap="wrap"
        >
          <Select
            backgroundColor="white"
            placeholder="Selecione uma categoria"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            maxW="300px"
          >
            <option value="educacao">Educação</option>
            <option value="matematica">Matemática</option>
            <option value="portugues">Português</option>
            <option value="historia">História</option>
            <option value="ciencias">Ciências</option>
            <option value="literatura">Literatura</option>
            <option value="filosofia">Filosofia</option>
            <option value="programacao">Programação</option>
            <option value="ensino infantil">Ensino Infantil</option>
            <option value="idiomas">Idiomas</option>
            <option value="biologia">Biologia</option>
            <option value="engenharia">Engenharia</option>
            <option value="medicina">Medicina</option>
            <option value="administração">Administração</option>
          </Select>

          <VStack align="start">
            <Checkbox
              isChecked={onlyFreeBooks}
              onChange={(e) => setOnlyFreeBooks(e.target.checked)}
              colorScheme="green"
            >
              Apenas livros gratuitos
            </Checkbox>

            <Checkbox
              isChecked={onlyPortuguese}
              onChange={(e) => setOnlyPortuguese(e.target.checked)}
              colorScheme="green"
            >
              Apenas em português
            </Checkbox>
          </VStack>

          <Button colorScheme="blue" onClick={handleSearch}>
            Buscar 
          </Button>
        </Flex>

        {loading && (
          <Flex justify="center" mt={6} minH="60vh">
            <Spinner size="xl" />
          </Flex>
        )}

        {error && (
          <Text color="red.500" textAlign="center" mt={6}>
            {error}
          </Text>
        )}

        {!loading && !error && (
          <>
            <Text textAlign="center" mt={6} fontWeight="bold">
              {totalItems} resultados encontrados
            </Text>

            <SimpleGrid columns={gridColumns} spacing={6} mt={6}>
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  thumbnail={
                    book.volumeInfo.imageLinks?.thumbnail || placeholder
                  }
                  description={book.volumeInfo.description}
                  infoLink={book.volumeInfo.infoLink}
                />
              ))}
            </SimpleGrid>

            {/* Paginação */}
            <Flex justify="center" mt={6} mb={6} gap={4}>
              {currentPage > 0 && (
                <Button onClick={() => handlePageChange(currentPage - 1)}>
                  <ArrowBackIcon />
                </Button>
              )}
              <Text mt={2} fontWeight="bold">
                Página {currentPage + 1}
              </Text>
              {books.length >= maxResults && (
                <Button onClick={() => handlePageChange(currentPage + 1)}>
                  <ArrowForwardIcon />
                </Button>
              )}
            </Flex>
          </>
        )}
      </Box>

      <Box textAlign="center" mt={5} color="white">
        <a href="/politica_de_privacidade">Política de Privacidade</a>
        <br />
        <a href="/termos_de_uso">Termos de Uso</a>
      </Box>
    </Box>
  );
};

export default LibraryPage;
