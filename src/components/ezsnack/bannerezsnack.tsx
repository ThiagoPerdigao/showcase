const BannerEzSnack = () => {
    return (
      <section className="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Projeto
              <strong className="text-[#ffc100]"> <span className="text-black">EZ</span>SNACK </strong>
            </h1>
  
            <p className="hidden text-black md:mt-4 md:block leading-relaxed">
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
  