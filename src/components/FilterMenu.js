import React from "react";
import {
  CheckboxGroup,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";

// Componente reutilizável para o menu de filtros
const FilterMenu = ({ selectedTags, handleTagChange, clearTags }) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        aria-label="Filtros"
        size="sm"
        w="100%"
        colorScheme="teal"
      >
        <SearchIcon />
      </MenuButton>

      <MenuList minWidth="240px">
        <CheckboxGroup value={selectedTags} onChange={handleTagChange}>
          <MenuItem closeOnSelect={false}>
            <Checkbox value="Inglês">Inglês</Checkbox>
          </MenuItem>
          <MenuItem closeOnSelect={false}>
            <Checkbox value="Iniciantes">Iniciantes</Checkbox>
          </MenuItem>
          <MenuItem closeOnSelect={false}>
            <Checkbox value="Certificado">Certificado</Checkbox>
          </MenuItem>
          <MenuItem closeOnSelect={false}>
            <Checkbox value="Intermediário">Intermediário</Checkbox>
          </MenuItem>
          <MenuItem closeOnSelect={false}>
            <Checkbox value="Gratuito">Gratuito</Checkbox>
          </MenuItem>
        </CheckboxGroup>

        {/* Botão para limpar todas as tags */}
        <MenuItem>
          <Button size="sm" onClick={clearTags} w="100%">
            <DeleteIcon />
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
