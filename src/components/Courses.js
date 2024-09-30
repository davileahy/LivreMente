import React, {useState} from 'react';
import { SimpleGrid, Box, Heading, Text, Wrap, WrapItem, Tag, Checkbox, CheckboxGroup, Button, Menu, MenuButton, MenuList, MenuItem, IconButton} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CourseCard from './CourseCard';
import { link, title } from 'framer-motion/client';

//logos
import logo_duolingo from '../assets/courses_logos/duolingo_logo.png'
import logo_kultivi from '../assets/courses_logos/kultivi_logo.png'
import logo_cultura from '../assets/courses_logos/cultura_logo.png'

// Exemplo de array com os dados dos cursos
const coursesData = [
  {
    title: 'Duolingo',
    logo: logo_duolingo,
    description: ' O Duolingo é um aplicativo e site de ensino de idiomas que oferece cursos gratuitos para aprender mais de 40 idiomas, além de música e matemática. O aplicativo é conhecido por ser divertido e eficaz, e por transformar o ato de estudar em um jogo',
    categories: ['Inglês', 'Interativo', 'Gratuito', 'Iniciantes'],
    link: 'https://www.duolingo.com/',
  },
  {
    title: 'Kultivi',
    logo: logo_kultivi,
    description: 'A Kultivi é uma plataforma de cursos online gratuitos e com certificado que oferece uma variedade de temas, como idiomas, concursos, preparação para o Enem e para a OAB, entre outros.',
    categories: ['Inglês', 'Gratuito', 'Certificado'],
    link: 'https://kultivi.com/'
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'Cultura Inglesa',
    logo: logo_cultura,
    description: 'A Cultura Inglesa, além de oferecerem seus cursos de inglês, possuem materiais gratuitos para acesso. Principalmente E-books e Guias para as pessoas acessarem o inglês.',
    categories: ['Inglês', 'E-Books', 'Gratuito', 'Iniciantes'],
    link: 'https://www.culturainglesa.com.br/materiais-gratuitos/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'curso',
    logo: '/path-to-curso-logo.png',
    description: 'Aprimore seu inglês com cursos personalizados no curso.',
    categories: ['Inglês', 'Personalizado', 'Gratuito'],
    link: 'https://www.curso.com/',
  },
  {
    title: 'Memrise - Aprenda Inglês',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/6/65/Logotipo_do_Memrise.png',
    description: 'Plataforma para aprender diversos idiomas, incluindo inglês.',
    categories: ['Inglês', 'Intermediário', 'Gratuito'],
    link: 'https://www.memrise.com/pt-br/',
  },
  // Adicionar mais cursos conforme necessário
];

const Courses = () => {
    // Estado para tags selecionadas
    const [selectedTags, setSelectedTags] = useState([]);

    // Função para manipular as tags selecionadas
    const handleTagChange = (selectedValues) => {
        setSelectedTags(selectedValues);
    };

    const clearTags = () => {
        setSelectedTags([]);
      };    

  // Filtrar cursos com base nas tags selecionadas
    const filteredCourses = selectedTags.length > 0
    ? coursesData.filter((course) =>
        selectedTags.every((tag) => course.categories.includes(tag))
        )
    : coursesData; // Exibe todos os cursos se nenhuma tag estiver selecionada

    return (
        <Box className="p-10 bg-gray-100">

            <Heading as='h2' className='text-center mb-5'>
                Cursos
                <Text fontSize='xl' fontWeight='light'>
                    Aqui tem uma descrição muito boa que eu ainda vou implementar
                </Text>

                {/* Dropdown de filtros na lateral */}
                <Box w={{ base: '100%', md: '20%' }} mb={{ base: 4, md: 0 }}>
                        <Menu closeOnSelect={false}>

                            <MenuButton
                                as={Button}
                                aria-label="Filtros"
                                size="sm"
                                w="100%"
                                colorScheme='teal'
                            >
                                Filtrar <ChevronDownIcon />
                            </MenuButton>

                            <MenuList minWidth="240px">
                                <CheckboxGroup value={selectedTags} onChange={handleTagChange}>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Inglês">Inglês</Checkbox>
                                </MenuItem>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Básico">Básico</Checkbox>
                                </MenuItem>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Certificado">Certificado</Checkbox>
                                </MenuItem>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Intermediário">Intermediário</Checkbox>
                                </MenuItem>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Gratuito">Gratuito</Checkbox>
                                </MenuItem>
                                <MenuItem closeOnSelect={false}>
                                    <Checkbox value="Pago">Pago</Checkbox>
                                </MenuItem>
                                </CheckboxGroup>
                                {/* Botão para limpar todas as tags */}
                                <MenuItem>
                                <Button size="sm" onClick={clearTags} w="100%">
                                    Limpar Filtros
                                </Button>
                                </MenuItem>
                            </MenuList>

                        </Menu>
                    </Box>

                {/* Exibição das tags selecionadas */}
                <Wrap spacing={4} mb={4} mt={5}>
                    {selectedTags.map((tag, index) => (
                    <WrapItem key={index}>
                        <Tag colorScheme="teal">{tag}</Tag>
                    </WrapItem>
                    ))}
                </Wrap>

            </Heading>

            {/* Exibição dos cards */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
               {filteredCourses.map((course, index) => (
                <CourseCard
                    key={index}
                    title={course.title}
                    logo={course.logo}
                    description={course.description}
                    categories={course.categories}
                    link={course.link}
                />
                ))}
            </SimpleGrid>
        </Box>
  );
};

export default Courses;
