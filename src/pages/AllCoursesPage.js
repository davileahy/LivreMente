import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Tag,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import FilterMenu from "../components/FilterMenu";
import MiniCourseCard from "../components/MiniCourseCard";
import coursesData from "../data/coursesData";
import Navbar from "../components/Nav";
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
// import fundo from "../assets/fundo.png";

const ITEMS_PER_PAGE = 12; // 2 rows * 6 columns

const AllCoursesPage = () => {
  // Estado para verificar se o alert é visivel
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // useEffect para verificar o tamanho da tela do usuário e exibir um alerta.
  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Defina o tamanho mínimo desejado
      const minWidth = 768; // por exemplo, 768px
      const minHeight = 600; // por exemplo, 600px

      if (screenWidth < minWidth || screenHeight < minHeight) {
        setIsAlertVisible(true);
      } else {
        setIsAlertVisible(false);
      }
    };

    checkScreenSize();

    // Adiciona um listener para mudanças de tamanho da tela
    window.addEventListener("resize", checkScreenSize);

    // Limpeza do listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
      backgroundColor={"purple.700"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="hidden"
    >
      {isAlertVisible && (
        <Alert status="info">
          <AlertIcon />
          <AlertTitle>Sua tela é pequena!</AlertTitle>
          <AlertDescription>
            Tente rolar para o lado para ver todos os cursos 😉
          </AlertDescription>
          <Button
            variant={"ghost"}
            size={"sm"}
            p={2}
            m={2}
            onClick={() => setIsAlertVisible(false)}
          >
            <CloseIcon />
          </Button>
        </Alert>
      )}

      <Navbar />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        {/* Componente de filtro */}
        <div>
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
              <Tag colorScheme="purple">{tag}</Tag>
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
          <Box mx={4} color={"white"} fontWeight={"bold"}>
            {currentPage} / {totalPages}
          </Box>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>
        <div className="text-center mt-5">
          <a href="/politica_de_privacidade">Politica de Privacidade</a>
          <br />
          <a href="/termos_de_uso">Termos de Uso</a>
        </div>
      </Flex>
    </Box>
  );
};

export default AllCoursesPage;
