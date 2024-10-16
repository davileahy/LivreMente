import logo_duolingo from "../assets/courses_logos/duolingo_logo.png";
import logo_kultivi from "../assets/courses_logos/kultivi_logo.png";
import logo_cultura from "../assets/courses_logos/cultura_logo.png";
import logo_busuu from "../assets/courses_logos/busuu_logo.png";
import logo_anki from "../assets/courses_logos/anki_logo.png";
import logo_fl from "../assets/courses_logos/fl_logo.png";
import logo_tandem from "../assets/courses_logos/tandem_logo.png";
import logo_lingq from "../assets/courses_logos/lingq_logo.png";

const coursesData = [
  {
    title: "Duolingo",
    logo: logo_duolingo,
    description:
      " O Duolingo é um aplicativo e site de ensino de idiomas que oferece cursos gratuitos para aprender mais de 40 idiomas, além de música e matemática. O aplicativo é conhecido por ser divertido e eficaz, e por transformar o ato de estudar em um jogo.",
    categories: [
      "Idiomas",
      "Inglês",
      "Interativo",
      "Gratuito",
      "Iniciantes",
      "Gameficado",
    ],
    link: "https://www.duolingo.com/",
  },
  {
    title: "Kultivi",
    logo: logo_kultivi,
    description:
      "A Kultivi é uma plataforma de cursos online gratuitos e com certificado que oferece uma variedade de temas, como idiomas, concursos, preparação para o Enem e para a OAB, entre outros.",
    categories: ["Idiomas", "Inglês", "Gratuito", "Certificado"],
    link: "https://kultivi.com/",
  },
  {
    title: "Memrise - Aprenda Inglês",
    logo: "https://upload.wikimedia.org/wikipedia/pt/6/65/Logotipo_do_Memrise.png",
    description:
      "O Memrise é uma plataforma de aprendizado de idiomas que utiliza um algoritmo baseado na ciência cognitiva para ajudar os usuários a aprender de forma mais rápida e eficaz.",
    categories: ["Idiomas", "Inglês", "Intermediário", "Gratuito"],
    link: "https://www.memrise.com/pt-br/",
  },
  {
    title: "[E-BOOKS] Cultura Inglesa",
    logo: logo_cultura,
    description:
      "A Cultura Inglesa, além de oferecerem seus cursos de inglês, possuem materiais gratuitos para acesso. Principalmente E-books e Guias para as pessoas acessarem o inglês.",
    categories: ["Idiomas", "Inglês", "E-Books", "Gratuito", "Iniciantes"],
    link: "https://www.culturainglesa.com.br/materiais-gratuitos/",
  },
  {
    title: "Busuu",
    logo: logo_busuu,
    description:
      "O Busuu é uma plataforma online de aprendizado de idiomas que permite aos usuários interagir com falantes nativos. Ela oferece cursos em 14 idiomas diferentes, desde o nível iniciante até o avançado.",
    categories: [
      "Idiomas",
      "Gratuito",
      "Iniciantes",
      "Itermediário",
      "Avançado",
      "Interativo",
    ],
    link: "https://www.busuu.com/pt",
  },
  {
    title: "Tandem",
    logo: logo_tandem,
    description:
      "Plataforma de intercâmbio de idiomas onde você conversa com falantes nativos de outros idiomas por meio de chamadas de vídeo ou texto, oferecendo um aprendizado mais prático.",
    categories: ["Idiomas", "Inglês", "Gratuito", "Intercâmbio", "Conversação"],
    link: "https://tandem.net/",
  },
  {
    title: "LingQ",
    logo: logo_lingq,
    description:
      "Plataforma que utiliza textos e áudios reais, como livros, artigos e vídeos, para ensinar idiomas, focando no aprendizado por meio da imersão em conteúdo autêntico.",
    categories: ["Idiomas", "Leitura", "Áudio"],
    link: "https://www.lingq.com/pt/",
  },
  {
    title: "Anki",
    logo: logo_anki,
    description:
      "Software de repetição espaçada para criar flashcards personalizados, utilizado por muitos estudantes para memorização eficaz de palavras e frases em vários idiomas.",
    categories: ["Idiomas", "Flashcards", "Repetição Espaçada", "Aprendizado"],
    link: "https://apps.ankiweb.net/",
  },
  {
    title: "Future Learn",
    logo: logo_fl,
    description:
      "Plataforma de cursos online que oferece lições de idiomas de universidades e instituições renomadas. A maioria dos cursos é gratuita, com funcionalidades extras opcionais.",
    categories: ["Idiomas", "Cursos"],
    link: "https://www.futurelearn.com/",
  },
  // Adicionar mais cursos conforme necessário
];

export default coursesData;
