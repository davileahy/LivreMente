import { Box, SimpleGrid, Image, Heading, Text, Button, Stack, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Nav";

// Mock dos posts — você pode futuramente carregar via API ou contexto
const posts = [
  {
    id: 1,
    title: "Dicas para Melhorar seus Estudos",
    subtitle: "Melhore seus hábitos de estudo com técnicas comprovadas.",
    image: "https://images.unsplash.com/photo-1551818567-d49550a81408?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/posts/dicas-de-estudo",
  },
  {
    id: 2,
    title: "Como Organizar sua Rotina de Estudos",
    subtitle: "Aprenda a estruturar seu tempo e manter o foco diariamente.",
    image: "https://images.unsplash.com/photo-1622993361017-180360aea82c?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/posts/rotina-estudos",
  },
  {
    id: 3,
    title: "Método Pomodoro: O Guia Completo",
    subtitle: "Saiba como utilizar essa técnica para aumentar sua produtividade.",
    image: "https://images.unsplash.com/photo-1705948735013-14506f08b823?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/posts/pomodoro",
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
      {/* Seção ENEM  */}
      <Box
        as="section"
        id="ENEM"
        textAlign={"center"}
        backgroundColor={"whitesmoke"}
        borderRadius={50}
        mt={3}
        mx={5}
        py={3}
        textColor={"darkslategray"}
        >
        <Heading size={"md"} textColor={""} mt={2} as={"h2"}>
          Quer práticar para o{" "}
          <Highlight
            query={"ENEM"}
            styles={{ rounded: "full", bg: "purple.100", px: "2", py: "0" }}
            >
            ENEM
          </Highlight>
          ? <br /> Resolva questões de inglês e espanhol agora!
        </Heading>
        <Button
          as={"a"}
          variant={"outline"}
          colorScheme="purple"
          href="/pratica_enem"
          mt={2}
          size={"sm"}
          >
          ENEM ✍️
        </Button>
      </Box>
    </Box>
  );
};

export default PostsPage;
