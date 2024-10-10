import React from "react";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <InputGroup mb={4}>
      <InputLeftElement children={<SearchIcon color="gray.300" />} />
      <Input
        placeholder="Pesquisar livros"
        value={query}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick} ml={2}>Buscar</Button>
    </InputGroup>
  );
};

export default SearchBar;
