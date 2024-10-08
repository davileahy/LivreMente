import React, { useState } from "react";
import { Box, Flex, Wrap, WrapItem, Tag, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FilterMenu from "../components/FilterMenu";
import MiniCourseCard from "../components/MiniCourseCard";
import coursesData from "../data/coursesData";
import Navbar from "../components/Nav";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import fundo from "../assets/fundo.png";

const ITEMS_PER_PAGE = 12; // 2 rows * 6 columns

const AllCoursesPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Função para manipular as tags selecionadas
  const handleTagChange = (selectedValues) => {
    setSelectedTags(selectedValues);
    setCurrentPage(1); // Resetar para a primeira página ao aplicar filtro
  };

  const clearTags = () => {
    setSelectedTags([]);
    setCurrentPage(1); // Resetar para a primeira página ao limpar o filtro
  };

  // Filtrar cursos com base nas tags selecionadas
  const filteredCourses =
    selectedTags.length > 0
      ? coursesData.filter((course) =>
          selectedTags.every((tag) => course.categories.includes(tag))
        )
      : coursesData;

  // Paginação
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Animação para os cursos ao aparecer
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      h="100vh"
      backgroundColor={'teal'} 
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="hidden"
    >
      <Navbar />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        {/* Componente de filtro */}
        <div className="w-[7vw] p-2">
          <FilterMenu
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
            clearTags={clearTags}
          />
        </div>

        {/* Exibição das tags selecionadas */}
        <Wrap spacing={4} mb={4} mt={5}>
          {selectedTags.map((tag, index) => (
            <WrapItem key={index}>
              <Tag colorScheme="teal">{tag}</Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* Contêiner de cursos com grid e paginação */}
        <Flex justifyContent="center" w="100%" maxW="1200px">
          <Box
            display="grid"
            gridTemplateColumns="repeat(6, 1fr)" // Três colunas
            gridAutoRows="auto"
            overflowX="auto"
            gap={6}
            p={4}
            maxHeight="500px" // Limitar altura a 2 rows
            width="100%"
            borderRadius={30}
          >
            {currentCourses.map((course, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={cardAnimation}
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

        {/* Botões de navegação para as páginas */}
        <Flex mt={10} justifyContent="center" alignItems="center">
          <Button onClick={handlePreviousPage} isDisabled={currentPage === 1}>
            <ArrowBackIcon />
          </Button>
          <Box mx={4}>
            {currentPage} / {totalPages}
          </Box>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AllCoursesPage;
