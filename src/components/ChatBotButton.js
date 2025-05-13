import React from "react";
import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { useLocation } from "react-router-dom";
import { ChatIcon } from "@chakra-ui/icons";

const ChatBotButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clientId = "ead1fbc3-406c-469e-9971-649a276f5908"; // Substitua pelo seu Client ID
  const client = getClient({ clientId });

  const botConfig = {
    composerPlaceholder:
      "Faça uma pergunta! (Que tal: 'O que você pode fazer?')",
    botName: "Comunic",
    botAvatar:
      "https://files.bpcontent.cloud/2024/11/01/19/20241101195123-VSG20Z97.png",
    botDescription:
      "Olá! Eu sou o Comunic, o assistente virtual do site Comunicação Sem Fronteiras. Estou aqui para ajudar você a aprender novos idiomas de maneira eficiente e prática. Se precisar de orientação ou quiser explorar mais sobre o nosso site, estou à disposição para redirecioná-lo e oferecer suporte em sua jornada de aprendizado. Vamos juntos quebrar as barreiras da comunicação!",
  };

  const location = useLocation();

  // Verifica se o usuário está na página de chat
  const isChatPage = location.pathname === "/chat";

  return (
    <Box>
      {/* Verifica se não está na página de chat antes de renderizar o FAB */}
      {!isChatPage && (
        <Button
          position="fixed"
          bottom="30px"
          right="30px"
          borderRadius={50}
          size="lg"
          colorScheme="purple"
          onClick={onOpen}
          boxShadow="lg"
          zIndex={20}
        >
          <Icon as={ChatIcon} />
        </Button>
      )}

      {/* Popup do Chatbot */}
      {isOpen && (
        <Box
          position="fixed"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.7)"
          zIndex="9999"
          onClick={onClose}
        >
          <Box
            width="90%"
            height="90%"
            maxWidth="600px"
            maxHeight="800px"
            margin="auto"
            backgroundColor="white"
            borderRadius="8px"
            boxShadow="lg"
            overflow="hidden"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro
          >
            <WebchatProvider
              key={JSON.stringify(botConfig)}
              client={client}
              configuration={botConfig}
            >
              <Webchat
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </WebchatProvider>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatBotButton;
