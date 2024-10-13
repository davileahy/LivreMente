import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import {
  BsJournalBookmarkFill,
  BsChatDots,
  BsBook,
  BsList,
  BsHouse,
} from "react-icons/bs";

import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import small_logo from "../assets/favicon.png";
import HomeButton from "./HomeButton";

const Navbar = () => {
  // Navigate para redirecionamento de página
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage =
    location.pathname === "/" || location.pathname === "/inicio";

  // Estado para controlar a abertura do drawer (menu mobile)
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  // Definir comportamento da logo e layout baseado nos breakpoints
  const logoSize = useBreakpointValue({ base: "40px", md: "60px" });
  const displayLinks = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Box
      as="nav"
      bg="white"
      py={4}
      px={6}
      className="fixed w-full z-10 shadow-md"
    >
      <Flex justify="space-between" align="center">
        {/* Logo responsiva, leva para a homepage caso o user não esteja na homepage.
        
        caso esteja, leva para o topo da página*/}

        {isHomePage ? (
          <ScrollLink to="inicio" smooth={true} duration={500} offset={-70}>
            <img
              src={small_logo}
              alt="logo"
              style={{ width: logoSize, height: "auto" }}
              className="hover:scale-125 duration-[0.5s] hover:cursor-pointer"
            />
          </ScrollLink>
        ) : (
          !isHomePage && (
            <img
              onClick={() => navigate("/inicio")}
              src={small_logo}
              alt="logo"
              style={{ width: logoSize, height: "auto" }}
              className="hover:scale-125 duration-[0.5s] hover:cursor-pointer"
            />
          )
        )}

        {/* Links exibidos em telas maiores */}
        <Flex gap={10} display={displayLinks}>
          {/* Leva para o topo da página quando estiver na metade ou abaixo */}
          <HomeButton />
          {/* Redireciona para BIBLIOTECA */}
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            className="hover:scale-125 duration-[0.5s]"
            onClick={() => navigate("/biblioteca")}
          >
            Biblioteca <Icon as={BsBook} ml={2} />
          </Button>

          {/* Desce a página para SOBRE */}
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            className="hover:scale-125 duration-[0.5s]"
            onClick={() => navigate("/saiba_mais")}
          >
            Sobre <Icon as={BsChatDots} ml={2} />
          </Button>

          {/* Redireciona para CURSOS*/}
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            className="hover:scale-125 duration-[0.5s]"
            onClick={() => navigate("/cursos")}
          >
            Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
          </Button>
        </Flex>

        {/* Ícone do menu hamburguer para telas menores */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<BsList />}
            onClick={onOpen}
            aria-label="Open Menu"
            color="#0D415D"
            fontSize="2xl"
            variant="ghost"
            _hover={{ bg: "transparent", transform: "scale(1.2)" }}
          />
        </Box>

        {/* Drawer (menu lateral) para dispositivos móveis */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Flex direction="column" gap={4} alignItems={'end'}>
                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  onClick={() => navigate("/inicio")}
                >
                  Início <Icon as={BsHouse} ml={2} />
                </Button>

                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  onClick={() => navigate("/biblioteca")}
                >
                  Biblioteca <Icon as={BsBook} ml={2} />
                </Button>

                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  onClick={() => navigate("/saiba_mais")}
                >
                  Sobre <Icon as={BsChatDots} ml={2} />
                </Button>

                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  onClick={() => navigate("/cursos")}
                >
                  Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
