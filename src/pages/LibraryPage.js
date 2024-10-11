import React, { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  Text,
  SimpleGrid,
  Button,
  Select,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [maxResults] = useState(9); // Limita 9 livros por página

  const api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  // Função para buscar livros da API com paginação
  const fetchBooks = async (page = 0, searchQuery = "", category = "") => {
    setLoading(true);
    setError("");
    const startIndex = page * maxResults;
    let queryParam = `tag:aprendizado`; // Busca inicial na área de educação

    if (searchQuery) {
      queryParam = `tag:${searchQuery}`;
    }
    if (category) {
      queryParam += `+${category}`;
    }

    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${queryParam}&startIndex=${startIndex}&maxResults=${maxResults}&key=${api_key}`;
      const response = await axios.get(url);

      if (response.data && response.data.items) {
        setBooks(response.data.items);
        setFilteredBooks(response.data.items);
        setTotalItems(response.data.totalItems); // Total de itens para paginação
      } else {
        setError("Nenhum livro encontrado.");
      }
    } catch (err) {
      setError("Erro ao carregar livros: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Chamada inicial para buscar livros
  useEffect(() => {
    fetchBooks();
  }, []);

  // Função para lidar com a busca e filtrar livros
  const handleSearch = () => {
    setCurrentPage(0); // Resetar para a primeira página quando buscar
    fetchBooks(0, query, selectedCategory); // Realizar a busca com os parâmetros atuais
  };

  // Função para mudar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchBooks(newPage, query, selectedCategory);
  };

  // Configurações de responsividade
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box p={5}>
      {/* Barra de busca */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Filtro de categoria */}
      <Select
        placeholder="Selecione uma categoria"
        mt={4}
        onChange={(e) => setSelectedCategory(e.target.value)}
        maxW="300px"
        mx="auto"
      >
        <option value="linguagem">Linguagem</option>
        <option value="ensino">Ensino</option>
        <option value="educacao infantil">Educação Infantil</option>
      </Select>

      {/* Spinner de carregamento */}
      {loading && (
        <Flex justifyContent="center" mt={6}>
          <Spinner size="xl" />
        </Flex>
      )}

      {/* Mensagem de erro */}
      {error && (
        <Text color="red.500" textAlign="center" mt={6}>
          {error}
        </Text>
      )}

      {/* Grid de livros */}
      {!loading && !error && (
        <>
          <SimpleGrid columns={gridColumns} spacing={6} mt={6}>
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                thumbnail={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                description={book.volumeInfo.description}
                infoLink={book.volumeInfo.infoLink}
              />
            ))}
          </SimpleGrid>

          {/* Paginação */}
          <Flex justifyContent="center" mt={6}>
            {currentPage > 0 && (
              <Button onClick={() => handlePageChange(currentPage - 1)} mr={2}>
                <ArrowBackIcon /> {/* Anterior */}
              </Button>
            )}
            {currentPage + 1}
            <Button onClick={() => handlePageChange(currentPage + 1)} ml={2}>
              <ArrowForwardIcon /> {/* Próxima */}
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default LibraryPage;
