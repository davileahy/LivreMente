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
  BsChatDotsFill,
  BsBookHalf,
  BsList,
  BsHouse,
  BsCollectionFill,
} from "react-icons/bs";

import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import small_logo from "../assets/favicon.png";
import HomeButton from "./HomeButton";
import { InfoIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/inicio";

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const logoSize = useBreakpointValue({ base: "40px", md: "60px" });
  const displayLinks = useBreakpointValue({ base: "none", md: "flex" });

  // Links centralizados em um array
  const navLinks = [
    { label: "Início", icon: BsHouse, path: "/inicio", hideIfHome: true },
    { label: "Cursos", icon: BsJournalBookmarkFill, path: "/cursos" },
    { label: "Posts", icon: BsCollectionFill, path: "/posts" },
    { label: "Biblioteca", icon: BsBookHalf, path: "/biblioteca" },
    { label: "Chat", icon: BsChatDotsFill, path: "/chat" },
    { label: "Sobre", icon: InfoIcon, path: "/saiba_mais" },
  ];

  const underlineHover = {
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-2px",
      left: "0",
      bg: "#0D415D",
      transform: "scaleX(0)",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease-out",
    },
    _hover: {
      _after: {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
  };

  return (
    <Box as="nav" bg="white" py={4} px={6} className="w-full z-10 shadow-md">
      <Flex justify="space-between" align="center">
        {/* Logo */}
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
          <img
            onClick={() => navigate("/inicio")}
            src={small_logo}
            alt="logo"
            style={{ width: logoSize, height: "auto" }}
            className="hover:scale-125 duration-[0.5s] hover:cursor-pointer"
          />
        )}

        {/* Links desktop */}
        <Flex gap={6} display={displayLinks}>
          <Box sx={underlineHover}>
            <HomeButton />
          </Box>

          {navLinks.map(
            (link) =>
              !(isHomePage && link.hideIfHome) && (
                <Button
                  key={link.label}
                  variant="link"
                  color="gray.800"
                  size="lg"
                  sx={underlineHover}
                  onClick={() => navigate(link.path)}
                >
                  {link.label} <Icon as={link.icon} ml={2} />
                </Button>
              )
          )}
        </Flex>

        {/* Ícone menu mobile */}
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

        {/* Drawer mobile */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Flex
                direction="column"
                gap={4}
                alignItems={"end"}
                justifyContent={"center"}
              >
                {navLinks.map(
                  (link) =>
                    !(isHomePage && link.hideIfHome) && (
                      <Button
                        key={link.label}
                        variant="link"
                        color="#0D415D"
                        size="lg"
                        fontSize={"xx-large"}
                        sx={underlineHover}
                        onClick={() => {
                          navigate(link.path);
                          onClose();
                        }}
                      >
                        {link.label} <Icon as={link.icon} ml={2} />
                      </Button>
                    )
                )}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
