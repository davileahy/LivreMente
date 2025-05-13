import React from "react";
import { Box, Button, Heading, Text, Highlight } from "@chakra-ui/react";
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
      borderRadius={50}
    >
      <Heading as="h2" size="lg" mb={4}>
        <div className="mb-3">
          <Highlight
            query={["aprendizado"]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "purple.100" }}
          >
            O Comunicação Sem Fronteiras tem como objetivo facilitar o acesso ao
            aprendizado.
          </Highlight>
        </div>
        <Text fontSize="lg" fontWeight={"normal"}>
          Reunindo varias plataformas, recursos e cursos de acesso gratuitos
          para impulsionar o seu aprendizado em idiomas.
          <br />
          <Button as="a" href="/saiba_mais" colorScheme="purple" mt={4}>
            <InfoOutlineIcon mr={2} /> Saiba Mais
          </Button>
        </Text>
      </Heading>
    </Box>
  );
};

export default About;
