import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCopy } from "react-icons/fa";
import { useState } from "react";

const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
  navigator.clipboard.writeText(text);
  setCopied(true);
  setTimeout(() => setCopied(false), 3000);
};

const Banner = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <section className="bg-white flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Thiago
            <strong className="text-blue-900"> Perdigão </strong>
          </h1>
          <h2 className="text-xl font-semibold text-amber-400 mt-2">ENGENHEIRO DE SOFTWARE EM FORMAÇÃO</h2>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
          Sou estudante de Engenharia de Software na PUC Minas e atualmente estagiário de QA, onde aplico conceitos de qualidade de software, testes e validação de funcionalidades. Paralelamente, desenvolvo projetos web e mobile, com proficiência em React, JavaScript, Node.js, Java com Spring Boot, React Native, Tailwind CSS e SQL. 
<br /><br />
          Tenho facilidade em me adaptar a diferentes contextos e estou sempre em busca de evolução técnica — seja em testes, desenvolvimento ou metodologias ágeis. Valorizo boas práticas de UI/UX, organização de código e integração eficiente entre camadas do sistema.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="group relative flex items-center gap-2 border border-blue-900 px-6 py-3 overflow-hidden transition-all"
              href="https://www.linkedin.com/in/thiago-perdigao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-blue-900 transition-all group-hover:w-full z-0"></span>
              <FaLinkedin className="relative text-blue-900 transition-colors group-hover:text-white z-10" />
              <span className="relative text-sm font-medium text-blue-900 transition-colors group-hover:text-white z-10">
                LinkedIn
              </span>
            </a>
            <a
              className="group relative flex items-center gap-2 border border-blue-900 px-6 py-3 overflow-hidden transition-all"
              href="https://github.com/ThiagoPerdigao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-y-0 right-0 w-[2px] bg-blue-900 transition-all group-hover:w-full z-0"></span>
              <FaGithub className="relative text-blue-900 transition-colors group-hover:text-white z-10" />
              <span className="relative text-sm font-medium text-blue-900 transition-colors group-hover:text-white z-10">
                GitHub
              </span>
            </a>
            <button
              className="group relative flex items-center gap-2 border border-blue-900 px-6 py-3 overflow-hidden transition-all"
              onClick={() => copyToClipboard("thiagovitor299@gmail.com", setCopied)}
              onMouseEnter={() => setHovered("email")}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-blue-900 transition-all group-hover:h-full z-0"></span>
              {hovered === "email" ? (
                <FaCopy className="relative text-white transition-colors z-10" />
              ) : (
                <FaEnvelope className="relative text-blue-900 transition-colors group-hover:text-white z-10" />
              )}
              <span className="relative text-sm font-medium text-blue-900 transition-colors group-hover:text-white z-10">
                Email
              </span>
            </button>
            <button
              className="group relative flex items-center gap-2 border border-blue-900 px-6 py-3 overflow-hidden transition-all"
              onClick={() => copyToClipboard("31 99229 3154", setCopied)}
              onMouseEnter={() => setHovered("telefone")}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-900 transition-all group-hover:h-full z-0"></span>
              {hovered === "telefone" ? (
                <FaCopy className="relative text-white transition-colors z-10" />
              ) : (
                <FaPhone className="relative text-blue-900 transition-colors group-hover:text-white z-10" />
              )}
              <span className="relative text-sm font-medium text-blue-900 transition-colors group-hover:text-white z-10">
                Telefone
              </span>
            </button>
          </div>
        </div>
        <img
          src="/perfil.png"
          alt="Thiago Perdigão"
          className="mx-auto hidden max-w-md md:block rounded-full shadow-lg overflow-hidden"
        />
      </div>
      {copied && (
        <div 
          role="alert" 
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-md border border-gray-300 bg-white p-4 shadow-sm w-full sm:w-auto"
        >
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-blue-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex-1">
              <strong className="font-medium text-gray-900"> Copiado para a área de transferência! </strong>
            </div>
            <button
              className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
              type="button"
              aria-label="Dismiss alert"
              onClick={() => setCopied(false)}
            >
              <span className="sr-only">Dismiss popup</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
