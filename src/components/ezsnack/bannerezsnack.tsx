const BannerEzSnack = () => {
  return (
    <section className="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 mt-12">
        <div className="mx-auto max-w-xl sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="whitespace-nowrap">
              Projeto{' '}
              <strong className="text-[#ffc100]">
                <span className="text-black">EZ</span>SNACK
              </strong>
            </span>
          </h1>

          <p className="text-black mt-4 sm:mt-6 leading-relaxed text-justify">
            O EZSNACK é um projeto acadêmico desenvolvido na disciplina de Trabalho Interdisciplinar: Aplicações Distribuídas, com o objetivo de criar um sistema web e mobile utilizando mensageria.
            <br /><br />
            O projeto consiste em um sistema automatizado para gestão de cantinas escolares, permitindo que responsáveis recarreguem contas digitais para seus dependentes, oferecendo praticidade e segurança nas compras.
          </p>
        </div>
      </div>

      <img
        alt="Imagem do projeto EZSNACK"
        src="/ezsnack/ezsnack.png"
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default BannerEzSnack;