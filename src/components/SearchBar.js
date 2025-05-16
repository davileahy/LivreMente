import React from "react";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <InputGroup mb={4}>
      <InputLeftElement children={<SearchIcon color="#0F5A4E" />} />
      <Input
        backgroundColor={'white'}
        placeholder="Pesquisar livros"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <Button onClick={onSearch} ml={2}>
        <SearchIcon/>
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
