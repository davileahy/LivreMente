import React from "react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { Box } from "@chakra-ui/react";

const ChatBot = () => {
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

  return (
    <Box width="100%" height="100%" textAlign={'center'}>
      <WebchatProvider
        key={JSON.stringify(botConfig)}
        client={client}
        configuration={botConfig}
      >
        <Webchat />
      </WebchatProvider>
    </Box>
  );
};

export default ChatBot;
