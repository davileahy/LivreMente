import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  List, 
  ListItem, 
  ListIcon, 
  SimpleGrid, 
  Card, 
  CardHeader, 
  CardBody, 
  Link, 
  Image
} from "@chakra-ui/react";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaLeaf, FaClock, FaMobileAlt, FaDesktop } from "react-icons/fa";
import BlogLayout from "../../layout/BlogLayout";

export default function PomodoroGuidePage() {
  return (
    <BlogLayout>
        <Box maxW="6xl" mx="auto" p={8}>
          <VStack spacing={12} align="start">
            {/* 1️⃣ Introdução */}
            <Box>
              <Heading size="2xl" mb={4}>Método Pomodoro: o Guia Completo</Heading>
              <Image src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pomodoro tomates" borderRadius="md" my={4} />
              <Text fontSize="lg">
                Descubra como a técnica Pomodoro pode transformar seus estudos e aumentar sua produtividade com sessões de foco intenso e pausas estratégicas.
              </Text>
            </Box>
            {/* 2️⃣ Origem */}
            <Box>
              <Heading size="xl" mb={4}>Origem do Método Pomodoro</Heading>
              <Text mb={2}>
                Criado por <strong>Francesco Cirillo</strong> no final dos anos 1980, a técnica surgiu quando ele buscava melhorar sua concentração na universidade.
              </Text>
              <Text>
                O nome “Pomodoro” vem do timer de cozinha em formato de tomate que Cirillo usava para cronometrar suas sessões de estudo.
              </Text>
            </Box>
            {/* 3️⃣ Como Funciona */}
            <Box>
              <Heading size="xl" mb={4}>Como Funciona o Método</Heading>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Defina uma tarefa a realizar</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Programe 25 minutos de foco (1 Pomodoro)</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Faça uma pausa de 5 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> A cada 4 ciclos, faça uma pausa maior (15-30 minutos)</ListItem>
              </List>
            </Box>
            {/* 4️⃣ Vantagens */}
            <Box>
              <Heading size="xl" mb={4}>Vantagens e Benefícios</Heading>
              <List spacing={3}>
                <ListItem><ListIcon as={FaLeaf} color="teal.400" /> Aumento de foco e concentração</ListItem>
                <ListItem><ListIcon as={FaLeaf} color="teal.400" /> Prevenção da fadiga mental</ListItem>
                <ListItem><ListIcon as={FaLeaf} color="teal.400" /> Redução da procrastinação</ListItem>
                <ListItem><ListIcon as={FaLeaf} color="teal.400" /> Controle mais preciso sobre o tempo</ListItem>
              </List>
            </Box>
            {/* 5️⃣ Como Utilizar */}
            <Box>
              <Heading size="xl" mb={4}>Como Utilizar na Prática</Heading>
              <Text mb={2}>Siga esse passo a passo:</Text>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Liste suas tarefas</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Estabeleça prioridades</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Inicie o cronômetro e foque por 25 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Faça pausas de 5 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Repita e ajuste conforme necessário</ListItem>
              </List>
            </Box>
            {/* 6️⃣ Aplicativos */}
            <Box>
              <Heading size="xl" mb={4}>Ferramentas e Aplicativos</Heading>
              <SimpleGrid columns={[1, null, 2]} spacing={5}>
                {[
                  { name: 'Focus To-Do', platform: 'Mobile & Desktop', icon: FaMobileAlt, link: 'https://www.focustodo.cn/' },
                  { name: 'Forest', platform: 'Mobile', icon: FaLeaf, link: 'https://www.forestapp.cc/' },
                  { name: 'TomatoTimer', platform: 'Web', icon: FaDesktop, link: 'https://tomato-timer.com/' },
                  { name: 'Pomofocus.io', platform: 'Web', icon: FaClock, link: 'https://pomofocus.io/' },
                ].map((app) => (
                  <Card key={app.name}>
                    <CardHeader display="flex" alignItems="center" gap={2}>
                      <Box as={app.icon} color="green.500" fontSize="2xl" />
                      <Heading size="md">{app.name}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text mb={2}>Plataforma: {app.platform}</Text>
                      <Link href={app.link} isExternal color="blue.400">
                        Acessar <ExternalLinkIcon mx="2px" />
                      </Link>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>
            {/* 7️⃣ Adaptações */}
            <Box>
              <Heading size="xl" mb={4}>Adaptações para Estudo</Heading>
              <Text mb={2}>Customize os ciclos:</Text>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Para matérias difíceis: 25/5 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Para leitura leve: 50/10 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Simulados longos: pausas a cada 2h</ListItem>
              </List>
            </Box>
            {/* 8️⃣ Limitações */}
            <Box>
              <Heading size="xl" mb={4}>Limitações e Críticas</Heading>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Nem todos se adaptam ao ritmo de 25 minutos</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Não recomendado para tarefas criativas longas</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Pode ser difícil de aplicar em equipes</ListItem>
              </List>
            </Box>
            {/* 9️⃣ Conclusão */}
            <Box>
              <Heading size="xl" mb={4}>Conclusão</Heading>
              <Image src="https://images.unsplash.com/photo-1599981819329-31f250c3bc75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Timer" borderRadius="md" my={4} />
              <Text>
                O Método Pomodoro é uma ferramenta poderosa para aumentar a produtividade e foco nos estudos. Experimente, adapte os ciclos ao seu estilo e maximize seus resultados.
              </Text>
            </Box>
          </VStack>
        </Box>
    </BlogLayout>
  );
}
