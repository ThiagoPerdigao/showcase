import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-900 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center shadow-lg min-h-[500px]">
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
                  className="inline-flex items-center gap-2 border border-white bg-transparent px-6 py-3 text-white transition-all hover:bg-white hover:text-blue-900 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"></span>
                  <FaRegEye className="relative z-10" />
                  <span className="relative z-10 text-sm font-medium">
                    Ver mais detalhes
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              alt="Projeto Destaque"
              src="/EZSNACKBANNER.png"
              className="w-full h-full min-h-[500px] object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;