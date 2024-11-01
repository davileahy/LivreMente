import logo_duolingo from "../assets/courses_logos/duolingo_logo.png";
import logo_kultivi from "../assets/courses_logos/kultivi_logo.png";
import logo_busuu from "../assets/courses_logos/busuu_logo.png";
import logo_anki from "../assets/courses_logos/anki_logo.png";
import logo_fl from "../assets/courses_logos/fl_logo.png";
import logo_tandem from "../assets/courses_logos/tandem_logo.png";
import logo_lingq from "../assets/courses_logos/lingq_logo.png";
import logo_aba_english from "../assets/courses_logos/aba_logo.png";
import logo_ginead from "../assets/courses_logos/ginead_logo.jpeg";
import logo_khan_academy from "../assets/courses_logos/khan_logo.png";
import logo_lingo_clip from "../assets/courses_logos/lingo_clip_logo.png";
import logo_bbc_learning_english from "../assets/courses_logos/bbc_learning_english_logo.png";
import logo_coursera from "../assets/courses_logos/coursera_logo.png";

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
  {
    title: "ABA English",
    logo: logo_aba_english,
    description:
      "Plataforma de aprendizado de inglês com cursos baseados em situações reais e vídeos interativos, disponível gratuitamente com a opção de certificado pago.",
    categories: ["Certificado", "Intermediário", "Vídeos"],
    link: "https://www.abaenglish.com/",
  },
  {
    title: "Ginead",
    logo: logo_ginead,
    description:
      "Ginead é uma plataforma de aprendizado de inglês que oferece cursos focados em gramática, vocabulário e conversação, com acesso gratuito a diversos materiais educativos.",
    categories: ["Conversação", "Intermediário", "Gramática"],
    link: "https://www.ginead.com/",
  },
  {
    title: "Khan Academy",
    logo: logo_khan_academy,
    description:
      "A Khan Academy é uma plataforma educacional que oferece cursos gratuitos em várias disciplinas, incluindo inglês, matemática, ciências e muito mais, com um enfoque na aprendizagem personalizada.",
    categories: ["Gratuito", "Educação", "Aprendizagem Personalizada"],
    link: "https://www.khanacademy.org/",
  },
  {
    title: "Lingo Clip",
    logo: logo_lingo_clip,
    description:
      "O Lingo Clip é uma plataforma de aprendizado de idiomas que utiliza vídeos curtos e interativos para ensinar vocabulário e gramática de forma divertida e envolvente.",
    categories: ["Gratuito", "Interativo", "Vídeos", "Aprendizagem Visual"],
    link: "https://www.lingoclip.com/",
  },
  {
    title: "BBC Learning English",
    logo: logo_bbc_learning_english,
    description:
      "BBC Learning English é uma plataforma gratuita que oferece lições de inglês em vários níveis, com vídeos, áudios e exercícios focados em gramática, vocabulário e pronúncia.",
    categories: [
      "Gratuito",
      "Vídeos",
      "Gramática",
      "Vocabulário",
      "Pronúncia",
      "Idiomas",
    ],
    link: "https://www.bbc.co.uk/learningenglish",
  },
  {
    title: "Coursera",
    logo: logo_coursera,
    description:
      "Coursera é uma plataforma online que oferece cursos gratuitos e pagos em diversas áreas, incluindo inglês, com certificados emitidos por universidades e instituições renomadas.",
    categories: [
      "Gratuito",
      "Certificado",
      "Idiomas",
      "Educação",
      "Intermediário",
      "Avançado",
    ],
    link: "https://www.coursera.org/",
  },
  // Adicionar mais cursos conforme necessário
];

export default coursesData;
