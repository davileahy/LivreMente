/* 
    Componente com duas funcionalidades:
    1. Verifica se o usuário está na homepage ou não
    2. Caso o usuário já esteja na homepage => exibe um botão para rolar para o topo da página (aparece apenas ao passar da metade da tela)
    3. Caso o usuário não esteja na homepage, exibe um botão fixo para ir para a home. 
*/

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillHouseFill, BsArrowUpCircle } from "react-icons/bs";
import { Button, Icon } from "@chakra-ui/react";

import useScrollPosition from "../hooks/useScrollPosition";

const HomeButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname)

  // Verifica se o usuário está na homepage
  const isHomePage =
    location.pathname === "/" || location.pathname === "/inicio";

  // Função para rolar até o topo da página
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Verifica se o usuário está na metade da página com relação ao scroll
  const scrollPos = useScrollPosition();
  console.log(scrollPos)
  const isAtHalfPage = scrollPos >= document.documentElement.scrollHeight / 2;

  return (
    <div>
      {/* Se o usuário estiver na metade da tela e na home, exibe o botão que rola para o topo da tela. */}
      {isHomePage && isAtHalfPage ? (
        <Button
          onClick={handleScrollToTop}
          animation={"fadeIn 0.5s"}
          alignSelf={"center"}
          position={"fixed"}
          right={950}
          top={6}
          zIndex={10}
        >
          <Icon as={BsArrowUpCircle} />
        </Button>
      ) : (
        // Botão fixo para ir para a home
        !isHomePage && (
            <Button
            colorScheme="teal"
            variant="outline"
            position="fixed"
            top="20px"
            right="20px"
            onClick={() => navigate("/inicio")}
            size={"lg"}
            zIndex={10}
            >
            <Icon as={BsFillHouseFill} />
            </Button>
        )
      )}
    </div>
  );
};

export default HomeButton;
