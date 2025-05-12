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

  // Estilo hover animado underline
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
    <Box as="nav" bg="white" py={4} px={6} className="fixed w-full z-10 shadow-md">
      <Flex justify="space-between" align="center">
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
        <Flex gap={10} display={displayLinks}>
          <Box sx={underlineHover}>
            <HomeButton />
          </Box>
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            sx={underlineHover}
            onClick={() => navigate("/cursos")}
          >
            Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
          </Button>


          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            sx={underlineHover}
            onClick={() => navigate("/biblioteca")}
          >
            Biblioteca <Icon as={BsBookHalf} ml={2} />
          </Button>

          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            sx={underlineHover}
            onClick={() => navigate("/chat")}
          >
            Chat <Icon as={BsChatDotsFill} ml={2} />
          </Button>
          
          <Button
            variant="link"
            color="#0D415D"
            size="lg"
            sx={underlineHover}
            onClick={() => navigate("/saiba_mais")}
          >
            Sobre <Icon as={InfoIcon} ml={2} />
          </Button>
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
              <Flex direction="column" gap={4} alignItems={"end"} justifyContent={"center"}>
                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  fontSize={"xx-large"}
                  sx={underlineHover}
                  onClick={() => navigate("/inicio")}
                >
                  Início <Icon as={BsHouse} ml={2} />
                </Button>

                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  fontSize={"xx-large"}
                  sx={underlineHover}
                  onClick={() => navigate("/cursos")}
                >
                  Cursos <Icon as={BsJournalBookmarkFill} ml={2} />
                </Button>
                
                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  fontSize={"xx-large"}
                  sx={underlineHover}
                  onClick={() => navigate("/biblioteca")}
                >
                  Biblioteca <Icon as={BsBookHalf} ml={2} />
                </Button>

                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  fontSize={"xx-large"}
                  sx={underlineHover}
                  onClick={() => navigate("/chat")}
                >
                  Chat <Icon as={BsChatDotsFill} ml={2} />
                </Button>


                <Button
                  variant="link"
                  color="#0D415D"
                  size="lg"
                  fontSize={"xx-large"}
                  sx={underlineHover}
                  onClick={() => navigate("/saiba_mais")}
                >
                  Sobre <Icon as={InfoIcon} ml={2} />
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
