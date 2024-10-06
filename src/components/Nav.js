import React, { useState } from "react";
import { Box, Flex, Button, Icon, useBreakpointValue, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from "@chakra-ui/react";
import { BsJournalBookmarkFill, BsChatDots, BsBook, BsList } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import small_logo from "../assets/favicon.png";

const Navbar = () => {
  // Estado para controlar a abertura do drawer (menu mobile)
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  // Definir comportamento da logo e layout baseado nos breakpoints
  const logoSize = useBreakpointValue({ base: "40px", md: "60px" });
  const displayLinks = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Box as="nav" bg="white" py={4} px={6} className="fixed w-full z-10 shadow-md">
      <Flex justify="space-between" align="center">
        {/* Logo responsiva */}
        <ScrollLink to="inicio" smooth={true} duration={500} offset={-70}>
          <img
            src={small_logo}
            alt="logo"
            style={{ width: logoSize, height: "auto" }}
            className="hover:scale-125 duration-[0.5s] hover:cursor-pointer"
          />
        </ScrollLink>

        {/* Links exibidos em telas maiores */}
        <Flex gap={10} display={displayLinks}>
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            className="hover:scale-125 duration-[0.5s]"
          >
            Biblioteca <Icon as={BsBook} ml={2} />
          </Button>
          <ScrollLink to="sobre" smooth={true} duration={500} offset={-70}>
            <Button
              variant="link"
              color="#0D415D"
              size="lg"
              className="hover:scale-125 duration-[0.5s]"
            >
              Sobre <Icon as={BsChatDots} ml={2} />
            </Button>
          </ScrollLink>
          <ScrollLink to="cursos" smooth={true} duration={500} offset={-70}>
            <Button
              variant="link"
              color="#0D415D"
              size="lg"
              className="hover:scale-125 duration-[0.5s]"
            >
              Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
            </Button>
          </ScrollLink>
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
              <Flex direction="column" gap={4}>
                <ScrollLink to="inicio" smooth={true} duration={500} offset={-70} onClick={onClose}>
                  <Button variant="link" color="#0D415D" size="lg">
                    Início
                  </Button>
                </ScrollLink>
                <ScrollLink to="biblioteca" smooth={true} duration={500} offset={-70} onClick={onClose}>
                  <Button variant="link" color="#0D415D" size="lg">
                    Biblioteca <Icon as={BsBook} ml={2} />
                  </Button>
                </ScrollLink>
                <ScrollLink to="sobre" smooth={true} duration={500} offset={-70} onClick={onClose}>
                  <Button variant="link" color="#0D415D" size="lg">
                    Sobre <Icon as={BsChatDots} ml={2} />
                  </Button>
                </ScrollLink>
                <ScrollLink to="cursos" smooth={true} duration={500} offset={-70} onClick={onClose}>
                  <Button variant="link" color="#0D415D" size="lg">
                    Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
                  </Button>
                </ScrollLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
