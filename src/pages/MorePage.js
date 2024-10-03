import React from 'react';
import { Box, Heading, Text, VStack, Stack, Image, Button, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {ArrowBackIcon, } from '@chakra-ui/icons'
import { BsPalette, BsCodeSquare, BsLinkedin  } from "react-icons/bs";

const MorePage = () => {

    const navigate = useNavigate();

    return (
        <Box p={8} bg="#f9f9f9" minH="100vh" textAlign={'center'}>
        <VStack spacing={10} align="start">
            <Button colorScheme='teal' variant={'outline'} position={'fixed'} alignSelf={'end'} onClick={() => navigate('/inicio')}> <ArrowBackIcon></ArrowBackIcon> </Button>
            <Heading as="h1" size="2xl" color="#2C3E50" textAlign="center" mt={20}>
            Saiba Mais!
            </Heading>
            
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
            <Heading as="h2" size="lg" mb={4} color="#2980B9">O Projeto</Heading>
            <Text fontSize="lg" color="#34495E">
                O <strong>Comunicação Sem Fronteiras</strong> surgiu como um projeto de extensão da nossa universidade. No entanto, agora é muito mais do que isso. <br /> 
                Servindo como um hub de plataformas e e-books, o acesso á <strong>educação</strong> e o <strong>conhecimento</strong> está aqui, livre para todos. <br />
                Temos como objetivo proporcionar acesso a plataformas gratuitas para o aprendizado. Nossa missão é democratizar o aprendizado e facilitar a educação de qualidade para todos.
            </Text>
            </Box>

            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
            <Heading as="h2" size="lg" mb={4} color="#2980B9">Objetivos</Heading>
            <Stack spacing={2}>
                <Text fontSize="lg" color="#34495E">• Oferecer uma lista de recursos gratuitos para aprendizado.</Text>
                <Text fontSize="lg" color="#34495E">• Facilitar o acesso a plataformas de ensino interativas.</Text>
                <Text fontSize="lg" color="#34495E">• Promover a inclusão e a educação de qualidade.</Text>
            </Stack>
            </Box>

            <Box bg="white" p={6} borderRadius="md" boxShadow="lg">
            <Heading as="h2" size="lg" mb={4} color="#2980B9">Desenvolvido por:</Heading>
            <Stack spacing={4}>
                <Box display="flex" alignItems="center">
                <Text fontSize="lg" color="#34495E" ml={4}><Icon as={BsCodeSquare}></Icon> Davi Leahy - Desenvolvimento Web <Button as={'a'} href='https://www.linkedin.com/in/davileahy'><BsLinkedin/></Button> </Text>
                </Box>
                <Box display="flex" alignItems="center">
                <Text fontSize="lg" color="#34495E" ml={4}><Icon as={BsPalette}></Icon> Ilana Andrade - Design <Button as={'a'} href='https://www.linkedin.com/in/ilana-andrade-9a3111331/'><BsLinkedin/></Button> </Text>
                </Box>
            </Stack>
            </Box>

            <Box display="flex" justifyContent="center" mt={8}>
            <Button colorScheme="teal" size="lg" onClick={() => navigate('/inicio')} alignSelf={'center'}> <ArrowBackIcon /> Voltar para a página inicial</Button>
            </Box>
        </VStack>
        </Box>
  );
};

export default MorePage;
