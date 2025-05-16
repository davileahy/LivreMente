import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import questions from "../data/questions"; // Importa o conjunto de questões
import HomeButton from "../components/HomeButton";

const PracticePage = () => {
  // Usa o parâmetro de URL para capturar a língua (ex: português ou espanhol)
  const { language } = useParams();

  // Define estados para o índice da questão atual, pontuação, e status de finalização
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Estado que armazena as questões filtradas e randomizadas
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Filtra e randomiza as questões para a língua especificada uma vez, ao montar o componente
  useEffect(() => {
    // Filtra as questões pela categoria da língua e randomiza a ordem
    const filteredQuestions = questions
      .filter((q) => q.category === language) // Seleciona questões da língua especificada
      .sort(() => Math.random() - 0.5) // Embaralha a lista de questões
      .slice(0, 5); // Seleciona apenas 5 questões únicas

    setSelectedQuestions(filteredQuestions); // Define as questões selecionadas no estado
  }, [language]);

  // Monitora o índice atual da questão e o número de questões selecionadas para finalizar o quiz
  useEffect(() => {
    if (
      selectedQuestions.length > 0 &&
      currentQuestionIndex >= selectedQuestions.length
    ) {
      setIsFinished(true); // Marca o quiz como concluído se todas as questões forem respondidas
    }
  }, [currentQuestionIndex, selectedQuestions.length]);

  // Função chamada ao selecionar uma resposta
  const handleAnswer = (userAnswer) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex]; // Pega a questão atual
    if (userAnswer === currentQuestion.answer) {
      // Verifica se a resposta do usuário é correta
      setScore((prevScore) => prevScore + 1); // Atualiza a pontuação
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Passa para a próxima questão
  };

  // Reinicia o quiz, resetando os estados para os valores iniciais
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  const buttonFontSize = useBreakpointValue({ base: "sm", md: "md" });
  const boxWidth = useBreakpointValue({ base: "95%", md: "600px" });

  // Renderiza a tela de resultados se o quiz estiver concluído
  if (isFinished) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        bg="gray.50"
      >
        <HomeButton />
        <Box textAlign="center" bg="white" p={8} rounded="lg" shadow="md">
          <Heading color="purple.500" as={"h1"}>
            Resultado do Teste
          </Heading>
          <Text fontSize="xl" mt={4} as={"h2"}>
            Você acertou {score} de {selectedQuestions.length} questões!
          </Text>
          <Button colorScheme="purple" onClick={restartQuiz} mt={6}>
            Reiniciar
          </Button>
        </Box>
      </Flex>
    );
  }

  // Verifica se há uma questão disponível e mostra a mensagem "Carregando"
  const question = selectedQuestions[currentQuestionIndex];
  if (!question) {
    return (
      <Flex justify="center" align="center" minHeight="100vh">
        <Heading color="gray.500" as={"h1"}>
          Carregando questões...
        </Heading>
      </Flex>
    );
  }

  // Renderiza a questão atual e suas opções de resposta
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      bg="gray.50"
      p={4}
    >
      <HomeButton />
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="md"
        maxWidth={boxWidth}
        w="100%"
      >
        <VStack spacing={6} align="stretch">
          <Heading
            size="lg"
            color="purple.600"
            textAlign="center"
            fontSize={{ base: "lg", md: "xl" }}
          >
            {question.prompt}
          </Heading>
          {question.image && (
            <Image
              src={question.image}
              alt="imagem da questão"
              boxSize={{ base: "250px", md: "300px" }}
              objectFit="cover"
              rounded="md"
            />
          )}
          {question.options.map((option, index) => (
            <Flex key={index} w="100%">
              <Button
                onClick={() => handleAnswer(option)}
                colorScheme="purple"
                variant="outline"
                fontSize={buttonFontSize}
                p={4}
                whiteSpace="normal"
                flex="1"
                textAlign="left"
                size={"lg"}
              >
                {option}
              </Button>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default PracticePage;
