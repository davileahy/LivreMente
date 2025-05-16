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
import { FaCalendarAlt, FaMobileAlt, FaTasks } from "react-icons/fa";
import BlogLayout from "../../layout/BlogLayout";

export default function StudyRoutinePage() {
  return (
    <BlogLayout>
      <Box maxW="6xl" mx="auto" p={8}>
        <VStack spacing={12} align="start">
          {/* 1️⃣ Introdução */}
          <Box>
            <Heading size="2xl" mb={4}>Como Organizar sua Rotina de Estudos</Heading>
            <Image src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rotina de Estudos" borderRadius="md" my={4} />
            <Text fontSize="lg">
              Entenda como estruturar sua rotina de estudos de forma estratégica, potencializando seus resultados e reduzindo o estresse.
            </Text>
          </Box>
          {/* 2️⃣ Por que Organizar */}
          <Box>
            <Heading size="xl" mb={4}>Por que Organizar sua Rotina de Estudos?</Heading>
            <List spacing={3}>
              <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Aumenta foco e desempenho</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Reduz procrastinação</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Melhora gestão de conteúdo</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Previne cansaço mental</ListItem>
            </List>
          </Box>
          {/* 3️⃣ Como Montar Cronograma */}
          <Box>
            <Heading size="xl" mb={4}>Como Montar um Cronograma de Estudos</Heading>
            <Image src="https://images.unsplash.com/photo-1642359085898-d9fde39507c9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cronograma" borderRadius="md" my={4} boxSize={700} />
            <List spacing={3}>
              <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Levante todas as matérias</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Defina prioridades e pesos</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Distribua no calendário semanal</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Separe horários fixos e flexíveis</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="blue.400" /> Reserve tempo para pausas e lazer</ListItem>
            </List>
          </Box>
          {/* 4️⃣ Técnicas */}
          <Box>
            <Heading size="xl" mb={4}>Técnicas para Organizar os Estudos</Heading>
            <List spacing={3}>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Técnica <Link as={'a'} href="/posts/pomodoro" color="purple.500"  textDecoration={"underline"}>Pomodoro</Link></ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Técnica Pareto (80/20)</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Revisão Espaçada</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Mapas mentais e fichamentos</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> Flashcards e estudo ativo</ListItem>
            </List>
          </Box>
          {/* 5️⃣ Disciplina e Motivação */}
          <Box>
            <Heading size="xl" mb={4}>Como Manter a Disciplina e a Motivação</Heading>
            <List spacing={3}>d
              <ListItem><ListIcon as={CheckCircleIcon} color="orange.400" /> Defina metas semanais e diárias</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="orange.400" /> Anote pequenos avanços</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="orange.400" /> Organize seu ambiente</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="orange.400" /> Faça pausas e se recompense</ListItem>
            </List>
          </Box>
          {/* 6️⃣ Ferramentas */}
          <Box>
            <Heading size="xl" mb={4}>Ferramentas e Aplicativos</Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={5}>
              {[
                { name: 'Notion', category: 'Organização Pessoal', icon: FaTasks, link: 'https://www.notion.so/' },
                { name: 'Trello', category: 'Quadros de Estudo', icon: FaTasks, link: 'https://trello.com/' },
                { name: 'Todoist', category: 'Listas de Tarefas', icon: FaTasks, link: 'https://todoist.com/' },
                { name: 'Focus To-Do', category: 'Pomodoro + To-Do', icon: FaMobileAlt, link: 'https://www.focustodo.cn/' },
                { name: 'Google Calendar', category: 'Agenda Digital', icon: FaCalendarAlt, link: 'https://calendar.google.com/' },
              ].map((app) => (
                <Card key={app.name}>
                  <CardHeader display="flex" alignItems="center" gap={2}>
                    <Box as={app.icon} color="green.500" fontSize="2xl" />
                    <Heading size="md">{app.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text mb={2}>Categoria: {app.category}</Text>
                    <Link href={app.link} isExternal color="blue.400">
                      Acessar <ExternalLinkIcon mx="2px" />
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
          {/* 7️⃣ Dicas */}
          <Box>
            <Heading size="xl" mb={4}>Dicas de Otimização</Heading>
            <List spacing={3}>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Evite multitarefas</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Respeite seus melhores horários</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Revise seu cronograma semanalmente</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Inclua revisões periódicas</ListItem>
            </List>
          </Box>
          {/* 8️⃣ Erros Comuns */}
          <Box>
            <Heading size="xl" mb={4}>Erros Comuns para Evitar</Heading>
            <List spacing={3}>
              <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Cronogramas irrealistas</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Ignorar pausas</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Procrastinar com excesso de planejamento</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="red.400" /> Adiar matérias difíceis</ListItem>
            </List>
          </Box>
          {/* 9️⃣ Conclusão */}
          <Box>
            <Heading size="xl" mb={4}>Conclusão</Heading>
            <Text>
              Organizar sua rotina de estudos é essencial para melhorar o rendimento e reduzir o estresse. Adapte as estratégias, acompanhe seus avanços e mantenha constância.
            </Text>
          </Box>
        </VStack>
      </Box>
    </BlogLayout>
  );
}
