import React, { useState } from "react";
import { Box, Text, RadioGroup, Radio, Button, VStack } from "@chakra-ui/react";

const QuestionComponent = ({ questionData, onNext }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswer = () => {
        setIsAnswered(true);
        setIsCorrect(selectedOption === questionData.answer);
    };

    return (
        <Box p={6} bg="white" borderRadius="md" boxShadow="lg">
            <Text fontSize="lg" mb={4} fontWeight="bold">{questionData.prompt}</Text>
            {questionData.image && <img src={questionData.image} alt="Question illustration" width="100%" />}
            <RadioGroup onChange={setSelectedOption} value={selectedOption} mb={4}>
                <VStack spacing={3} align="start">
                    {questionData.options.map((option, index) => (
                        <Radio key={index} value={option}>{option}</Radio>
                    ))}
                </VStack>
            </RadioGroup>
            {!isAnswered ? (
                <Button colorScheme="teal" onClick={handleAnswer} isDisabled={!selectedOption}>
                    Enviar Resposta
                </Button>
            ) : (
                <>
                    <Text color={isCorrect ? "green.500" : "red.500"} mt={4}>
                        {isCorrect ? "Resposta Correta!" : `Resposta Incorreta. Correto: ${questionData.answer}`}
                    </Text>
                    <Button mt={4} colorScheme="teal" onClick={onNext}>Próxima Questão</Button>
                </>
            )}
        </Box>
    );
};

export default QuestionComponent;
