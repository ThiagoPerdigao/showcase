import { FaServer as ServerIcon, FaGithub } from 'react-icons/fa';
import { FiLayout as LayoutIcon, FiClipboard as ClipboardIcon } from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiBootstrap, SiCanva, SiGoogledocs } from 'react-icons/si';

export const TecnologiasAngher = () => {
  return (
    <section className="py-16 bg-[#ff7b25]" id="tecnologias">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Subtítulo alinhado à esquerda */}
        <h2 className="text-3xl font-bold text-[#486a72] mb-8 text-left">
          Tecnologias <span className='text-white'>Utilizadas</span>
        </h2>

        {/* Cards de Tecnologias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Backend */}
          <article className="border-l-4 border-[#486a72] bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#486a72] text-white rounded-full">
                <ServerIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <FaJava />, name: "Java", desc: "Linguagem principal do backend" },
                { icon: <SiSpringboot />, name: "Spring Boot", desc: "Framework para APIs REST" },
                { icon: <SiMysql />, name: "MySQL", desc: "Banco de dados relacional" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ff7b25] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card Frontend */}
          <article className="border-l-4 border-[#486a72] bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#486a72] text-white rounded-full">
                <LayoutIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <SiBootstrap />, name: "Bootstrap", desc: "Framework para estilização" },
                { icon: <FaJava />, name: "JavaScript", desc: "Linguagem principal do frontend" },
                { icon: <FaJava />, name: "HTML", desc: "Estrutura das páginas web" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ff7b25] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card Planejamento */}
          <article className="border-l-4 border-[#486a72] bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#486a72] text-white rounded-full">
                <ClipboardIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Documentação</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <FaGithub />, name: "GitHub", desc: "Controle de versão e Issues" },
                { icon: <SiCanva />, name: "Canva", desc: "Prototipagem" },
                { icon: <SiGoogledocs />, name: "Pacote Office Google", desc: "Documentação" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ff7b25] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};