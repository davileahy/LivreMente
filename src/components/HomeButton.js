import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { Button, Icon } from "@chakra-ui/react";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    // Botão fixo para ir para a home
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
  );
};

export default HomeButton;
