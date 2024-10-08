import React, { useState } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Tag,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CourseCard from "./CourseCard";

import { useNavigate } from "react-router-dom";
import FilterMenu from "./FilterMenu";

// dados dos cursos
import coursesData from "../data/coursesData";

const Courses = () => {
  // navigate
  const navigate = useNavigate();

  // Estado para tags selecionadas
  const [selectedTags, setSelectedTags] = useState([]);

  // Função para manipular as tags selecionadas
  const handleTagChange = (selectedValues) => {
    setSelectedTags(selectedValues);
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  // Filtrar cursos com base nas tags selecionadas
  const filteredCourses =
    selectedTags.length > 0
      ? coursesData.filter((course) =>
          selectedTags.every((tag) => course.categories.includes(tag))
        )
      : coursesData; // Exibe todos os cursos se nenhuma tag estiver selecionada

  return (
    <Box className="p-10 bg-gray-100">
      <Heading as="h2" className="text-center mb-5">
        Cursos
        <Text fontSize="xl" fontWeight="light">
          Nossa seleção de plataformas de cursos para impulsionar o seu
          aprendizado.
        </Text>
        <Button
          variant={"solid"}
          colorScheme="green"
          leftIcon={<AddIcon />}
          mt={2}
          as={"a"}
          onClick={() => navigate("/courses")}
          className="hover:cursor-pointer"
        >
          Ver Todos
        </Button>
        {/* Dropdown de filtros na lateral */}
        <Box w={{ base: "100%", md: "20%" }} mb={{ base: 4, md: 0 }}>
          <FilterMenu
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
            clearTags={clearTags}
          />
        </Box>
        {/* Exibição das tags selecionadas */}
        <Wrap spacing={4} mb={4} mt={5}>
          {selectedTags.map((tag, index) => (
            <WrapItem key={index}>
              <Tag colorScheme="teal">{tag}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Heading>

      {/* Exibição dos cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            logo={course.logo}
            description={course.description}
            categories={course.categories}
            link={course.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Courses;
