import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import not_found_image from "../assets/imgs/not_found.png"; // Imagem de erro 404

const NotFoundPage = () => {
  return (
    <Center minH="100vh" bgGradient="linear(to-br, gray.900, gray.800)" px={4}>
      <VStack spacing={8} textAlign="center">
        <Image
        borderRadius={50}
          src={not_found_image}
          alt="Página não encontrada"
          maxW="400px"
        />
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          color="whiteAlpha.900"
        >
          404 - Página Não Encontrada 🫠
        </Heading>
        <Text fontSize="lg" color="whitesmoke">
          Ops! A página que você está procurando não foi encontrada.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          leftIcon={<FaArrowLeft />}
          colorScheme="purple"
          size="lg"
          _hover={{ bg: "purple.600" }}
        >
          Voltar para a Home
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFoundPage;
