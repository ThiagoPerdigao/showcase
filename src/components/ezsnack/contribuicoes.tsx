const Contribuicoes = () => {
    return (
      <section className="py-16 bg-gray-200">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl relative mb-8">
            <div className="relative inline-block">
              <span className="block">Minhas</span>
              <strong className="block text-[#ffc100]">contribuições</strong>
            </div>
          </h1>
  
          <div className="space-y-4">
            {/* Planejamento */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                  Planejamento
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Participei ativamente do levantamento de requisitos, modelando a aplicação e definindo os processos necessários. Mapeei os fluxos completos do sistema, desde a recarga pelos pais até o consumo pelos alunos, identificando pontos críticos como controle de filas e segurança nas transações.
              </p>
            </details>
  
            {/* Liderança no Desenvolvimento */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                  Liderança Técnica
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Liderei a equipe de desenvolvimento definindo as necessidades técnicas da aplicação. Como líder técnico do frontend, estabeleci os padrões de código e arquitetura para ambos os clientes (web e mobile). Garanti a coesão entre os módulos e a implementação correta das integrações com o backend.
              </p>
            </details>
  
            {/* Desenvolvimento Frontend */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                  Desenvolvimento Frontend (React)
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Realizei a integração dos módulos de gestão de pedidos e estoque, desenvolvendo a tela de exibição de fila em tempo real. Implementei as interfaces administrativas completas, incluindo cadastro de instituições e gestão das mesmas. Fui responsável pelo sistema de validação de usuário e pela integridade das rotas protegidas, garantindo segurança em todas as camadas da aplicação web.
              </p>
            </details>
  
            {/* Desenvolvimento Mobile */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                  Desenvolvimento Mobile (React Native)
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Implementei o sistema dinâmico de validação de usuário e segurança nas rotas, adaptando as permissões para cada tipo de usuário. Desenvolvi o módulo completo de realização de pedidos, histórico de transações e exibição de saldo. Participe ativamente do módulo de perfil do responsável, incluindo as funcionalidades de recarga e monitoramento do aluno, além de garantir a perfeita integração com todo o ecossistema do sistema.
              </p>
            </details>
  
            {/* Design e Prototipagem */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                  Design e Prototipagem
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Defini o estilo visual completo do projeto, criando uma identidade coesa entre web e mobile. Desenvolvi protótipos focados na experiência do usuário diversificado, desde crianças até funcionários da cantina. Estabeleci padrões de design que equilibravam simplicidade para os alunos e funcionalidade avançada para os administradores, garantindo usabilidade em todos os perfis.
              </p>
            </details>

            {/* Testes de API */}
            <details className="group border-s-4 border-[#ffc100] bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900 md:text-xl">
                Testes e Documentação de API
                </h2>
                <span className="shrink-0 rounded-full bg-[#ffc100] p-1.5 text-white sm:p-2">
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
                Realizei testes detalhados de todas as APIs utilizando Postman, assegurando que cada endpoint retornasse os status codes corretos e os dados esperados em diferentes cenários. Documentei alguns destes testes em um TestPlan abrangente, especificando casos de teste para operações críticas como processamento de pedidos, recargas e gestão de usuários, garantindo a qualidade e consistência das integrações.
            </p>
            </details>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contribuicoes;