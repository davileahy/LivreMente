// PoliticaDePrivacidade.js
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import HomeButton from '../components/HomeButton';

const PoliticaDePrivacidade = () => {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <HomeButton />
        <Heading as="h1" size="xl">Política de Privacidade</Heading>
        <Text fontSize="md">
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações. Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
        </Text>
        <Heading as="h2" size="lg">1. Coleta de Informações</Heading>
        <Text fontSize="md">
          Coletamos informações de uso, como páginas visitadas. Esses dados nos ajudam a personalizar sua experiência e aprimorar nossos serviços.
        </Text>
        <Heading as="h2" size="lg">2. Uso das Informações</Heading>
        <Text fontSize="md">
          As informações coletadas são usadas para fornecer e melhorar nossos serviços, garantir segurança e personalizar sua experiência. Seus dados podem ser utilizados para comunicar atualizações ou informações relevantes.
        </Text>
        <Heading as="h2" size="lg">3. Compartilhamento de Informações</Heading>
        <Text fontSize="md">
          Não compartilhamos suas informações com terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos. Eventualmente, parceiros confiáveis podem ter acesso para melhorar nossos serviços.
        </Text>
        <Heading as="h2" size="lg">4. Segurança</Heading>
        <Text fontSize="md">
          Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado. No entanto, nenhum sistema é 100% seguro, e recomendamos que tome precauções ao compartilhar dados online.
        </Text>
      </VStack>
    </Box>
  );
};

export default PoliticaDePrivacidade;
