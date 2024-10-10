import React, { useEffect, useState, useCallback } from "react";
import { Box, Spinner, Text, SimpleGrid } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const api_key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:educacao&key=${api_key}`;

        const response = await axios.get(url);

        // Verifique a resposta da API
        console.log("API Response:", response.data);

        if (response.data && response.data.items) {
          setBooks(response.data.items);
          setFilteredBooks(response.data.items); // Inicialmente, todos os livros estão filtrados
        } else {
          setError("Nenhum livro encontrado.");
        }
      } catch (err) {
        setError("Erro ao carregar livros: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Função para filtrar livros com base na consulta
  const handleSearch = useCallback(() => {
    const lowerCaseQuery = query.toLowerCase();
    const newFilteredBooks = books.filter((book) => {
      const title = book.volumeInfo.title.toLowerCase();
      const description = book.volumeInfo.description
        ? book.volumeInfo.description.toLowerCase()
        : "";
      const categories = book.volumeInfo.categories || [];

      // Verifique os dados de filtragem
      console.log({ title, description, categories });

      const matchesTitle = title.includes(lowerCaseQuery);
      const matchesDescription = description.includes(lowerCaseQuery);
      const matchesCategory = categories.some((category) =>
        category.toLowerCase().includes("educação") ||
        category.toLowerCase().includes("ensino")
      );

      console.log({ matchesTitle, matchesDescription, matchesCategory }); // Para depuração
      return (matchesTitle || matchesDescription) && matchesCategory;
    });

    console.log("Filtered Books:", newFilteredBooks); // Para verificar quais livros estão sendo filtrados
    setFilteredBooks(newFilteredBooks);
  }, [books, query]);

  useEffect(() => {
    handleSearch();
  }, [query, handleSearch]);

  return (
    <Box p={5}>
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        onSearch={handleSearch} 
      />

      {loading && (
        <Box display="flex" justifyContent="center">
          <Spinner size="xl" />
        </Box>
      )}
      {error && (
        <Text color="red.500" textAlign="center" mt={4}>
          {error}
        </Text>
      )}
      {!loading && !error && (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
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
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default LibraryPage;
