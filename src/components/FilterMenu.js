import React, { useMemo } from "react";
import {
  CheckboxGroup,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { DeleteIcon } from "@chakra-ui/icons";
import { getAllCategories } from "../data/coursesData";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const FilterMenu = ({ selectedTags, handleTagChange, clearTags }) => {
  const handleMenuItemClick = (value) => {
    handleTagChange(
      selectedTags.includes(value)
        ? selectedTags.filter((tag) => tag !== value)
        : [...selectedTags, value]
    );
  };

  const categories = useMemo(() => getAllCategories(), []);

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
        backgroundColor={"purple.300"}
      >
        <Icon as={BsFilter} color={"#0F5A4E"} boxSize={8} />
      </MenuButton>

      <MenuList minWidth="320px" maxHeight="300px" overflowY="auto">
        <MenuItem>
          <Button size="sm" onClick={clearTags} w="100%">
            <DeleteIcon />
          </Button>
        </MenuItem>
        <Box px={2} py={1}>
          <CheckboxGroup value={selectedTags} onChange={handleTagChange}>
            <SimpleGrid columns={2} spacing={1}>
              {categories.map((tag) => (
                <Box key={tag}>
                  <Checkbox
                    isChecked={selectedTags.includes(tag)}
                    onChange={() => handleMenuItemClick(tag)}
                    width="100%"
                  >
                    {capitalize(tag)}
                  </Checkbox>
                </Box>
              ))}
            </SimpleGrid>
          </CheckboxGroup>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;