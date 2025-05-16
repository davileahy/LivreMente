import { Box, Flex, Text, IconButton, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import small_logo from "../assets/favicon.png";

const Footer = () => {
  const navigate = useNavigate();
  const logoSize = useBreakpointValue({ base: "30px", md: "40px" });

  return (
    <Box bg="#0D415D" color="white" py={6} px={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo e nome */}
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <img src={small_logo} alt="logo" style={{ width: logoSize, height: "auto" }} />
          <Text fontSize="lg" fontWeight="bold" ml={3}>
            Livre Mente
          </Text>
        </Flex>

        {/* Links */}
        <Stack direction={{ base: "column", md: "row" }} spacing={6} align="center">
          <Link onClick={() => navigate("/inicio")} _hover={{ textDecoration: "underline" }}>
            Início
          </Link>
          <Link onClick={() => navigate("/cursos")} _hover={{ textDecoration: "underline" }}>
            Cursos
          </Link>
          <Link onClick={() => navigate("/biblioteca")} _hover={{ textDecoration: "underline" }}>
            Biblioteca
          </Link>
          <Link onClick={() => navigate("/chat")} _hover={{ textDecoration: "underline" }}>
            Chat
          </Link>
          <Link onClick={() => navigate("/saiba_mais")} _hover={{ textDecoration: "underline" }}>
            Sobre
          </Link>
        </Stack>

        {/* Social icons */}
        <Flex gap={3} mt={{ base: 4, md: 0 }}>
          <Link href="https://github.com/davileahy" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </Link>
          <Link href="/saiba_mais">
            <IconButton
              aria-label="Sobre"
              icon={<FaInfoCircle />}
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </Link>
        </Flex>
      </Flex>

      {/* Copyright */}
      <Text fontSize="sm" textAlign="center" mt={6} color="gray.300">
        © {new Date().getFullYear()} Livre Mente.
      </Text>
    </Box>
  );
};

export default Footer;
