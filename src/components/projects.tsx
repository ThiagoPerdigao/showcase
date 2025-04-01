import { FaReact, FaDatabase, FaBootstrap, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom"; // Importando Link para navegação interna

const projects = [
  {
    name: "Webmarker",
    image: "/cardsprojects/webMarker1.png",
    hoverImage: "/cardsprojects/webMarker2.png",
    link: "https://github.com/ThiagoPerdigao/webmarkermobile",
    description: "Aplicação móvel para organização pessoal de leituras, permitindo aos usuários registrar, editar e acompanhar suas leituras de forma eficiente.",
    techs: [<FaReact />, <SiTailwindcss />, <FaDatabase />],
  },
  {
    name: "Perdigamez",
    image: "/cardsprojects/perdigamez1.png",
    hoverImage: "/cardsprojects/perdigamez2.png",
    link: "https://perdigamez.vercel.app/",
    description: "O site oferece funcionalidades de pesquisa e visualização informações sobre jogos. Foi feito consumindo a API RAWG, que contém uma extensa base de dados.",
    techs: [<FaReact />, <SiTailwindcss />],
  },
  {
    name: "EZSNACK",
    image: "/cardsprojects/ezsnack1.png",
    hoverImage: "/cardsprojects/ezsnack2.png",
    link: "/ezsnack", // Agora leva para a página interna
    description: "O projeto propõe um sistema integrado web/app automatizado para gestão de cantinas escolares, facilitando pagamentos e recargas digitais para responsáveis e alunos.",
    techs: [<FaReact />, <SiSpringboot />, <SiTailwindcss />, <SiMysql />],
  },
  {
    name: "ANGHER",
    image: "/cardsprojects/angher1.png",
    hoverImage: "/cardsprojects/angher2.png",
    link: "/angher", // Rota interna
    description: "O Sistema de Gerenciamento de Estoque é uma solução integrada para controle de materiais e insumos garantindo um fluxo organizado de solicitações e registros de transações.",
    techs: [<FaHtml5 />, <FaJs />, <FaBootstrap />, <SiSpringboot />, <SiMysql />],
  },
];

const Projects = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            <span className="relative inline-block mb-4 mr-2">Principais</span>
            <strong className="text-blue-900">projetos</strong>
          </h1>
          <p className="mt-4 text-left max-w-4xl text-gray-600">
            Aqui estão alguns dos projetos que desenvolvi, mostrando minhas habilidades em diversas tecnologias e a criação de soluções inovadoras. Explore os detalhes de cada projeto e veja como cada um contribui para a evolução das minhas competências.
          </p>
        </header>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <li key={index}>
              {/* Se o link for externo, usa <a>, senão usa <Link> */}
              {project.link.startsWith("http") ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group relative block">
                  <ProjectCard project={project} />
                </a>
              ) : (
                <Link to={project.link} className="group relative block">
                  <ProjectCard project={project} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Componente para renderizar o card do projeto (reduzindo repetição)
interface Project {
  name: string;
  image: string;
  hoverImage: string;
  link: string;
  description: string;
  techs: JSX.Element[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <>
    <div className="relative h-[350px] sm:h-[450px]">
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-500 group-hover:opacity-0"
      />
      <img
        src={project.hoverImage}
        alt={project.name}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
      />
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
      <h3 className="text-xl font-semibold text-white group-hover:hidden">{project.name}</h3>
      <p className="mt-1.5 text-sm text-white group-hover:hidden">{project.description}</p>

      <div className="flex justify-between items-center w-full mt-4">
        {/* Botão estilizado */}
        <span className="relative flex items-center gap-2 border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-blue-900 transition-all group-hover:bg-blue-900 group-hover:text-white">
          <span className="absolute inset-y-0 right-0 w-[2px] bg-blue-900 transition-all group-hover:w-full z-0"></span>
          <span className="relative z-10">Ver detalhes</span>
        </span>

        {/* Ícones das tecnologias */}
        <div className="flex gap-2 text-white text-lg">
          {project.techs.map((icon, i) => (
            <span key={i} className="text-sm opacity-80">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Projects;
