import React, { useState } from "react";
import { Box, Flex, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FilterMenu from "../components/FilterMenu";
import MiniCourseCard from "../components/MiniCourseCard";
import coursesData from "../data/coursesData";
import Navbar from "../components/Nav";

const AllCoursesPage = () => {
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
      : coursesData;

  // Animação para os cursos ao aparecer
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box h="100vh">
      <Navbar />
      <Flex direction="column" justifyContent="center" alignItems="center" h="100%">
        {/* Componente de filtro */}
        <FilterMenu
          selectedTags={selectedTags}
          handleTagChange={handleTagChange}
          clearTags={clearTags}
        />

        {/* Exibição das tags selecionadas */}
        <Wrap spacing={4} mb={4} mt={5}>
          {selectedTags.map((tag, index) => (
            <WrapItem key={index}>
              <Tag colorScheme="teal">{tag}</Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* Contêiner de cursos com scroll horizontal */}
        <Flex justifyContent="center" mt={6} w="100%" maxW="1200px">
          <Box
            display="inline-flex"
            overflowX="auto"
            p={4}
            whiteSpace="nowrap"
            justifyContent="center"
            w="100%"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={cardAnimation}
                style={{ margin: '0 12px' }}
              >
                <MiniCourseCard
                  title={course.title}
                  logo={course.logo}
                  description={course.description}
                  categories={course.categories}
                  link={course.link}
                />
              </motion.div>
            ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AllCoursesPage;
