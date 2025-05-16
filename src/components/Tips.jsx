import React from "react";
import { Box, Button, Heading, ListIcon, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaHandPaper } from "react-icons/fa";
import { BsList } from "react-icons/bs";

const Tips = () => {
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
            <Heading>
                Fique por dentro!
            </Heading>
        </div>
        <Text fontSize="lg" fontWeight={"normal"}>
            Acompanhe dicas de estudo, encontre motivação, e saiba por onde começar. Veja nossos posts!
          <br />
          <Button as="a" href="/posts" colorScheme="purple" mt={4}>
            <Box mr={2}>
                <BsList />
            </Box> Posts
          </Button>
        </Text>
      </Heading>
    </Box>
  );
};

export default Tips;
