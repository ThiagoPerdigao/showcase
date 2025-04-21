const BannerAngher = () => {
  return (
    <section className="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 mt-12">
        <div className="mx-auto max-w-xl sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="whitespace-nowrap">
              Sistema{' '}
              <strong className="text-[#ff7b25]">
                <span className="text-[#486a72] font-normal">ANGHER</span>
              </strong>
            </span>
          </h1>

          <p className="text-black mt-4 sm:mt-6 leading-relaxed text-justify">
            É com grande satisfação que apresento o Sistema Angher, desenvolvido no primeiro semestre de 2024, uma solução digital desenvolvida para modernizar e otimizar a gestão do almoxarifado e da cantina do Centro de Educação Angher, instituição tradicional em Barbacena-MG, com mais de 54 anos de excelência no mercado educacional.
            <br /><br />
            Até então, esses setores eram gerenciados manualmente, com registros físicos que, além de demandarem tempo, estavam sujeitos a erros, inconsistências e possíveis perdas de documentos. Com o Sistema Angher, toda essa operação foi transformada em um ambiente digital intuitivo, seguro e eficiente, garantindo:
          </p>
        </div>
      </div>

      <img
        alt="Imagem do projeto ANGHER"
        src="/angher/angher.png"
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default BannerAngher;