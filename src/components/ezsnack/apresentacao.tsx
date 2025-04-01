const Apresentacao = () => {
    return (
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Imagem à esquerda no desktop */}
            <div className="flex items-center justify-center order-2 md:order-1 h-full">
              <img
                alt="Apresentação do Projeto EZSNACK na We Make Software"
                src="/ezsnack/euApresentando.png"
                className="w-full h-full max-h-[600px] object-contain shadow-lg"
              />
            </div>
  
            {/* Container amarelo à direita no desktop */}
            <div className="bg-[#ffc100] p-8 md:px-12 lg:px-16 md:py-8 lg:py-12 flex flex-col justify-center shadow-lg order-1 md:order-2 h-full">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  <span className="text-black">RECONHECIMENTO</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                  PROJETO DESTAQUE
                </h3>
  
                <div className="space-y-4 mt-4">
                  <p className="text-gray-800">
                    Tive o prazer de apresentar o <strong>EZSNACK</strong> na Mostra <strong>We Make Software da PUC Minas</strong>, onde recebemos o certificado de <strong>MELHOR TI: Aplicações Distribuídas</strong>.
                  </p>
  
                  <p className="text-gray-800">
                    Na apresentação, expliquei como desenvolvemos uma <strong>solução completa</strong> para cantinas escolares, desde o <strong>sistema de recarga digital</strong> pelos pais até o <strong>aplicativo para pedidos</strong> dos alunos. Falei sobre os problemas reais que motivaram o projeto.
                  </p>
  
                  <p className="text-gray-800">
                    Destaquei nossa <strong> abordagem diferenciada, com pesquisa de mercado</strong> que mostrou <strong>80,7% </strong> de aceitação, e como criamos <strong>interfaces específicas para cada público</strong> - os alunos, os pais e os funcionários da cantina. Também apresentei nossa <strong>stack tecnológica.</strong>
                  </p>
  
                  <p className="text-gray-800">
                    Foi uma <strong>honra</strong> ter nosso trabalho <strong>reconhecido como destaque</strong>, validando todo o <strong> esforço da equipe</strong> em criar uma <strong> solução realmente inovadora para este desafio</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Apresentacao;