// TermosDeUso.js
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import HomeButton from '../components/HomeButton';

const TermosDeUso = () => {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <HomeButton />
        <Heading as="h1" size="xl">Termos de Uso</Heading>
        <Text fontSize="md">
          Ao acessar nosso site, você concorda com os Termos de Uso descritos abaixo. Se não concordar, recomendamos que interrompa o uso de nossos serviços.
        </Text>
        <Heading as="h2" size="lg">1. Aceitação dos Termos</Heading>
        <Text fontSize="md">
          Ao acessar e utilizar nossos serviços, você concorda em seguir todas as políticas e termos aqui estabelecidos. Este termo pode ser alterado a qualquer momento, e a continuidade do uso indica a aceitação das mudanças.
        </Text>
        <Heading as="h2" size="lg">2. Responsabilidades do Usuário</Heading>
        <Text fontSize="md">
          Você é responsável por usar o site de maneira adequada, sem violar leis ou regulamentações. Também concorda em respeitar os conteúdos e evitar atos que possam prejudicar a funcionalidade ou segurança do site.
        </Text>
        <Heading as="h2" size="lg">3. Limitação de Responsabilidade</Heading>
        <Text fontSize="md">
          Não somos responsáveis por quaisquer danos diretos ou indiretos resultantes do uso do site. Nosso objetivo é oferecer serviços de qualidade, mas não garantimos que o site estará sempre disponível ou livre de erros.
        </Text>
        <Heading as="h2" size="lg">4. Modificações nos Termos</Heading>
        <Text fontSize="md">
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que revise regularmente para estar ciente de eventuais mudanças que possam impactar o uso de nossos serviços.
        </Text>
      </VStack>
    </Box>
  );
};

export default TermosDeUso;
