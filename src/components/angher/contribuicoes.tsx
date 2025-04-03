const ContribuicoesAngher = () => {
    return (
      <section className="py-16 bg-gray-200" id="contribuicoes">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl relative mb-8">
            <div className="relative inline-block">
              <span className="block text-[#486a72]">Minhas</span>
              <strong className="block text-[#ff7b25]">contribuições</strong>
            </div>
          </h1>
  
          <div className="space-y-4">
            {/* Planejamento */}
            <details className="group border-s-4 border-[#ff7b25] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-[#486a72] md:text-xl">
                  Planejamento
                </h2>
                <span className="shrink-0 rounded-full bg-[#ff7b25] p-1.5 text-white sm:p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Participei ativamente do levantamento de requisitos, modelando a aplicação e definindo os processos necessários. Mapeei os fluxos completos do sistema, desde o registro manual no estoque, até a criação da solicitação, aceite e registro automatizado.
              </p>
            </details>
  
            {/* Liderança no Desenvolvimento */}
            <details className="group border-s-4 border-[#ff7b25] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-[#486a72] md:text-xl">
                  Liderança Técnica
                </h2>
                <span className="shrink-0 rounded-full bg-[#ff7b25] p-1.5 text-white sm:p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Liderei a equipe de desenvolvimento definindo as necessidades técnicas da aplicação. Como líder técnico do frontend, estabeleci os padrões de código e arquitetura para ambos os clientes. Garanti a coesão entre os módulos e a implementação correta das integrações com o backend.
              </p>
            </details>
  
            {/* Desenvolvimento Frontend */}
            <details className="group border-s-4 border-[#ff7b25] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-[#486a72] md:text-xl">
                  Desenvolvimento Frontend (Javascript)
                </h2>
                <span className="shrink-0 rounded-full bg-[#ff7b25] p-1.5 text-white sm:p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Realizei a integração dos módulos de gestão de itens no estoque do almoxarifado e cantina, desenvolvendo a tela de solicitações. Implementei as interfaces administrativas completas, incluindo cadastro de funcionários, alunos e gestão das mesmas. Fui responsável pelo sistema de validação de usuário e pela integridade das rotas protegidas, garantindo segurança em todas as camadas da aplicação web. Além disso, criei uma interface para pedidos por alunos na cantina.
              </p>
            </details>
  
            {/* Design e Prototipagem */}
            <details className="group border-s-4 border-[#ff7b25] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-[#486a72] md:text-xl">
                  Design e Prototipagem
                </h2>
                <span className="shrink-0 rounded-full bg-[#ff7b25] p-1.5 text-white sm:p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                Defini o estilo visual completo do projeto, criando uma identidade coesa entre web e mobile. Desenvolvi protótipos focados na experiência do usuário diversificado. Estabeleci padrões de design que equilibravam simplicidade para os alunos e funcionalidade avançada para os administradores, garantindo usabilidade em todos os perfis.
              </p>
            </details>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContribuicoesAngher;