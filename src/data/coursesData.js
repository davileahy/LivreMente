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
    title: "Memrise",
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

  {
    title: "edX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/2560px-EdX_newer_logo.svg.png",
    description:
      "Fundada por Harvard e MIT, oferece cursos gratuitos de universidades do mundo todo. O acesso às aulas é gratuito e os certificados são opcionais e pagos.",
    categories: [
      "universidades",
      "educação superior",
      "cursos livres",
      "certificado opcional",
      "ensino acadêmico",
    ],
    link: "https://www.edx.org",
  },
  {
    title: "Fundação Bradesco",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA34YJ3qZO4jW0dNj01obPhsUDwWm44RzEig&s",
    description:
      "Plataforma 100% gratuita com cursos e certificado em áreas como administração, finanças, informática e educação. Ideal para quem quer atualizar o currículo.",
    categories: [
      "administração",
      "educação",
      "informática",
      "certificado gratuito",
      "empregabilidade",
    ],
    link: "https://www.ev.org.br",
  },
  {
    title: "Mundo SENAI",
    logo: "https://portal.fiero.org.br/storage/noticia/rol3eAbO9lOlZZHFarjgkqnyqFGXSTlKWOAK5KB0.png",
    description:
      "Oferece cursos gratuitos com certificado voltados à indústria, segurança do trabalho, gestão e tecnologia. Excelente opção para formação técnica e profissional.",
    categories: [
      "indústria",
      "técnico",
      "segurança do trabalho",
      "tecnologia",
      "certificado",
    ],
    link: "https://www.mundosenai.com.br",
  },
  {
    title: "Microsoft Learn",
    logo: "https://learn.microsoft.com/favicon.ico",
    description:
      "Cursos gratuitos da Microsoft sobre tecnologia, incluindo nuvem, inteligência artificial, desenvolvimento, segurança da informação e ferramentas como Excel e Word.",
    categories: [
      "Microsoft",
      "programação",
      "tecnologia",
      "IA",
      "Office",
      "certificado opcional",
    ],
    link: "https://learn.microsoft.com/pt-br/training/",
  },
  {
    title: "Udemy",
    logo: "https://images.seeklogo.com/logo-png/40/2/udemy-logo-png_seeklogo-409219.png",
    description:
      "Plataforma com milhares de cursos online. Possui opções gratuitas e pagas em áreas como programação, negócios, design, marketing e mais. Procure por 'cursos grátis' na busca.",
    categories: [
      "cursos online",
      "várias áreas",
      "tecnologia",
      "negócios",
      "design",
      "certificado",
    ],
    link: "https://www.udemy.com",
  },
  {
    title: "Senac EAD",
    logo: "https://www.ead.senac.br/arquivo/api/download/publico/1134",
    description:
      "O Senac oferece cursos gratuitos online com certificado nas áreas de gestão, comércio, saúde e bem-estar. Ideal para quem quer se qualificar para o mercado.",
    categories: [
      "gestão",
      "comércio",
      "saúde",
      "certificado gratuito",
      "cursos livres",
    ],
    link: "https://www.ead.senac.br/gratuito",
  },

  {
    title: "Aprenda Mais (MEC)",
    logo: "https://aprendamais.mec.gov.br/pluginfile.php/137547/coursecat/description/Faixa%20cursos-01.png",
    description:
      "Plataforma oficial do Ministério da Educação do Brasil, oferecendo cursos gratuitos e online em diversas áreas, com certificado de conclusão.",
    categories: ["Educação", "Tecnologia", "Gestão", "Saúde", "Administração"],
    link: "https://aprendamais.mec.gov.br/",
  },
  {
    title: "FGV Online",
    logo: "https://pbs.twimg.com/profile_images/445991012461056000/j38epzOJ_400x400.png",
    description:
      "A Fundação Getulio Vargas disponibiliza mais de 200 cursos online gratuitos com certificado, em áreas como Administração, Economia, Direito e Tecnologia.",
    categories: [
      "Administração",
      "Economia",
      "Direito",
      "Tecnologia",
      "Gestão Pública",
    ],
    link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
  },
  {
    title: "Cursa",
    logo: "https://play-lh.googleusercontent.com/UAchx253Yo8rONsp5mrMdW48Ymltv98-b3k732lK2VlZDajHZ-cZhQQL83mHX6LDU4ws",
    description:
      "Plataforma que oferece uma ampla gama de cursos gratuitos com certificado em áreas como informática, idiomas, administração e saúde.",
    categories: ["Informática", "Idiomas", "Administração", "Saúde", "Design"],
    link: "https://cursa.app/",
  },
  {
    title: "Edutin Academy",
    logo: "https://edutin.com/favicon.ico",
    description:
      "Oferece mais de 6.000 cursos gratuitos com opção de certificado oficial, em diversas áreas do conhecimento.",
    categories: ["Educação", "Tecnologia", "Negócios", "Saúde", "Artes"],
    link: "https://edutin.com/cursos-gratis",
  },
  {
    title: "Lúmina (UFRGS)",
    logo: "https://www.ufrgs.br/sead/wp-content/uploads/2021/09/lumina-md.png",
    description:
      "Plataforma da Universidade Federal do Rio Grande do Sul que oferece cursos online gratuitos com certificado, desenvolvidos por professores universitários.",
    categories: [
      "Educação",
      "Tecnologia",
      "Ciências Humanas",
      "Saúde",
      "Meio Ambiente",
    ],
    link: "https://lumina.ufrgs.br/",
  },
  {
    title: "FreeCodeCamp",
    logo: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
    description:
      "Organização sem fins lucrativos que oferece cursos gratuitos em programação e desenvolvimento web, com certificados ao concluir projetos.",
    categories: [
      "Programação",
      "Desenvolvimento Web",
      "JavaScript",
      "Front-End",
      "Back-End",
    ],
    link: "https://www.freecodecamp.org/",
  },
  {
    title: "Veduca",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_lTnZ3huu_wOGlmRttq9ZQUP5rpLyS8n5XOIkZvtoXRlQ=s900-c-k-c0x00ffffff-no-rj",
    description:
      "Plataforma brasileira que oferece cursos online gratuitos com certificado, em parceria com universidades renomadas como USP e UNESP.",
    categories: [
      "Administração",
      "Engenharia",
      "Educação",
      "Saúde",
      "Sustentabilidade",
    ],
    link: "https://www.veduca.com.br/",
  },
  {
    title: "OpenClassrooms",
    logo: "https://openclassrooms.com/favicon.ico",
    description:
      "Plataforma francesa que oferece cursos gratuitos em diversas áreas, com opção de certificado pago, e foco em empregabilidade.",
    categories: [
      "Tecnologia",
      "Negócios",
      "Design",
      "Gestão de Projetos",
      "Marketing",
    ],
    link: "https://openclassrooms.com/",
  },
  {
    title: "Santander Bolsas",
    logo: "https://www.santander.com.br/sites/WPC_CMS/imagem/25-03-26_141606_M_santander_pf.png?blobnocache=true",
    description:
      "O Santander Bolsas oferece milhares de bolsas de estudo gratuitas em parceria com universidades renomadas do Brasil e do mundo. Os cursos abrangem áreas como idiomas, tecnologia, inovação, liderança e muito mais, com foco na empregabilidade e desenvolvimento profissional.",
    categories: ["Idiomas", "Tecnologia", "Liderança", "Inovação", "Negócios"],
    link: "https://www.becas-santander.com/pt_br/index.html",
  },

  // Adicionar mais cursos conforme necessário
];

export function getAllCourses() {
  return coursesData;
}

/**
 * Get all unique categories from all courses
 */
export function getAllCategories() {
  const categoriesSet = new Set();
  coursesData.forEach((course) => {
    course.categories.forEach((cat) => categoriesSet.add(cat));
  });
  return Array.from(categoriesSet).sort();
}
/**
 * Get courses filtered by category
 * @param {string} category
 */
export function getCoursesByCategory(category) {
  return coursesData.filter((course) => course.categories.includes(category));
}
export default coursesData;
