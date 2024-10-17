import React from "react";
import {
  CheckboxGroup,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { DeleteIcon } from "@chakra-ui/icons";

// Componente reutilizável para o menu de filtros
const FilterMenu = ({ selectedTags, handleTagChange, clearTags }) => {
  const handleMenuItemClick = (value) => {
    // Toggla a tag quando o MenuItem é clicado
    handleTagChange(
      selectedTags.includes(value)
        ? selectedTags.filter((tag) => tag !== value) // Remove se já estiver selecionada
        : [...selectedTags, value] // Adiciona se não estiver selecionada
    );
  };

  return (
    <Menu closeOnSelect={false} textAlign={"center"}>
      <MenuButton
        as={Button}
        aria-label="Filtros"
        size="lg"
        w="100%"
        color={"white"}
        borderRadius={"50px"}
        className="z-9"
        textAlign={"center"}
        backgroundColor={"whitesmoke"}
      >
        <Icon as={BsFilter} color={"#0F5A4E"} boxSize={8} />
      </MenuButton>

      <MenuList minWidth="240px" maxHeight="300px" overflowY="auto">
        {/* Botão para limpar todas as tags */}
        <MenuItem>
          <Button size="sm" onClick={clearTags} w="100%">
            <DeleteIcon />
          </Button>
        </MenuItem>
        <CheckboxGroup value={selectedTags} onChange={handleTagChange}>
          {/* Simplificando com o uso de MenuItem para o clique completo */}
          {[
            "Idiomas",
            "Inglês",
            "Gratuito",
            "Interativo",
            "Iniciantes",
            "Intermediário",
            "Certificado",
            "Gameficado",
            "E-Books",
            "Flashcards",
            "Repetição Espaçada",
            "Vídeos",
            "Conversação",
            "Gramática",
            "Vocabulário",
            "Pronúncia",
            "Educação",
            "Aprendizagem Personalizada",
            "Aprendizagem Visual",
          ].map((tag) => (
            <MenuItem
              key={tag}
              onClick={() => handleMenuItemClick(tag)} // Define o comportamento de toggle no click
            >
              <Checkbox
                isChecked={selectedTags.includes(tag)} // Define se o checkbox está marcado
                pointerEvents="none" // Evita que o checkbox capture o evento diretamente, o clique será no MenuItem
              >
                {tag}
              </Checkbox>
            </MenuItem>
          ))}
        </CheckboxGroup>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
