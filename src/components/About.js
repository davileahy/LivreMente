import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      as={motion.div}
      className="p-10"
      bg="gray.100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Heading as="h2" size="lg" mb={4} fontWeight="bold">
        Sobre Nós
      </Heading>
      <Text fontSize="lg">
        O Comunicação Sem Fronteiras tem como objetivo facilitar o acesso ao{" "}
        <strong>aprendizado</strong>. Reunindo varias plataformas, recursos e
        cursos de acesso <strong>gratuitos</strong> para impulsionar o seu
        aprendizado. <br />
        <Button as="a" href="/saiba_mais" colorScheme="teal" mt={4}>
          {" "}
          <InfoOutlineIcon mr={2} /> Saiba Mais{" "}
        </Button>
      </Text>
    </Box>
  );
};

export default About;
