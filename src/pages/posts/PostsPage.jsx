import { Box, SimpleGrid, Image, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Nav";

// Mock dos posts — você pode futuramente carregar via API ou contexto
const posts = [
  {
    id: 1,
    title: "Dicas para Melhorar seus Estudos",
    subtitle: "Melhore seus hábitos de estudo com técnicas comprovadas.",
    image: "https://via.placeholder.com/800x400",
    link: "/posts/dicas-de-estudo",
  },
  {
    id: 2,
    title: "Como Organizar sua Rotina de Estudos",
    subtitle: "Aprenda a estruturar seu tempo e manter o foco diariamente.",
    image: "https://via.placeholder.com/800x400",
    link: "/posts/organize-study-routine",
  },
  {
    id: 3,
    title: "Método Pomodoro: O Guia Completo",
    subtitle: "Saiba como utilizar essa técnica para aumentar sua produtividade.",
    image: "https://via.placeholder.com/800x400",
    link: "/posts/pomodoro-technique",
  },
];

const PostsPage = () => {
  return (
    <Box>
      <Navbar />
      <Box maxW="1200px" mx="auto" p={6}>
        <Heading as="h1" size="2xl" color="purple.600" mb={6} textAlign="center">
          📚 Todos os Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {posts.map((post) => (
            <Box
              key={post.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              bg="white"
            >
              <Image src={post.image} alt={post.title} height="200px" width="100%" objectFit="cover" />
              <Box p={4}>
                <Stack spacing={3}>
                  <Heading as="h3" size="md" color="purple.500">
                    {post.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {post.subtitle}
                  </Text>
                  <Button
                    as={Link}
                    to={post.link}
                    colorScheme="purple"
                    variant="solid"
                    size="sm"
                    alignSelf="flex-start"
                  >
                    Ler Post
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PostsPage;
