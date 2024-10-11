import React from "react";
import { Input, InputGroup, InputLeftElement, Button, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ query, setQuery, onSearch, selectedCategory, setSelectedCategory }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <InputGroup mb={4}>
      <InputLeftElement children={<SearchIcon color="gray.300" />} />
      <Input
        placeholder="Pesquisar livros"
        value={query}
        onChange={handleInputChange}
      />
      <Select placeholder="Selecionar categoria" onChange={handleCategoryChange} ml={2}>
        <option value="educacao">Educação</option>
        <option value="linguagem">Linguagem</option>
        <option value="ensino">Ensino</option>
        <option value="idiomas">Idiomas</option>
        <option value="cursos">Cursos</option>
      </Select>
      <Button onClick={onSearch} ml={2}>Buscar</Button>
    </InputGroup>
  );
};

export default SearchBar;
