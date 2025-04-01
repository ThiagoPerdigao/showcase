import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-900 h-[86%] p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center object-cover object-top shadow-lg">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                PROJETO <span className="text-[#fac141]">DESTAQUE</span>
              </h2>
              <h3 className="text-lg text-white mt-2">
                <span className="font-bold">Melhor Trabalho Interdisciplinar:</span> Aplicações Distribuídas
              </h3>

              <p className="text-white/90 mt-4">
                Tive a honra de apresentar meu projeto na mostra We Make Software – PUC Minas e receber o prêmio de Destaque do Trabalho Interdisciplinar: Aplicações Distribuídas! 
                <br /> <br />
                O projeto propõe um sistema automatizado para gestão de cantinas escolares, facilitando pagamentos e recargas digitais para responsáveis e alunos.
              </p>

              <div className="mt-6">
                <Link
                  to="/ezsnack"
                  className="group relative flex items-center gap-2 border border-blue-900 bg-white px-6 py-3 overflow-hidden transition-all mr-65"
                >
                  <span className="absolute inset-y-0 right-0 w-[2px] bg-yellow-400 transition-all group-hover:w-full z-0"></span>
                  <FaRegEye className="relative text-blue-900 transition-colors group-hover:text-blue-900 z-10" />
                  <span className="relative text-sm font-medium text-blue-900 transition-colors group-hover:text-blue-900 z-10">
                    Ver mais detalhes
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
            <img
              alt="Projeto Destaque"
              src="/EZSNACKBANNER.png"
              className="w-full h-[86%] object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;